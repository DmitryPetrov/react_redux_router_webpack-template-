import React from 'react';
import { connect } from 'react-redux';

import { requestListRequest } from './actionCreatorList';
import Request from './Request/Request'
import GetRequestStatus from './Request/GetRequestStatus';


class RequestList extends React.Component {
  constructor(props) {
    super(props);
    this.buttonHandler = this.buttonHandler.bind(this);
  }

  buttonHandler(event) {
    event.preventDefault();
    this.props.fetchData();
  }

  render() {
    let request = this.props.requestListRequest;

    let list = null;
    if (request.isSuccessed === true) {
      list = request.response.requestList.map((item, index) => {
        if(item.requestName !== null){
          return (
            <div key={index}>
              <br/>
              <Request index={index} request={item}/>
            </div>
          )
        }
        return <div key={index}></div>;
      });
    }

    return(
      <div className="RequestList">
        <input type="submit" value="Refresh" onClick={this.buttonHandler}/>
        {list}
        <br/>
        <GetRequestStatus request={this.props.getRequestStatusRequest} />
      </div>
    )
  }
}

function mapStateToProps(store) { 
  return {
    requestListRequest : store.requestListRequest,
    getRequestStatusRequest: store.getRequestStatusRequest,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (action) => dispatch(requestListRequest(action))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestList);

