import React,{useContext} from 'react';
import "../Styles/ImageLinkForm.css";
import {InputContext} from "../Contexts/InputContext";
import {SignInContext} from "../Contexts/SignInContext";




const ImageLinkForm = () => {
    const [user,,,setCount] = useContext(SignInContext);
    const [input , setInput,,setBoxes ] = useContext(InputContext);

    const onSearch = (event) => {
        setInput(event.target.value);
    }

    const calBoxes = (data) => {
        const image = document.getElementById("inputimage");
        const height = Number(image.height);
        const width = Number(image.width);

        const boxesArr = data.map(box => {
            const bounding_box = box.region_info.bounding_box;
            return {
            "left_col" : bounding_box.left_col * width,
            "right_col" : width - (bounding_box.right_col * width),
            "top_row" : bounding_box.top_row * height,
            "bottom_row" : height - (bounding_box.bottom_row * height)
            }   
        });
        return boxesArr;

    } 

    const onSubmit = (event) => {
        fetch('https://sleepy-plateau-46870.herokuapp.com/getImage', {
                method:'post',
                headers:{'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    input: input
                })})
        .then(response => response.json())
        .then(response => calBoxes((response.outputs[0].data.regions)))
        .then(response => setBoxes(response))
        .then(
            fetch('https://sleepy-plateau-46870.herokuapp.com/image', {
                method:'put',
                headers:{'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    id:user.id
                })})
                .then(response => response.json())
                .then(data => setCount(data))
                .catch(err => console.log("Can't get entries"))
            )
        .catch(err => console.error(err))
        
    }

    return (
        <div className="main-div">
            <p className="f3" >{'This magic brain will detect faces in images. Give it a try!'}</p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input type="text" className="f4 pa2 w-70 center" onChange= {onSearch}/>
                    <button className="w-30 grow  f4 link ph3 pv2 dib white bg-light-purple center" onClick={onSubmit}>Detect</button>
                </div>
            </div>
        </div>

    )
}


export default ImageLinkForm;