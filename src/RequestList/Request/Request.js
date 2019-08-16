import React from 'react';
import { connect } from 'react-redux';

import store from './../../Store';
import { getRequestStatusRequest } from './actionCreatorList';

class Request extends React.Component {
  constructor(props) {
    super(props);

    this.buttonHandler = this.buttonHandler.bind(this);
  }

  buttonHandler(event) {
    event.preventDefault();
    this.props.fetchData(this.props.request.requestId);
  }

  render() {
    let request = this.props.request;

    const bankNameList = request.accounts.map((item, index) => {
      if(item instanceof Object){
        return (
          <div key={index}>
            <lable>bank name {index}: {item.bankName}</lable>
          </div>)
        }
      return <div key={index}></div>;
    });

    return (
      <div className="Request">
        <br/>
        <lable>request name: {request.requestName}</lable>
        <br/>
        <lable>request id: {request.requestId}</lable>
        <br/>
        <lable>org name: {request.orgName}</lable>
        <br/>
        <lable>from date: {request.fromDate}</lable>
        <br/>
        <lable>to date: {request.toDate}</lable>
        {bankNameList}
        <br/>

        <input type="submit" value="Get Request Status" onClick={this.buttonHandler}/>
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

