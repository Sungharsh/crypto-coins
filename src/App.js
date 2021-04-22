import { Suspense, lazy } from 'react'
import './App.css'

const GetCryptoCoins = lazy(() => import('./GetCrytoCoins'))

function App() {
  return (
    <Suspense
      fallback={
        <div>
          <h1 className='loding'>Loding....</h1>
        </div>
      }
    >
      <GetCryptoCoins />
    </Suspense>
  )
}

export default App
