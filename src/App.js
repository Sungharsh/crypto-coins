import { useState, useEffect } from 'react'
import axios from 'axios'
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
        console.log(res.data)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Hello world</h1>
      </header>
    </div>
  )
}

export default App
