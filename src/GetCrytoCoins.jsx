import { useState, useEffect } from 'react'

import axios from 'axios'
import ShowCryptoCoins from './ShowCryptoCoins'
import './App.css'

function App() {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=EUR&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      )
      .then((res) => {
        setCoins(res.data)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className='App'>
      <header>
        <h1>Crypto Currency</h1>
      </header>
      <section>
        <table className='coin-container'>
          <thead className='coin-header'>
            <tr>
              <th>
                <p className='td-heading'>Image</p>
              </th>
              <th>
                <p className='td-heading'>Name</p>
              </th>
              <th>
                <p className='td-heading'>Symbol</p>
              </th>
              <th>
                <p className='td-heading'>Current Price</p>
              </th>
              <th>
                <p className='td-heading'>High-24hr-Price</p>
              </th>
              <th>
                <p className='td-heading'>Low-24hr-Price</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => {
              return (
                <ShowCryptoCoins
                  key={coin.id}
                  image={coin.image}
                  name={coin.name}
                  symbol={coin.symbol}
                  currentPrice={coin.current_price}
                  highPrice_24_hours={coin.high_24h}
                />
              )
            })}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default App
