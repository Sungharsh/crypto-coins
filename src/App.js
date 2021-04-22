import { Suspense, lazy } from 'react'

const GetCryptoCoins = lazy(() => import('./GetCrytoCoins'))

function App() {
  return (
    <Suspense
      fallback={
        <div>
          <h1 className='coin-text'>Loding...</h1>
        </div>
      }
    >
      <GetCryptoCoins />
    </Suspense>
  )
}

export default App
