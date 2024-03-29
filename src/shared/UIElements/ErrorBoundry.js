import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service

    console.log("Error has occured!", error, errorInfo);
    // window.location.replace("/");
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1 className="center">{this.state.error}</h1>;
    }

    return this.props.children;
  }
}
