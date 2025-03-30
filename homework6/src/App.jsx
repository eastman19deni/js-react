import React from 'react';
import { Provider } from 'react-redux';
import { store } from './product/store';
import { ProductsList } from './product/ProductsList';
import './product/products.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Product Management</h1>
        <ProductsList />
      </div>
    </Provider>
  );
}

export default App;