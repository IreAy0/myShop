import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Header from './components/header';
import ProductList from './components/products/productList';

function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={ProductList} />
          </Switch>
        </div>

      </Router>

    </div>
  );
}

export default App;
