import { useState, useMemo, Suspense } from 'react'
import { Route } from 'react-router-dom'
import GetCryptoCoins from './All_Coins/GetCryptoCoins'
import GetDetails from './Get_Coin_Details/GetDetails'
import NavBar from './NavBar'
import { CoinIDContext } from './Context/CoinIDContext'
import './App.css'

function App() {
  const [CoinId, setCoinId] = useState('')

  const coinID = useMemo(() => ({ CoinId, setCoinId }), [CoinId, setCoinId])

  return (
    <>
      <CoinIDContext.Provider value={coinID}>
        <NavBar />
        <Suspense fallback={<h1 className='loding'>Loding....</h1>}>
          <Route path='/' exact component={GetCryptoCoins} />
          <Route path='/Coin-Deatils' component={GetDetails} />
        </Suspense>
      </CoinIDContext.Provider>
    </>
  )
}

export default App
