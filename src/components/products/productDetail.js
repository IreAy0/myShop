/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchDetail } from '../../actions/index';

export class productDetail extends PureComponent {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchDetail(id);
  }

  render() {
    return (
      <div>
        {this.props.details.description}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({

  details: state.detail[ownProps.match.params.id],

});
export default connect(mapStateToProps, { productDetail })(productDetail);
