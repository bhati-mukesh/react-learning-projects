import React from 'react';
import mobile from '../assests/images/mobile.jpg'
import cart from '../assests/images/cart.jpg'

function Home(props) {
    console.log(props.cartData)
    return (
        <>
            <div className="add-to-cart">
                <span className="cart-item-count">{props.cartData.length}</span>
                <img src={cart} alt=""/>
            </div>
            <h1>Home Component</h1>
            <div>
                <div className="cart-wrapper">
                    <div className="img-wrapper item">
                        <img src={mobile} alt="mobile-pic"/>
                    </div>
                    <div className="text-wrapper item">
                        <span>I-Phone</span>
                        <span>Price : $1000.0</span>
                    </div>
                    <div className="btn-wrapper item">
                        <button onClick={()=>{props.addToCartHandler({price:1000,name:"IPhone 12 Pro"})}} >Add to cart</button>
                    </div>
                </div>
            </div>  
        </>
    );
}

export default Home;