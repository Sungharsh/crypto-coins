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
        <h2>Your selected Coin Details</h2>
      </header>
      <section>
        <table className='coin-container'>
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
                <p>€ MarketCap</p>
              </th>
              <th>
                <p>Homepage</p>
              </th>
              <th>Genesis Date</th>
              <th></th>
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
                    {selectedCoins.hashing_algorithm ? (
                      <p>{selectedCoins.hashing_algorithm}</p>
                    ) : (
                      'not avaiable'
                    )}
                  </td>
                  <td>
                    {selectedCoins.market_data ? (
                      <p>€ {selectedCoins.market_data.market_cap.eur}</p>
                    ) : null}
                  </td>
                  <td>
                    {selectedCoins.links ? (
                      <a
                        target='_blank'
                        rel='noreferrer'
                        href={selectedCoins.links.homepage[0]}
                        className='weblink'
                      >
                        <p>Visit link</p>
                        Website
                      </a>
                    ) : null}
                  </td>
                  <td>
                    {selectedCoins.genesis_date ? (
                      <p>{selectedCoins.genesis_date}</p>
                    ) : (
                      'not available'
                    )}
                  </td>
                  <td>
                    <Link to='/'>
                      <button className='deatilsBtn'>back</button>
                    </Link>
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
      </section>
      {selectedCoins.description ? (
        <div className='description-container'>
          <h2 className='description-heading'>Description</h2>
          <p className='description'>{selectedCoins.description.es}</p>
        </div>
      ) : null}
    </div>
  )
}

export default GetDetails
