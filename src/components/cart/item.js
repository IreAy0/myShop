/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';


class Item extends Component {
  render() {
    return (

      <div className="row">

        <div className="col-xs-4">
          <h4 className="product-name"><strong>{this.props.item.product.name}</strong></h4>
        </div>
        <div className="col-xs-6">
          <div className="col-xs-3 text-right">
            <h6>
              <strong>
                {this.props.item.product.price.current.text}
                <span className="text-muted">x</span>
              </strong>
            </h6>
          </div>

        </div>
      </div>
    );
  }
}

export default Item;
