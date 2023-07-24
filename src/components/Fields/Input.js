import React from 'react'
import "../CSS/Field.css"

function Input(props) {
    return (
        <div>
            <label className='text-ash-blue text-sm'>{props.label}</label>
            <input type={props.text} name={props.name} placeholder={props.placeHolder} className='w-[100%] text-grey-logo text-sm p-2 border' onChange={(e) => props.handleChange(e)} />
        </div>
    )
}

export default Input
