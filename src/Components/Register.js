import React,{useContext , useState} from 'react';
import {Link,Redirect} from "react-router-dom";
import { SignInContext } from '../Contexts/SignInContext';
import {InputContext} from "../Contexts/InputContext";

const Register = () => {


    const [input,setInput,,] = useContext(InputContext);
    const [,setUser,,setCount] = useContext(SignInContext);

    const [name , setName] = useState("");
    const [email ,setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [condition , setCondition] = useState(false);

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const onNameChange = (event) => {
        setName(event.target.value);
    }

    const onPasswordChange = (event) =>{
        setPassword(event.target.value);
    }

    const onSubmitRegister = () => {
        if(email.length && password.length && name.length){
            fetch('https://sleepy-plateau-46870.herokuapp.com/register', {
            method:'post',
            headers:{'Content-Type' : 'application/json'},
            body: JSON.stringify({
                name: name,
                email : email,
                password : password
            })
        }).then(response => response.json())
        .then(data => {
            setUser(data);
            if (data.id){
                setCondition(true);
                setInput("");
                setCount(data.entries);
            }
        })
        }else{
            alert("Fields cannot be empty!");
        }
    }


    const renderElement = () => { 
            if(condition){
            return(
                <Redirect to='/App'/>
            )}
        }

    return (
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <div className="pa4 black-80">
            <div className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="username">Name</label>
                        <input 
                        onChange={onNameChange}
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="username"  id="username"/>
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input 
                        onChange={onEmailChange} 
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input 
                        onChange={onPasswordChange} 
                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                    </div>
                </fieldset>
                <div className="">
                    <input onClick={onSubmitRegister} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
                    {renderElement()}
                </div>
                <div className="lh-copy mt3">
                    <Link to="/">
                        <a href="#0" className="f6 link dim black db center">Already have an account? Sign In</a>
                    </Link>
                </div>
            </div>

        </div>
        </article>
    )
}

export default Register;