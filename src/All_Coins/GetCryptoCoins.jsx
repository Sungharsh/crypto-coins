import { useState, lazy, useEffect } from 'react'
import axios from 'axios'
import '../App.css'
import useSWR from 'swr'

const ShowCryptoCoins = lazy(() => import('./ShowCryptoCoins'))

//we can further lift fetcher using SWRConfig to the root component to globalise data so as to share
// data with sibiling, but for now we are ignoring it because api endpoint is only used in this component.
const fetcher = (url) => axios.get(url).then((res) => res.data)

function GetCryptoCoins(props) {
  const [AllCoins, setAllCoins] = useState([])

  const { data, error } = useSWR(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false',
    fetcher,
    { suspense: true }
  )

  useEffect(() => {
    setAllCoins(data)
  }, [setAllCoins, data])

  return (
    <div className='App'>
      <header>
        <h2>Crypto Currency List</h2>
      </header>
      <section>
        <table className='coin-container'>
          <thead>
            <tr className='coin-header'>
              <th>
                <p>Image</p>
              </th>
              <th>
                <p>Name</p>
              </th>
              <th>
                <p>Symbol</p>
              </th>
              <th>
                <p>Current Price</p>
              </th>
              <th>
                <p>Price-High-24hr</p>
              </th>
              <th>
                <p>Price-Low-24hr</p>
              </th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {AllCoins.map((coin) => {
              return (
                <ShowCryptoCoins
                  key={coin.id}
                  id={coin.id}
                  image={coin.image}
                  name={coin.name}
                  symbol={coin.symbol}
                  currentPrice={coin.current_price}
                  highPrice_24_hours={coin.high_24h}
                  lowPrice_24_hours={coin.low_24h}
                />
              )
            })}
            {error ? <p style={{ color: 'red' }}>{error.message}</p> : null}
          </tbody>
        </table>
      </section>
    </div>
  )
}

GetCryptoCoins.defaultProps = {
  id: 1,
  image: '/public/logo192.png',
  name: 'Coin name',
  symbol: 'Coin Symbol',
  currentPrice: 'Currnet Price',
  highPrice_24_hours: 'High price',
  lowPrice_24_hours: 'Low price',
}

export default GetCryptoCoins
