import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1 style={{color: "red", textAlign: "center", marginTop: "200px"}}>App Crash Ho Gaya! Console Dekho</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;