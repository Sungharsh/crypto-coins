const CoinDetails = ({
  name,
  symbol,
  algorithm,
  description,
  market_cap,
  homePage,
  date,
}) => {
  return (
    <tr>
      <td className='coin'>
        <p className='coin-uppercase'>{name}</p>
      </td>
      <td>
        <p className='coin-uppercase'>{symbol}</p>
      </td>
      <td>
        <p className='coin-uppercase'>{algorithm}</p>
      </td>
      <td>
        <p>{description}</p>
      </td>
      <td>
        <p>€ {market_cap}</p>
      </td>
      <td>
        <p>{homePage}</p>
      </td>
      <td>
        <p>{date}</p>
      </td>
    </tr>
  )
}

export default CoinDetails
