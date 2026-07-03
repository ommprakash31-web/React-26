import React from 'react'
import '../App.css'

const Card = (props) => {
  console.log(props)
  return (
    <div className='card-components'>
        <img src="https://i.pinimg.com/736x/70/c3/f9/70c3f90e37dd3860633117182b90956b.jpg" alt="" />
        <h2>Followers:{props.count}</h2>
        <button onClick={props.increaseCount}>Follow</button>
    </div>
  )
}

export default Card