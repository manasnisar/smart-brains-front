import React,{useContext} from 'react';
import {InputContext} from "../Contexts/InputContext";
import "../Styles/FaceRecognition.css";



const FaceRecognition = () => {
    const [input, , boxes,] = useContext(InputContext);

    return (
        <div className="recognition center ma">
            <div className="absolute mt1">
             <img id="inputimage" width="500" height="auto" src={input} alt=""/>
             {boxes.map(box => {
                 return(
                     <div 
                        className="bounding-box"
                        style={{top:box.top_row , right: box.right_col, left: box.left_col , bottom: box.bottom_row}}
                        key={input}
                     >
                     </div>
                 )
             })}
            </div>

        </div>
    )
}

export default FaceRecognition;