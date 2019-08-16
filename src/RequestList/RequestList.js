import React from 'react';
import { connect } from 'react-redux';

import store from './../Store';
import { requestListRequest } from './actionCreatorList';
import Request from './Request/Request'
import MessageFromServer from './../components/MessageFromServer';


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

    if (request.isSuccessed === true) {
      const list = request.response.requestList.map((item, index) => {
        if(item !== undefined){
          return (
            <div key={index}>
              <br/>
              <Request index={index} request={item}/>
            </div>)
          }
        return <div key={index}></div>;
      });

      return(
        <div  className="RequestList">
          <input type="submit" value="Обновить" onClick={this.buttonHandler}/>
          {list}
          <MessageFromServer request={this.props.requestListRequest} />
          <MessageFromServer request={this.props.getRequestStatusRequest} />
        </div>
      )
    }

    return(
      <div className="RequestList">
        <input type="submit" value="Обновить" onClick={this.buttonHandler}/>
        <MessageFromServer request={this.props.requestListRequest} />
        <MessageFromServer request={this.props.getRequestStatusRequest} />
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

