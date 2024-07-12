import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card';
import Cart from './Cart';
import '../styles/cont.css'

function Allproducts({cart,setcart}) {
    const product={
        name:'lg tv',
        price:'4555'
    }
    
    function addtocart(product){
        setcart([...cart,product])
        console.log(cart);
    }
  
  const products = [
    {
        id:'1',
      image: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/4fd83999831295.5efb78b2b5cb3.jpg',
      description: 'Villa',
      title: 'Villa'
    },
    {
        id:'2',
      image: 'https://foyr.com/learn/wp-content/uploads/2019/03/best-home-garden-ideas-1024x699.png',
      description: 'Garden',
      title: 'Garden'
    },
    {
        id:'3',
      image: 'https://images.homedepot-static.com/lifestyleimages/640x426/8b784421-0ece-435b-a56b-022f29409bad4.jpeg',
      description: 'Bath Room',
      title: 'Bath Room'
    },
    {
        id:'4',
      image: 'https://www.milindpai.com/wp-content/uploads/2023/03/maxresdefault.jpg',
      description: 'Bed Room',
      title: 'Bed Room'
    },
    {
        id:'5',
      image: 'https://hips.hearstapps.com/hmg-prod/images/built-in-refrigerators-1557866621.png',
      description: 'Kitchen',
      title: 'Kitchen'
    },
    {
        id:'6',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvHGWj-LcvigEm8VpH5B1JZci-NOIZipxJmw&usqp=CAU',
      description: 'Hall',
      title: 'Hall'
    }
  ];

 

  return (
    <div >
      <h1>Products</h1>
      <div className="product-list">
        
        {products.map((item) => (
         <Link to='/inddetail' state={item}>
          <Card 
            key={item.id} 
            product={item}
            addtocart={addtocart}             
          />
         </Link>
        ))}
        
      </div>
      <Cart cart={cart}/>
        <Link to='/inddetail' state={product}>view complete details</Link>
        </div>
  );
}

export default Allproducts;