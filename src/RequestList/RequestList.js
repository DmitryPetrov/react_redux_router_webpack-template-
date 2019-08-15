import React from 'react';
import { connect } from 'react-redux';

import store from './../Store';
import { requestListRequest } from './actionCreatorList';
import Request from './Request/Request'

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
    const list = this.props.requestList.map((item, index) => {
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
      </div>
    )
  }
}

function mapStateToProps(store) { 
  return {
    requestList : store.requestListRequest.response.requestList,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (action) => dispatch(requestListRequest(action))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestList);

