import React, { Component } from 'react';
import Header from './components/Header.js'
import Products from './components/Products.js'
import Message from './components/Message.js'
import Footer from './components/Footer.js'
import Cart from './components/Cart.js'
class App extends Component {
      render(){
      return (
        <div>
            <Header />
            <main id="mainContainer">
                <div className="container">
                    <Products />
                    <Message />
                    <Cart />
                </div>
            </main>
            <Footer />
        </div>
        );
    }
}

export default App;
