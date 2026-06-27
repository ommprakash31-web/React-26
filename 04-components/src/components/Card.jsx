import React from 'react'
import '../App.css'

const Card = (props) => {
  console.log(props)
  return (
    <div className='card-components'>
        <img src="https://i.pinimg.com/736x/c7/b4/8b/c7b48b67a37128aac9d14ab6f7ded0fb.jpg" alt="" />
        <h2>Followers:{props.count}</h2>
        <button onClick={props.increaseCount}>Follow</button>
    </div>
  )
}

export default Card