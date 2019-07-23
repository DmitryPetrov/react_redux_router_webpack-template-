import React from 'react';

class MessageFromServer extends React.Component {
  render() {
  	console.log("MessageFromServer props")
		console.log(this.props)

  	if (this.props.response.hasErrored === true) {
        return <p>Sorry! There was an error loading the items: {this.props.response.errorMessage}</p>;
    }

    if (this.props.response.isLoading === true) {
        return <p>Loading…</p>;
    }

    return (
      <div className="MessageFromServer">
        <h1>Message from server : {this.props.response.message}</h1>
      </div>
    );
  }
}

export default MessageFromServer;