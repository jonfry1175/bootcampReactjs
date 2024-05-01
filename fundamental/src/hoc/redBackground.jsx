import React from "react";

// HOC function component
export const redBackground = (InnerComponent) => {
  const WrapperComponent = (props) => {
    return (
      <div className="bg-red-500">
        <InnerComponent {...props} />
      </div>
    );
  };

  return WrapperComponent;
};
