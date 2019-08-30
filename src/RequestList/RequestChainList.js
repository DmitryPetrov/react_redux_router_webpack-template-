import React from 'react';
import { connect } from 'react-redux';

import { requestListRequest } from './actionCreatorList';
import RequestChain from './RequestChain'
import { itemList } from './itemList'
import { RequestChainListStyle } from './../style';

class RequestChainList extends React.Component {
  constructor(props) {
    super(props);
    this.refreshHandler = this.refreshHandler.bind(this);
  }

  refreshHandler(event) {
    event.preventDefault();
    this.props.fetchData();
  }

  render() {
    let list = null;
    if (this.props.request.isSuccessed === true) {

      let chainList = this.props.request.response.requestChainList;
      if (this.props.nextStep.isSuccessed === true) {
        for (let i = 0; i < chainList.length; i++) {
          if (this.props.nextStep.response.requestChain.responseId === chainList[i].responseId) {
            chainList[i] = this.props.nextStep.response.requestChain;
          }
        }
      }

      list = itemList(RequestChain, chainList);
    }

    return(
      <div className="RequestChainList" style={RequestChainListStyle}>
        <input type="submit" value="Refresh" onClick={this.refreshHandler}/>
        {list}
      </div>
    )
  }
}

function mapStateToProps(store) { 
  return {
    request: store.requestList,
    nextStep: store.nextStep,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (action) => dispatch(requestListRequest(action))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestChainList);

