import React  from "react";

function Input({type,placeHolder}){

    return(
        <div>
            <input type={type }placeHolder={placeHolder}></input>
        </div>
    )
}
export default Input;