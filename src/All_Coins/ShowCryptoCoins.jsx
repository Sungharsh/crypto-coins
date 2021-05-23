import { useContext, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { CoinIDContext } from '../Context/CoinIDContext'
import '../App.css'
import PropTypes from 'prop-types'

export const ShowCryptoCoins = ({
  name,
  id,
  image,
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
        <Link
          to='/Coin-Deatils'
          className='deatilsBtn'
          onClick={() => {
            getCoinId()
          }}
        >
          Details
        </Link>
      </td>
    </tr>
  )
}

export default ShowCryptoCoins

ShowCryptoCoins.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.string,
  symbol: PropTypes.string,
  currentPrice: PropTypes.number,
  highPrice_24_hours: PropTypes.number,
  lowPrice_24_hours: PropTypes.number,
}
