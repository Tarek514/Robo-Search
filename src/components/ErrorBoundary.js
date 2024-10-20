import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    // if anything errors out, it will run this lifecycle hook
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>This isn't good</h1>;
    }
    return this.props.children; // anything between the error boundary
  }
}

export default ErrorBoundary;
