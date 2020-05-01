/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts, addToCart } from '../../actions/index';


class productList extends PureComponent {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderList() {
    return this.props.products.map((product) => (
      // console.log('added to cart')
      <div className="ui link cards" key={product.id}>
        <div className="card">
          <div className="content">
            <Link to={`/products/${product.id}`} className="header">{product.name}</Link>
            <div className="meta">
              <a>{product.price.current.text}</a>
            </div>
            <div className="description" />
          </div>
          <div className="ui animated fade button" tabIndex="0" onClick={(e) => this.props.addToCart(this.props.cartItems, product)}>
            <div className="visible content">
              <i className="shop icon" />
            </div>
            <div className="hidden content">
              <i className="plus icon" />
            </div>
          </div>
          
        </div>
      </div>

    ));
  }

  render() {
    return (
      <div>
        <h2>Products</h2>
        <div className="ui grid container">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
  cartItems: state.cart.Items,

});
export default connect(mapStateToProps, { fetchProducts, addToCart })(productList);
