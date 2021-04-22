import { useState, useEffect } from 'react'
import axios from 'axios'
import ShowCryptoCoins from './ShowCryptoCoins'
import './App.css'

function App() {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=EUR&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((res) => {
        setCoins(res.data)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className='App'>
      <h1 className='coin-text'>Crypto Currency</h1>

      {coins.map((coin) => {
        return (
          <ShowCryptoCoins
            key={coin.id}
            image={coin.image}
            name={coin.name}
            symbol={coin.symbol}
            currentPrice={coin.current_price}
          />
        )
      })}
    </div>
  )
}

export default App
