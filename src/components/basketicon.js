/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class basketicon extends Component {
  render() {
    this.props.cartUpdated();
    console.log(this.props.cart.length);
    const cartNumber = this.props.cart.length === 0 ? (
      <button type="button" className="btn btn-primary">
        <i className="shopping basket icon" />
        <span className="badge badge-light">0</span>

      </button>
    ) : (
      <button type="button" className="btn btn-primary">
        <i className="shopping basket icon" />
        <span className="badge badge-light">
          {this.props.cart.length}
        </span>

      </button>
    );
    return (
      <div>
        {cartNumber}
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  cartUpdated: () => true,
});
export default connect(mapStateToProps)(basketicon);
