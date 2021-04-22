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
      <tr>
        <td className='coin'>
          <img src={image} alt='crypto' />
        </td>
        <td>
          <p className='coin coin-symbol'>{name}</p>
        </td>
        <td>
          <p className='coin'>{symbol}</p>
        </td>
        <td>
          <p>€{currentPrice}</p>
        </td>
        <td>
          <p>€{highPrice_24_hours}</p>
        </td>
        <td>
          <p>€{highPrice_24_hours}</p>
        </td>
      </tr>
    </>
  )
}

export default ShowCryptoCoins
