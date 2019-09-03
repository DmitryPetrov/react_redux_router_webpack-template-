import React from 'react';
import { connect } from 'react-redux';

import Message from './Message';
import { soapMessageListRequest } from './actionCreatorList';

class MessageList extends React.Component  {
  constructor(props) {
    super(props);
    this.refreshHandler = this.refreshHandler.bind(this);
  }

  refreshHandler(event) {
    this.props.fetchData();
  }

  render() {
    if(this.props.request.isSuccessed !== true) {
      return (
        <div className="MessageList">
          <input type="button" value="Refresh" onClick={this.refreshHandler}/>
        </div>
      );
    }

    if (this.props.request.response.soapMessageList === null) {
      return <div className="MessageList"></div>;
    }

    let list = itemList(Message, this.props.request.response.soapMessageList);

    return (
      <div className="MessageList">
        <input type="button" value="Refresh" onClick={this.refreshHandler}/>
        <br />
        <h3>SOAP messages:</h3>
        <br />
        {list}
      </div>
    );
  }
}

function itemList(Component, itemList) {
  let list = itemList.map((item, index) => {
    return (
      <div key={index}>
        <Component item={item}/>
      </div>
    )
  });

  return list;
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
