import React from 'react';
import { connect } from 'react-redux';

import Message from './Message';
import { soapMessageListRequest } from './actionCreatorList';
import { itemList } from './../functions/itemList'

const URL_GET_ALL_MESSAGE = '/soapMessage/list/all';
const URL_GET_LAST_REQUEST_MESSAGE = '/soapMessage/list/lastRequest';
const URL_REMOVE_ALL_MESSAGE = '/soapMessage/remove/all';

class MessageList extends React.Component  {
  constructor(props) {
    super(props);
    this.getAllHandler = this.getAllHandler.bind(this);
    this.getLastRequestHandler = this.getLastRequestHandler.bind(this);
    this.removeAllHandler = this.removeAllHandler.bind(this);
  }

  getAllHandler(event) {
    this.props.fetchData(URL_GET_ALL_MESSAGE);
  }

  getLastRequestHandler(event) {
    this.props.fetchData(URL_GET_LAST_REQUEST_MESSAGE);
  }

  removeAllHandler(event) {
    this.props.fetchData(URL_REMOVE_ALL_MESSAGE);
  }

  render() {
    if(this.props.request.isSuccessed !== true) {
      return (
        <div className="MessageList">
          <input type="button" value="Get all message list" onClick={this.getAllHandler}/>
          <input type="button" value="Get last request message list" onClick={this.getLastRequestHandler}/>
        </div>
      );
    }

    return (
      <div className="MessageList">
        <input type="button" value="Get all message list" onClick={this.getAllHandler}/>
        <input type="button" value="Get last request message list" onClick={this.getLastRequestHandler}/>
        <br />
        <input type="button" value="Remove all" onClick={this.removeAllHandler}/>
        <h3>SOAP messages:</h3>
        <br />
        {itemList(Message, this.props.request.response.soapMessageList)}
      </div>
    );
  }
}

function mapStateToProps(store) { 
  return {
    request: store.soapMessageList,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (action) => dispatch(soapMessageListRequest(action))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
