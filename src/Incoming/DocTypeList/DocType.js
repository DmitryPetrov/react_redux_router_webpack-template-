import React from 'react';

import store from './../../store';
import {setDocType, removeDocType} from './actionCreatorList'

class DocType extends React.Component {
  constructor(props) {
    super(props);

    this.docTypeHandler = this.docTypeHandler.bind(this);

    this.buttonHandler = this.buttonHandler.bind(this);
  }

  docTypeHandler(event) {
    store.dispatch(setDocType(event.target.value, this.props.index));
  }

  buttonHandler(event) {
    event.preventDefault();
    store.dispatch(removeDocType(this.props.index));
  }

  render() {
    return (
      <div className="DocType">
        <form method="post" onSubmit={this.buttonHandler}>
          <label>Doc type: </label>
          <input type="text" onChange={this.docTypeHandler}/>

          <br/>
          <input type="submit" value="Remove" />
        </form>
      </div>
      )
  }
}

export default DocType;
