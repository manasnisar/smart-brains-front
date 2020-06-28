import React,{useContext} from 'react';
import "../Styles/Nav.css";
import {Link} from "react-router-dom";
import Tilt from "react-tilt";
import brain from "../Assets/brain.png";
import {SignInContext} from "../Contexts/SignInContext";

const Navigation = () => {
    const [,setUser] = useContext(SignInContext);

    const handleSignOut = () => {
        setUser({});

    }
    return (
        <nav>
            <div className="logo">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 30 }}>
                <div className="Tilt-inner"><img src={brain} alt="brain"/></div>
            </Tilt>
            </div>
            <Link to="/">
             <p onClick = {handleSignOut} className="f4 link dim black pa3 pointer">Sign Out</p>
            </Link>
        </nav>
    )
}

export default Navigation;
