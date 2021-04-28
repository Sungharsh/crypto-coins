import { render } from '@testing-library/react'
import GetCryptoCoins from './GetCryptoCoins'
import { CoinDetailsProvider } from '../Context/CoinDetailsContext'

test('renders app component', () => {
  render(<GetCryptoCoins />, { wrapper: CoinDetailsProvider })
})
