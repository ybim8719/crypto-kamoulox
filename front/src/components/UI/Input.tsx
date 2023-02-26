import React from 'react'
import classes from './Input.module.css';

const Input: React.FC<{
    type: string, 
    id: string, 
    label: string, 
    value: string,
    placeholder: string,
    required: boolean,
    touched ?: boolean,
    valid ?: boolean,
    onTouched: (inputId: string) => void
    onChanged: (inputId: string, value: string) => void
}> = (props) => {
  return (
    <div className={classes.input}>
        {props.label && <label htmlFor={props.id}>{props.label}</label>}
        {props.valid ? "valid" : "invalid"} 
        {props.touched ? "touché " : "untouched"} 
        <input 
          type={props.type} 
          id={props.id} 
          value={props ? props.value : ""}
          placeholder={props.placeholder}
          onChange={e => props.onChanged(props.id, e.target.value)}
          onBlur={e => props.onTouched(props.id)}
          required={props.required}
        /> 
    </div>
  )
}

export default Input;