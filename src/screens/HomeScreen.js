import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from '../actions/productAction';


function HomeScreen(props){

    //Hooks setting 
    const [products, setProduct] = useState([]);
    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProduct());
        return () => {
            //cleanup
        };
    }, [])

	return (
    <div>
	<h1>HomeScreen</h1>	
	<ul className="products">
          {
            products.map(product =>
              <li key={product._id}>
                <div className="product">
                  <Link to={'/product/' + product._id}>
                  <img className="product-image" src={product.image} alt="product" />
                  </Link>
                  
                  <div className="product-name">
                   <Link to={'/product/' + product._id}>{product.name}</Link>
                  </div>
                  
                  <div className="product-brand">{product.brand}</div>
                  <div className="product-price">{product.price}</div>
                  <div className="product-rating">{product.rating} Stars ({product.numReviews} Reviews)</div>
                </div>
              </li>
            )
          }
        </ul>
     </div>   
    )
}

export default HomeScreen;