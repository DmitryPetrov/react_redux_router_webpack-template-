import React from 'react';
import { connect } from 'react-redux';

import store from './../../Store';
import { getRequestStatusRequest } from './actionCreatorList';
import MessageFromServer from './../../components/MessageFromServer'


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
    return (
      <div className="Request"> 
          <pre>{JSON.stringify(this.props.request, null, 2) }</pre>
          <input type="submit" value="Отправить" onClick={this.buttonHandler}/>
          <MessageFromServer request={this.props.getRequestStatusResponse} />
      </div>
      )
  }
}

function mapStateToProps(store) { 
  console.log("Request mapStateToProps");
  console.log(store.getRequestStatusRequest);
  return {
    getRequestStatusResponse: store.getRequestStatusRequest,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (action) => dispatch(getRequestStatusRequest(action))
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(Request);

