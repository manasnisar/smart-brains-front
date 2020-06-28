import React,{createContext , useState } from "react";


export const InputContext = createContext();

export const InputProvider = (props) =>{
    const [input,setInput] = useState("");
    const [boxes , setBoxes] = useState([]);


    return(
        <InputContext.Provider value = {[input ,setInput, boxes , setBoxes]}>
            {props.children}
        </InputContext.Provider>
    )
};