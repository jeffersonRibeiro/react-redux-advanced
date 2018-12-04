import React, { Component } from 'react';

export default childComponent => {
  return class ComposedComponent extends Component {
    render() {
      return <childComponent />;
    }
  };
};
