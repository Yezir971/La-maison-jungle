import React from 'react';
import '../App.css';
import Banner from './Banner';
import Cart from './cart';
import ShoppingList from './ShoppingList';
import Footer from './footer';

function App() {
  return (
  <React.Fragment>
    <Banner />
    <Cart />
    <ShoppingList />
    <Footer />
  </React.Fragment>

  );
}

export default App;
