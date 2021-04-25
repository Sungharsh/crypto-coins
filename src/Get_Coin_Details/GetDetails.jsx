import React, { useContext } from 'react'
import ShowDetails from './ShowDetails'
import { Link } from 'react-router-dom'
import { CoinDetailsContext } from '../Context/CoinDetailsContext'
import { CoinIDContext } from '../Context/CoinIDContext'
import '../App.css'

const GetDetails = () => {
  const { Coin } = useContext(CoinDetailsContext)
  const { CoinId } = useContext(CoinIDContext)

  const selectedCoin = Coin.filter((item) => item.id === CoinId)

  return (
    <div className='coin-container'>
      <header className='coin-subtitle'>
        <button className='deatilsBtn'>
          <Link to='/'>back</Link>
        </button>
        <h1>&nbsp; Your selected Coin Details</h1>
      </header>
      <section>
        <table>
          <thead className='coin-header'>
            <tr>
              <th>
                <p>Name</p>
              </th>
              <th>
                <p>Symbol</p>
              </th>
              <th>
                <p>Algorithm</p>
              </th>
              <th>
                <p>Description</p>
              </th>
              <th>
                <p>Market Cap in Euro</p>
              </th>
              <th>
                <p>Homepage</p>
              </th>
              <th>Genesis Date</th>
            </tr>
          </thead>
          <tbody>
            {selectedCoin.map((coin) => {
              return (
                <ShowDetails
                  key={coin.id}
                  name={coin.name}
                  symbol={coin.symbol}
                  algorithm={coin.hashing_algorithm}
                  description={coin.description}
                  market_cap={coin.market_data.market_cap.eur}
                  homePage={'homepage'}
                  // homePage={coin.links.homepage[0]}
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

export default GetDetails