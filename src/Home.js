import React from 'react';
import './Home.css'
import Product from './Product'


function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image'
              src="https://i.ytimg.com/vi/-5QkMlkCt08/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBGVrRXfP-IfN2PQ1U-A_3USGTHeg"
              alt="" />
              <div className='home__row'>
                <Product />
              </div>
        </div>

      
    </div>
  )
}

export default Home;
