import React from 'react'
import classes from './Button.module.css';

const Button: React.FC<{ disabled?: boolean, title: string }> = (props) => {
  return (
    <button
        className={classes.button}
        disabled={props.disabled}
        type="submit"
    >
      {props.title}
    </button>
  )
}

export default Button