import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CoinIDContext } from '../Context/CoinIDContext'
import '../App.css'
import axios from 'axios'

const GetDetails = (props) => {
  const { CoinId } = useContext(CoinIDContext)
  const [selectedCoins, setSelectedCoins] = useState([])
  const [isLoding, setIsLoding] = useState(true)

  useEffect(() => {
    if (CoinId) {
      setTimeout(() => {
        setIsLoding(true)
        const url = `https://api.coingecko.com/api/v3/coins/${CoinId}?localization=EUR&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
        async function getCoinDetails() {
          axios
            .get(url)
            .then((res) => {
              setSelectedCoins(res.data)
              setIsLoding(false)
            })
            .catch((error) => setSelectedCoins(error), setIsLoding(false))
        }
        getCoinDetails()
      }, 1000)
    }

    return setIsLoding(true)
  }, [CoinId])

  return (
    <div className='coin-container'>
      <header className='coin-subtitle'>
        <h2 className='coin'>
          {selectedCoins.name ? (
            <>
              <p>
                Your selected crypto coin :
                <span style={{ color: 'Blue' }}> {selectedCoins.name} </span>
              </p>
            </>
          ) : (
            <h2 className='loding'>Loding...</h2>
          )}
        </h2>
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
              {isLoding && (
                <td>
                  <h1 className='loding'>Loding...</h1>
                </td>
              )}
              {typeof selectedCoins !== 'undefined' && !isLoding && (
                <>
                  <td className='coin'>
                    {selectedCoins.name ? (
                      <p className='coin-uppercase'>{selectedCoins.name}</p>
                    ) : (
                      <h2 className='loding'>Loding...</h2>
                    )}
                  </td>
                  <td>
                    <p className='coin-uppercase'>{selectedCoins.symbol}</p>
                  </td>
                  <td>
                    {selectedCoins.hashing_algorithm ? (
                      <p>{selectedCoins.hashing_algorithm}</p>
                    ) : (
                      <p>
                        {selectedCoins.hashing_algorithm === null
                          ? 'Not Available'
                          : '----'}
                      </p>
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
                      <p>
                        {selectedCoins.genesis_date === null
                          ? 'Not Available'
                          : '-----'}
                      </p>
                    )}
                  </td>
                  <td>
                    <Link to='/' className='deatilsBtn'>
                      back
                    </Link>
                  </td>
                </>
              )}
            </tr>
          </tbody>
        </table>
      </section>
      {selectedCoins.description ? (
        <div className='description-container coin-container'>
          <h2 className='description-heading'>Description</h2>
          <p className='description'>{selectedCoins.description.es}</p>
        </div>
      ) : (
        <p>------</p>
      )}
    </div>
  )
}

export default GetDetails
