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
      <div className="item" key={product.id}>
        <i className="large middle aligned icon user" />
        <div className="content">
          <div className="">
            <div className="description">
              <h2>{product.brandName}</h2>
             
              {/* <p>{post.body}</p> */}
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
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
 
});
export default connect(mapStateToProps, { fetchProducts })(productList);
