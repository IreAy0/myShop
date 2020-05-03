/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './item';

class Cart extends Component {
  render() {
    let total = 0;
    this.props.cart.map((item) => total += item.product.price.current.value * item.quantity);
    const cart = this.props.cart.length > 0 ? (
      <div>
        <div className="card-body">
          {
            this.props.cart.map((item) => (
              <div key={item.product.id}>
                <Item item={item} />
              </div>
            ))
          }
        </div>
        <div className="card-footer">
          <div className="row text-center">
            <div className="col-xs-11">
              <h4 className="text-right">Total : <strong>${total.toFixed(2)}</strong></h4>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="card-body">
        <p>empty cart</p>
      </div>
    );
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xs-12">
            <div className="card ">
              <div className="card-header">
                <div className="card-title">
                  <div className="row">
                    <div className="col-xs-6">
                      <h5>
                        <i className="shopping basket icon" />

                        My Shopping Cart
                      </h5>
                    </div>

                  </div>
                </div>
              </div>

              {cart}


            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ cart: state.cart.cart });

export default connect(mapStateToProps)(Cart);
