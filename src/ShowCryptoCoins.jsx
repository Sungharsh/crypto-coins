import React from 'react'
import './show-crypto.css'

export const ShowCryptoCoins = ({ image, name, symbol, currentPrice }) => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
        </div>

        <div className='coin-data'>
          <p className='coin-price'>${currentPrice}</p>
        </div>
      </div>
    </div>
  )
}

export default ShowCryptoCoins
