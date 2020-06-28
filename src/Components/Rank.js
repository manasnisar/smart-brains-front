import React,{useContext} from 'react';
import {SignInContext} from "../Contexts/SignInContext";

const Rank = () => {
    const [,,count,] = useContext(SignInContext);
    return (
        <div>
            <div className="white f3">
                {'You image count is '}
            </div>
            <div className="white f1">
                {`#${count}`}
            </div>
        </div>
    )
}

export default Rank;