import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';


function ProductScreen(props){
	
	const product = data.products.find(x => x._id === props.match.params.id);

	console.log(product);

	return (
	<div>
	<h1>Product Information</h1>
	<div><Link to="/">Back to result</Link></div>

    <div className="details">
       <div className ="details-image">
            <img src={product.image} alt="product" />
       </div>
             
                  
                  <div className="product-name">{product.name}</div>
                  
                  <div className="product-brand">{product.brand}</div>
                  <div className="product-price">{product.price}</div>
                  <div className="product-rating">{product.rating} Stars ({product.numReviews} Reviews)</div>
    </div>
         
    </div>
      )
}

export default ProductScreen;