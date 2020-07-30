import React from 'react';


const Input = ({label, type, id, handleChange, name, value, handleClick}) => {
    return(
        <>
        <label>{label}</label>
        <input type={type} id={id} onChange={handleChange} name={name} value={value} onClick={handleClick}/>
        </>
    )
}

export default Input;