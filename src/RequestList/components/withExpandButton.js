import React from 'react';

export function withExpandButton(Component) {
  return (props) => {
    const [state, setState] = React.useState(false);

    const buttonHandle = event => {
      setState(!state);
    }

    const newProps = {
      json: state,
      buttonName: "JSON",
      buttonHandle: buttonHandle,
      ...props
    }

    return <Component  {...newProps}/>
  }
}


