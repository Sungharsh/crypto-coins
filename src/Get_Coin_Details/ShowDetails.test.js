import { render } from '@testing-library/react'
import ShowDetails from './ShowDetails'
import { CoinDetailsProvider } from '../Context/CoinDetailsContext'

test('renders app component', () => {
  render(<ShowDetails />, { wrapper: CoinDetailsProvider })
})
