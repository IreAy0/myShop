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

  renderProduct = () => {
    const Bheight = {
      height: '20vh',
    };
    if (this.props.loading) {
      return (
        <div className="ui segment" style={Bheight}>
          <div className="ui active dimmer">
            <div className="ui text loader">Loading</div>
          </div>
          <p />
        </div>
      );
    }

    return (
      <div className="ui items">
        <div className="item">
          <a className="ui small image">
            <img />
          </a>
          <div className="content">
            <a className="header">{this.props.details.name}</a>
            <div className="description">
              <p>{this.props.details.description}</p>
              <p>{this.props.details.gender}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    console.log(this.props.details);

    return (

      <div className="">

        {this.renderProduct()}
      </div>

    );
  }
}
const mapStateToProps = (state) => ({

  details: state.detail.detail,
  loading: state.detail.loading,

});
export default connect(mapStateToProps, { fetchDetail })(productDetail);
