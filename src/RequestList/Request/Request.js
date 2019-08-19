import React from 'react';
import { connect } from 'react-redux';

import store from './../../Store';
import { getRequestStatusRequest } from './actionCreatorList';
import StatmentRequest from './StatmentRequest';
import Incoming from './Incoming';

class Request extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      requestData: JSON.stringify(this.props.request, undefined, 2),
      showRequestData: false,
      requestDataButtonName: 'Expand',
    }

    this.getRequestStatusHandler = this.getRequestStatusHandler.bind(this);
    this.expandHandler = this.expandHandler.bind(this);
  }

  getRequestStatusHandler(event) {
    event.preventDefault();
    this.props.fetchData(this.props.request.requestId);
  }

  expandHandler(event) {
    event.preventDefault();

    if (this.state.showRequestData) {
      this.setState(
        {
          showRequestData: false,
          requestDataButtonName: 'Expand',
        }
      );
    } else {
      this.setState(
        {
          showRequestData: true,
          requestDataButtonName: 'Collapse',
        }
      );
    }
  }

  render() {
    let element = null;
    let requestData = null;

    if (this.state.showRequestData) {
      requestData = this.state.requestData;
      element = <p><b>Request name: {this.props.request.requestName}</b></p>;
    } else {
      if(this.props.request.requestName === "Statement Request"){
        element = <StatmentRequest request={this.props.request}/>;
      }
      if(this.props.request.requestName === "Incoming"){
        element = <Incoming request={this.props.request}/>;
      }
    }

    return (
      <div className="Request">
        {element}
        <pre>{requestData}</pre>
        <input type="button" value={this.state.requestDataButtonName} onClick={this.expandHandler}/>
        <input type="button" value="Get request status" onClick={this.getRequestStatusHandler}/>
      </div>
      )
  }
}

function mapStateToProps(store) { 
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (action) => dispatch(getRequestStatusRequest(action))
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(Request);

