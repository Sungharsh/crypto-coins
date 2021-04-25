import { useState, useEffect, Suspense, lazy } from 'react'
import axios from 'axios'
import '../App.css'

const ShowCryptoCoins = lazy(() => import('./ShowCryptoCoins'))

function GetCryptoCoins() {
  const [AllCoins, setAllCoins] = useState([])

  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false'

  useEffect(() => {
    async function getCoins() {
      await axios
        .get(url)
        .then((res) => {
          setAllCoins(res.data)
        })
        .catch((error) => console.log(error))
    }

    getCoins()
  }, [])

  return (
    <div className='App'>
      <header>
        <h1>Crypto Currency</h1>
      </header>
      <section>
        <Suspense
          fallback={
            <div>
              <h1 className='loding'>Loding....</h1>
            </div>
          }
        >
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
            </tbody>
          </table>
        </Suspense>
      </section>
    </div>
  )
}

export default GetCryptoCoins
