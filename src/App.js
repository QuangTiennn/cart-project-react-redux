import React, { Component } from 'react';

//import component
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsContainer from './components/containers/ProductsContainer';
import CartContainer from './components/containers/CartContainer';
import MessageContainer from './components/containers/MessageContainer';
class App extends Component {
    render(){
        return (
            <div>
                {/* <!-- Header --> */}
                <Header />
                {/* Main */}
                <main id="mainContainer">
                    <div className="container">
                        {/* <!-- Products --> */}
                        <ProductsContainer/>
                        {/* <!-- Message --> */}
                        <MessageContainer/>
                        {/* <!-- Cart --> */}
                        <CartContainer/>
                    </div>
                </main>
                {/* <!-- Footer --> */}
               <Footer />
            </div>
        )
    }
}
export default App;
