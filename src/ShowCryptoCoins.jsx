import React from 'react'
import './show-crypto.css'

export const ShowCryptoCoins = ({
  image,
  name,
  symbol,
  currentPrice,
  highPrice_24_hours,
}) => {
  return (
    <>
      <tr className='coin-row'>
        <td className='coin'>
          <img src={image} alt='crypto' />
        </td>
        <td className='coin'>
          <h1 className='coin coin-symbol'>{name}</h1>
        </td>
        <td className='coin'>
          <p className='coin'>${symbol && currentPrice}</p>
        </td>
        <td className='coin'>
          <p className='coin'>${symbol && highPrice_24_hours}</p>
        </td>
        <td className='coin'>
          <p className='coin'>${symbol && highPrice_24_hours}</p>
        </td>
      </tr>
    </>
  )
}

export default ShowCryptoCoins
