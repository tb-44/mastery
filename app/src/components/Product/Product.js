import React, { Component } from 'react';

class Product extends Component {

    handleClick = () => {
        const { id, addToCart, removeFromCart, isInCart } = this.props;

        if (isInCart) {
            removeFromCart(id);
        } else {
            addToCart(id);
        }
    }

    render() {
        const { name, price, image, isInCart } = this.props;

        return (
            <div className="product thumbnail">
                <img src={image} alt="product" />
                <div className="caption">
                    <h3>{name}</h3>
                    <div className="product__price">${price} </div>
                    <div className="product__button-wrap">
                        <button
                            className={isInCart ? 'btn btn-danger' : 'btn btn-primary'}
                            onClick={this.handleClick}
                        >
                            {isInCart ? 'Remove' : 'Add to cart'}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;