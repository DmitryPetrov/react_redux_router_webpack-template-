import React from 'react';

export function withExpandButton(Component) {
  return (props) => {
    const [state, setState] = React.useState(false);

    const buttonHandler = event => {
      setState(!state);
    }

    const newProps = {
      json: state,
      buttonName: "JSON",
      buttonHandler: buttonHandler,
      ...props
    }

    return <Component  {...newProps}/>
  }
}


