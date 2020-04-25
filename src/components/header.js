import React from 'react';
import { Link } from 'react-router-dom';

const header = () => (
  <div className="ui secondary pointing menu">
    <Link to="/" className="item">
      MyShop
    </Link>
    <div className="right menu">
      <Link to="/" className="item">
        All Products
      </Link>
      <button type="button" className="ui button primary">
        Sign In
      </button>

    </div>
  </div>
);

export default header;
