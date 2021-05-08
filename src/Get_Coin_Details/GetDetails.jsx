import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CoinIDContext } from '../Context/CoinIDContext'
import '../App.css'
import axios from 'axios'

const GetDetails = () => {
  const { CoinId } = useContext(CoinIDContext)
  const [selectedCoins, setSelectedCoins] = useState([])
  const [isLoding, setIsLoding] = useState(true)

  useEffect(() => {
    if (CoinId) {
      setTimeout(() => {
        setIsLoding(true)
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
        setIsLoding(false)
      }, 1000)
    }
    return setIsLoding(true)
  }, [CoinId])

  return (
    <div className='coin-container'>
      <header className='coin-subtitle'>
        <h2>&nbsp; Your selected Coin Details</h2>
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
              {typeof selectedCoins !== 'undefined' && !isLoding && (
                <>
                  <td className='coin'>
                    <p className='coin-uppercase'>{selectedCoins.name}</p>
                  </td>
                  <td>
                    <p className='coin-uppercase'>{selectedCoins.symbol}</p>
                  </td>
                  <td>
                    <p className='coin-uppercase'>{selectedCoins.symbol}</p>
                  </td>
                  <td>
                    <p>{selectedCoins.symbol}</p>
                  </td>
                  <td>
                    <p>{selectedCoins.symbol}</p>
                  </td>

                  <td>
                    <p>{selectedCoins.links ? 'Link' : 'Loding...'}</p>
                  </td>
                  <td>
                    <p>{selectedCoins.genesis_date}</p>
                  </td>
                </>
              )}
              {isLoding && (
                <td>
                  <h1 className='loding'>Loding...</h1>
                </td>
              )}
            </tr>
          </tbody>
        </table>
        <Link to='/'>
          <button className='deatilsBtn'>back</button>
        </Link>
      </section>
    </div>
  )
}

export default GetDetails
