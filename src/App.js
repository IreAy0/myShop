import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Header from './components/header';
import ProductList from './components/products/productList';
import ProductDetails from './components/products/productDetail';
import CartList from './components/cart/cart';

function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={ProductList} />
            <Route path="/products/:id" exact component={ProductDetails} />
            <Route path="/cart" exact component={CartList} />
          </Switch>
        </div>

      </Router>

    </div>
  );
}

export default App;
