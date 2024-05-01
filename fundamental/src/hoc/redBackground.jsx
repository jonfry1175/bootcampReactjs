import React from "react";

export const redBackground = (InnerComponent) => {
  class WrapperComponent extends React.Component {
    render() {
      return (
        <div className="bg-red-500">
          <InnerComponent {...this.props} />
        </div>
      );
    }
  }
  return WrapperComponent;
};
