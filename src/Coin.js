
import React from 'react';
import './coin.css';
import {TrendingDown,TrendingUp} from '@material-ui/icons'
const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,rank,
  priceChange
}) => {
  return (
    <div className='coin'>

<div className='coin_contain'>
<div className='coin_contain_head'>
<img src={image} alt='crypto' />
<h1>{name}</h1>
<p >{symbol}</p>
</div>
<div className='coin_contain_prices'>
<div className='coin_contain_prices1'>
<p >Price: ${price}</p>
<p >
Vol: ${marketcap.toLocaleString()}
</p>
<p > Mkt_Cap$: {volume.toLocaleString()}</p>
{priceChange < 0 ? (
            <p className='red'>Per: {priceChange.toFixed(2)}%</p>
          ) : (
            <p className='green'>Per: {priceChange.toFixed(2)}%</p>
          )}
<p>Rank:{rank}</p>
</div>
<div className='coin_contain_prices2'>
{priceChange < 0 ? (
          <TrendingDown className="red"/>
          ) : (
            <TrendingUp className="green"/>
          )}
</div>
</div>
</div>

      {/* <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>${price}</p>
          <p className='coin-volume'>${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
          )}

          <p className='coin-marketcap'>
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Coin;