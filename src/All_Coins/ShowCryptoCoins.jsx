import { useContext, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { CoinIDContext } from '../Context/CoinIDContext'
import { CoinDetailsContext } from '../Context/CoinDetailsContext'
import axios from 'axios'
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
  const { setCoin } = useContext(CoinDetailsContext)
  const { CoinId, setCoinId } = useContext(CoinIDContext)

  const url = `https://api.coingecko.com/api/v3/coins/${CoinId}?localization=EUR&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`

  const handleGetCoin = () => {
    setTimeout(() => {
      async function getCoinDetails() {
        await axios
          .get(url)
          .then((res) => {
            setCoin(res.data)
          })
          .catch((error) => console.log(error))
      }
      getCoinDetails()
    }, 500)
  }

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
            handleGetCoin()
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
