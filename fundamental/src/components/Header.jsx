import React, { useState, useEffect } from "react";
import Heading from "./Heading";
import { Button } from "@nextui-org/react";
import { redBackground } from "../hoc/redBackground";
// inline css

const Header = () => {
 const [message, setMessage] = useState("Hello World");


  // const alertUser = () => {
  //   alert("DID MOUNT");
  // };

  // // componentDidMount
  // useEffect(() => {
  //   alertUser();

  //   // componentWillUnmount harus pake return
  //   return () => {
  //     alert("willUnmount");
  //   };
  // }, []);

  // // componentDidUpdate
  // useEffect(() => {
  //   alert("Did Update");
  // }, [message]); // harus spesifik untuk men-cek apa yang sudah di update

  const changeMessage = () => {
    setMessage("State Changed");
  }

  return (
    <header
      style={{
        // backgroundColor: "darkgray",
        padding: "8px",
        textAlign: "center",
        fontFamily: "sans-serif",
      }}
    >
      <Heading/>
      {/* <h1>{message}</h1>
      <Button onClick={changeMessage}>Change Message</Button> */}
    </header>
  );
};

export default redBackground(Header);
