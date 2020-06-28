import React,{createContext, useState} from "react";

export const SignInContext = createContext();

export const SignInProvider = (props) => {

    const [count , setCount] = useState(0);
    const [user , setUser] = useState({});

    return(
        <SignInContext.Provider value={[user ,setUser , count , setCount]}>
            {props.children}
        </SignInContext.Provider>
    )

}