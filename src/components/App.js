import React from 'react';
import '../App.css';
import Banner from './Banner';
import Cart from './cart';
import ShoppingList from './ShoppingList';

function App() {
  return (
  <React.Fragment>
    <Banner />
    <Cart />
    <ShoppingList />
  </React.Fragment>

  );
}

export default App;
