import React, {useEffect, useState} from 'react';
import './Home.css'
import Product from './Product';
import ProductsContainer from './ProductsContainer';
import ProductForm from "./ProductForm";
import Upload from "./Upload";



function Home() {
  const [products, setProducts] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  // Load products from localStorage on component mount
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  const addProduct = (product) => {
    const updatedProducts = [...products, product];
    setProducts(updatedProducts);
    
    // Save updated products to localStorage
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };
    const handleImageUpload = (urls) => {
      setImageUrls(urls);
    };
  return (
    <div class="bg-gradient-to-r from-indigo-200 from-10% via-sky-200 via-30% to-emerald-200 to-90% ...">

    <div className='home'>
        <div className='home__container'>

            <img className='home__image'
              src="https://i.ytimg.com/vi/-5QkMlkCt08/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBGVrRXfP-IfN2PQ1U-A_3USGTHeg"
              alt="" />
              <div  className='home__row'>
              <Product 
                id={12343431}
                title='Apprenticed to a Himalayan Master'
                price={349}
                image='https://satsang-foundation.org/wp-content/uploads/2022/06/Buy-Sri-Ms-Apprenticed-to-a-Himalayan-Master.jpg'
                rating={5}
                />
              <Product 
                id={12343431}
                title='Apprenticed to a Himalayan Master'
                price={349}
                image='https://satsang-foundation.org/wp-content/uploads/2022/06/Buy-Sri-Ms-Apprenticed-to-a-Himalayan-Master.jpg'
                rating={2}
                />
              <Product 
                id={12343431}
                title='Apprenticed to a Himalayan Master'
                price={349}
                image='https://satsang-foundation.org/wp-content/uploads/2022/06/Buy-Sri-Ms-Apprenticed-to-a-Himalayan-Master.jpg'
                rating={4}
                />
              <Product 
                id={12343431}
                title='Apprenticed to a Himalayan Master'
                price={349}
                image='https://satsang-foundation.org/wp-content/uploads/2022/06/Buy-Sri-Ms-Apprenticed-to-a-Himalayan-Master.jpg'
                rating={4}
                />

              </div>

              <div className='home__row'>
              <Product 
                id={12343431}
                title='Apprenticed to a Himalayan Master'
                price={349}
                image='https://satsang-foundation.org/wp-content/uploads/2022/06/Buy-Sri-Ms-Apprenticed-to-a-Himalayan-Master.jpg'
                rating={4}
                />
              <Product 
                id={12343431}
                title='Apprenticed to a Himalayan Master'
                price={349}
                image='https://satsang-foundation.org/wp-content/uploads/2022/06/Buy-Sri-Ms-Apprenticed-to-a-Himalayan-Master.jpg'
                rating={4}
                />
              <Product 
                id={12343431}
                title='Apprenticed to a Himalayan Master'
                price={349}
                image='https://satsang-foundation.org/wp-content/uploads/2022/06/Buy-Sri-Ms-Apprenticed-to-a-Himalayan-Master.jpg'
                rating={4}
                />
              </div>
              <div className='home__row'>
              <Product 
                id={12343431}
                title='Apprenticed to a Himalayan Master'
                price={349}
                image='https://satsang-foundation.org/wp-content/uploads/2022/06/Buy-Sri-Ms-Apprenticed-to-a-Himalayan-Master.jpg'
                rating={4}
                />
               

              </div>
              <div className="home__row">
                <ProductsContainer products={products} imageUrls={imageUrls} />

              </div>
              </div>

      
    </div>
    </div>

  )
}

export default Home;
