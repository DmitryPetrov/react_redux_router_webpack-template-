import React from 'react';

class MessageFromServer extends React.Component {
  render() {
  	if (this.props.response.hasErrored === true) {
      return (
        <div>
          <h1>Sorry! There was an error loading the items</h1> 
          <p>{this.props.response.errorMessage}</p>
        </div>
        );
    }

    if (this.props.response.isLoading === true) {
      return <h1>Loading…</h1>;
    }

    return (
      <div className="MessageFromServer">
        <h1>Message from server: {this.props.response.message.status}</h1>
        <p>{this.props.response.message.message}</p>
      </div>
      );
  }
}

export default MessageFromServer;