/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions/index';

class Item extends Component {
  handleRemove = (e) => {
    e.preventDefault();
    this.props.removeFromCart(this.props.item.product.id);
  }

  render() {
    return (


      <div className="ui horizontal segments">
        <div className="ui segment">
          <p>{this.props.item.product.name}</p>
        </div>
        <div className="ui segment">
          <p>{this.props.item.product.price.current.text}</p>
        </div>
        <div className="ui segment">
          <button type="button" onClick={this.handleRemove} className="btn btn-link btn-xs">
            <i className="trash alternate outline icon" />
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null, { removeFromCart })(Item);
