import React from 'react'
import { Link } from 'react-router-dom'

export default function Listitems({ coin }) {
  return (
    <div className='homecrypto'>

      <Link to={`/${coin.id}`}>
        <span className='homecryptoimage'><img src={coin.image} style={{borderRadius: '50%'}}/>  </span>
        <span className='homecryptoname'> {coin.name} </span>
        {coin.priceBtc &&
          <span className='homecryptoprice'>
            <span className='homecryptobtc'>
              {coin.priceBtc} USD
            </span>
          </span>
        }
      </Link>
    </div>
  )
}