import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {ArrowBackOutlined} from '@material-ui/icons'
import './bitcoin.css'; 
import Coin from './Coinhome';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
       
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins?.filter(coin =>
    coin?.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='coin-base'>
    
      {filteredCoins?.map((coin,index) => {
        
        return (
            index<10&&(
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            // marketcap={coin.total_volume}
            // volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
            rank={coin.market_cap_rank}
          />
        )        );
      })}
    </div>
  );
}

export default App;