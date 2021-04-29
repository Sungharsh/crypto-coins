import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CoinIDContext } from '../Context/CoinIDContext'
import '../App.css'
import axios from 'axios'

const GetDetails = () => {
  const { CoinId } = useContext(CoinIDContext)
  const [selectedCoins, setSelectedCoins] = useState([])

  useEffect(() => {
    if (CoinId) {
      const url = `https://api.coingecko.com/api/v3/coins/${CoinId}?localization=EUR&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`

      async function getCoinDetails() {
        await axios
          .get(url)
          .then((res) => {
            setSelectedCoins(res.data)
          })
          .catch((error) => console.log(error))
      }
      getCoinDetails()
    }
  }, [CoinId])

  return (
    <div className='coin-container'>
      <header className='coin-subtitle'>
        <h1>&nbsp; Your selected Coin Details</h1>
      </header>
      <section>
        <table className='detailsRow'>
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
            <tr>
              <td className='coin'>
                <p className='coin-uppercase'>{selectedCoins.name}</p>
              </td>
              <td>
                <p className='coin-uppercase'>{selectedCoins.symbol}</p>
              </td>
              <td>
                <p className='coin-uppercase'>algorithm</p>
              </td>
              <td>
                <p>Link</p>
              </td>
              <td>
                <p>€ market_cap</p>
              </td>
              <td>
                {/* {selectedCoins.links.map((item) => {
                  return <p>{item[0]} </p>
                })} */}
                <p>€ market_cap</p>
              </td>
              <td>
                <p>{selectedCoins.genesis_date}</p>
              </td>
            </tr>
          </tbody>
        </table>
        <button className='deatilsBtn'>
          <Link to='/'>back</Link>
        </button>
      </section>
    </div>
  )
}

export default GetDetails
