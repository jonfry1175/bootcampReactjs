import React from "react";
import Heading from "./Heading";
// inline css

const Header = () => {
  return (
      <header
        style={{
          backgroundColor: "darkgray",
          padding: "8px",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        <Heading>My Custom Heading from props children</Heading>
      </header>
  );
};

export default Header;
