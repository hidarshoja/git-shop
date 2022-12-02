import React, { Component } from 'react'
import Product from './Product'
import CartProduct from './CartProduct'
import Social from './Social'

export default class Shop extends Component {

    constructor(props) {
        super(props)

        this.state = {
            products: [
                { id: 1, title: 'Bag Shops', price: 10, img: 'Images/bag.png' },
                { id: 2, title: 'Dress Shops', price: 15, img: 'Images/dress.png' },
                { id: 3, title: 'Hat shops', price: 20, img: 'Images/hat.png' },
                { id: 4, title: 'Laptop shops', price: 130, img: 'Images/laptop.png' },
                { id: 5, title: 'Mobail shops', price: 95, img: 'Images/mobail.png' },
                { id: 6, title: 'Shirt', price: 50, img: 'Images/Shirt.png' },
                { id: 7, title: 'dress shops', price: 60, img: 'Images/index1.png' },
                { id: 8, title: 'Cofee', price: 5, img: 'Images/Cofee.png' },
            ],

            shoppingCart: [],
            socials: [
                { id: 1, href: 'https://www.youtube.com', img: 'Images/YouTube Logo.png' },
                { id: 2, href: 'https://www.spotify.com', img: 'Images/Spotify Logo.png' },
                { id: 3, href: 'https://www.facebook.com', img: 'Images/FaceBook Logo.png' },
            ],
        }

this.addProductToCart = this.addProductToCart.bind(this);
this.emptyShoppingCart = this.emptyShoppingCart.bind(this);
this.removeProduct = this.removeProduct.bind(this);
    }
 addProductToCart(productId){

     let  mainProduct = this.state.products.find(product => {
        return product.id === productId
     })
     console.log(mainProduct);
     this.setState(prev => {
        return {
            shoppingCart : [...prev.shoppingCart , mainProduct]
        }
     })
         
 }

emptyShoppingCart(){
    this.setState({
        shoppingCart : []
    })
}
removeProduct(productId){
   
    let newShoppingCart = this.state.shoppingCart.filter(product => {
        return product.id !== productId
    })

    this.setState({
        shoppingCart : newShoppingCart
    })
}
    render() {
        return (
            <>
                <header class="main-header">
                    <nav class="main-nav nav">
                        <ul>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">STORE</a></li>
                            <li><a href="#">ABOUT</a></li>
                        </ul>
                    </nav>
                    <h1 class="band-name band-name-large">Online-Shop-shoja </h1>
                </header>
                <section class="container content-section">
                    <div class="shop-items">
                    {this.state.products.map(product  => (

                        <Product {...product} onAddProduct = {this.addProductToCart}/>
                    ))}
                    </div>
                </section>
                <section class="container content-section">
                    <h2 class="section-header">CART</h2>
                    <div class="cart-row">
                        <span class="cart-item cart-header cart-column">ITEM</span>
                        <span class="cart-price cart-header cart-column">PRICE</span>
                        <span class="cart-quantity cart-header cart-column">Doing</span>
                    </div>
                    <div class="cart-items">
                         {this.state.shoppingCart.map(product =>(

                        <CartProduct {...product} onRemove ={this.removeProduct}/>
                         ))}


                    </div>
                    <button class="btn btn-primary btn-purchase" type="button" onClick={this.emptyShoppingCart}>
                        Empty Cart
                    </button>
                </section>
                <footer class="main-footer">
                    <div class="container main-footer-container">
                        <h3 class="band-name">The Generics</h3>
                        <ul class="nav footer-nav">
                            {this.state.socials.map(social => (

                            <Social {...social}/>
                            ))}
                        </ul>
                    </div>
                </footer>


            </>
        )
    }
}