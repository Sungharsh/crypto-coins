import { Suspense } from 'react'
import { render } from '@testing-library/react'
import GetCryptoCoins from './GetCryptoCoins'

test('renders GetCryptoCoins component', () => {
  render(
    <Suspense fallback={<h1 className='loding'>Loding....</h1>}>
      <GetCryptoCoins />
    </Suspense>
  )
})
