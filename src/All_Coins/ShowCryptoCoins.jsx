import { useContext, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { CoinIDContext } from '../Context/CoinIDContext'
import '../App.css'

export const ShowCryptoCoins = ({
  id,
  image,
  name,
  symbol,
  currentPrice,
  highPrice_24_hours,
  lowPrice_24_hours,
}) => {
  const { setCoinId } = useContext(CoinIDContext)
  const getCoinId = useCallback(() => setCoinId(id), [id, setCoinId])

  return (
    <tr>
      <td className='coin'>
        <img src={image} alt='crypto' />
      </td>
      <td>
        <p className='coin-uppercase'>{name}</p>
      </td>
      <td>
        <p className='coin-uppercase'>{symbol}</p>
      </td>
      <td>
        <p>€ {currentPrice}</p>
      </td>
      <td>
        <p>€ {highPrice_24_hours}</p>
      </td>
      <td>
        <p>€ {lowPrice_24_hours}</p>
      </td>
      <td>
        <button
          onClick={() => {
            getCoinId()
          }}
          className='deatilsBtn'
        >
          <Link to='/Coin-Deatils'>Details</Link>
        </button>
      </td>
    </tr>
  )
}

export default ShowCryptoCoins
