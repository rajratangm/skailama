import React from 'react'
import './Button.css'
import homeIcon from './home.svg'

const Button = () => {
  return (
    <div>
        <button className='button'><img src={homeIcon}/>Go Back Home</button>
      
    </div>
  )
}

export default Button
