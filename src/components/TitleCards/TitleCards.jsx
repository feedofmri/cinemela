import React from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'

const TitleCards = () => {
  return (
    <div className='TitleCards'>
      <h2 className='title'>Popular Right Now</h2>
      {cards_data.map((card, index) => (
        <div className='card' key={index}>
          <img src={card.image} alt={card.title} className='card-image' />
          <h3 className='card-title'>{card.title}</h3>
          <p className='card-description'>{card.description}</p>
        </div>
      ))}
    </div>
  )
}

export default TitleCards