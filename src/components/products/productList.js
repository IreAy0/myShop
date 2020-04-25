/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../actions/index';

class productList extends PureComponent {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderList() {
    return this.props.products.map((product) => (
      <div className="ui link cards" key={product.id}>
        <div className="card">
          <div className="content">
            <Link to={`/products/${product.id}`} className="header">{product.name}</Link>
            <div className="meta">
              <a>{product.price.current.text}</a>
            </div>
            <div className="description" />
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

});
export default connect(mapStateToProps, { fetchProducts })(productList);
