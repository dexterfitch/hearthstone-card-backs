import React from 'react'

const Card = ({ name, description, img }) => (
  <div className="card">
    <img src={ img } alt={ name } />
    <div className="card-text">
      <h4>{ name }</h4>
      <p>{ description }</p>
    </div>
  </div>
)