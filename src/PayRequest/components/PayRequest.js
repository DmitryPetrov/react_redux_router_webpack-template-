import React from 'react';
import { connect } from 'react-redux';

import store from './../../store';
import MessageFromServer from './../../components/MessageFromServer';
import PayRequestView from './PayRequestView';
import { updateData, payRequestRequest, addPayRequestPart } from './../actionCreatorList';


const PayRequest = (props) => {
  const submit = event => {
    let filteredPartPayments = props.data.partPayments
      .filter(item => item !== undefined )
      .filter(item => item !== null);

    let data = props.data;
    data.partPayments = filteredPartPayments;

    props.fetchData(data);
  }

  return (
    <div>
      <PayRequestView 
        partPayments={props.data.partPayments}
        addPayRequestPartHandle={event => store.dispatch(addPayRequestPart())}
        submit={submit}
        signCollectionHandle={signCollection => store.dispatch(updateData(signCollection))}
        dataForSign={props.dataForSign}
      />
      <MessageFromServer request={props.request} />
    </div>
  )
}

function mapStateToProps(store) {
  // {signCollection: null}
  // предотвращяет исчезновение надписи о заверщенной генерации подписи 
  // после генерации подписи
  return {
  	data : Object.assign({}, store.payRequest.data),
    dataForSign : Object.assign({}, store.payRequest.data, {signCollection: null}),
    request: Object.assign({}, store.payRequest.request),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (action) => dispatch(payRequestRequest(action))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PayRequest);

