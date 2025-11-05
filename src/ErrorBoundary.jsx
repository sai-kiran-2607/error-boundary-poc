import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, resetKey: 0 };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  reset = () => {
    this.setState((prev) => ({ hasError: false, resetKey: prev.resetKey + 1 }));
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
          <h1 className="text-3xl font-bold text-red-600">⚠️ Something went wrong</h1>
          <button
            onClick={this.reset}
            className="mt-6 px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            🔄 Retry
          </button>
        </div>
      );
    }
    return <div key={this.state.resetKey}>{this.props.children}</div>;
  }
}
