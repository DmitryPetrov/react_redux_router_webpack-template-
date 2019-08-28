import React from 'react';

export function withExpandButton(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        show: false,
        buttonName: 'Expand',
      }

      this.buttonHandler = this.buttonHandler.bind(this);
    }

    buttonHandler(event) {
      if (this.state.show) {
        this.setState({show: false, buttonName: 'Expand',});
      } else {
        this.setState({show: true, buttonName: 'Collapse',});
      }
    }

    render() {
      const props = {
        showJson: this.state.show,
        ...this.props,
      }

      return (
        <div>
          <Component  {...props}/>
          <input type="button" value={this.state.buttonName} onClick={this.buttonHandler}/>
        </div>
        )
    }
  }
}


