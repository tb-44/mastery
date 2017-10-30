import React from 'react';
import Product from '../../containers/Product';

const ProductList = ({ products }) => {
    return (
        <div>
            <h3>SuperHero Products Listed Below:</h3>
            <ul className="product-list">
              {products.map(product => (
                  <li key={product.id} className="product-list__item">
                    <Product {...product} />
                  </li>
              ))}
            </ul>
        </div>
    );
}

export default ProductList;