import React,{useContext,useState} from 'react';
import {Link,Redirect} from "react-router-dom";
import {SignInContext} from "../Contexts/SignInContext";
import {InputContext} from "../Contexts/InputContext";

const SignIn = () => {
    
    const [,setInput,,] = useContext(InputContext);
    const [,setUser,,setCount] = useContext(SignInContext);

    const [condition , setCondition] = useState(false);
    const [email ,setEmail] = useState("");
    const [password , setPassword] = useState("");
    
    
    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const onPasswordChange = (event) =>{
        setPassword(event.target.value);
    }


    const onSubmitSignIn =  () => {
        if(email.length && password.length){
            fetch('https://sleepy-plateau-46870.herokuapp.com/signin', {
            method:'post',
            headers:{'Content-Type' : 'application/json'},
            body: JSON.stringify({
                email : email,
                password : password
            })
            })
            .then(response => response.json())
            .then(data => {
                if(data.id){
                setCondition(true)
                setCount(data.entries)
                setInput("")
                setUser(data)
            }
                else{
                    alert(data);
                }
            })
            .catch(err => console.error(err))

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
                    <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input onChange = {onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input onChange = {onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                    </div>
                </fieldset>
                <div className="">
                    <input onClick = {onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
                    {renderElement()}
                </div>
                <div className="lh-copy mt3">
                    <Link to="/register">
                        <a href="#0" className="f6 link dim black db center">Register</a>
                    </Link>
                </div>
            </div>

        </div>
        </article>
    )
}
export default SignIn;