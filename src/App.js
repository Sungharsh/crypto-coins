import { Suspense, lazy } from 'react'

const GetCryptoCoins = lazy(() => import('./GetCrytoCoins'))

function App() {
  return (
    <Suspense fallback={<div>Loding...</div>}>
      <GetCryptoCoins />
    </Suspense>
  )
}

export default App
