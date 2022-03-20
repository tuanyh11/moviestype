import React from 'react'

interface Props {
    className: string,
    value: string,
    onClick: Function,
}

const Button:React.FC<Props> = (props: Props):JSX.Element => {
  
  return (
    <button className={`btn ${props.className}`} onClick={props.onClick ? props.onClick(): null}>
        {props.value}
    </button>
  )
}

export default Button