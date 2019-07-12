import React from 'react';

class MessageFromServer extends React.Component {
  render() {
    return (
      <div className="MessageFromServer">
        <h1>Message from server: {this.props.message}</h1>
      </div>
    )
  }
}

export default MessageFromServer;