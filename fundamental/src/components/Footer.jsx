import React from "react";
import "../styles/Footer.css";
import { Button } from "@nextui-org/react";

class Footer extends React.Component {
  state = {
    message: "Hello world",
  };

  // alertUser = () => {
  //     alert("DID MOUNT")
  // }

  // componentDidMount = () => {
  //     this.alertUser()
  // }

  // componentDidUpdate = () => {
  //     alert("Did Update")
  //     alert(this.state.message)
  // }

  changeMessage = () => {
    this.setState({ message: "State Changed" });
  };

  // componentWillUnmount = muncul sebelum component dihapus
  // componentWillUnmount = () => {
  //     alert("Goodbye world")
  // }

  // render = menampilkan/load
  render() {
    return (
      <footer>
        <h1 data-testid="props-message" className="footer-text">
          {this.props.message}
        </h1>
        <p data-testid="state-message">{this.state.message}</p>
        <Button data-testid="change-message-btn" onClick={this.changeMessage}>Change Message</Button>
      </footer>
    );
  }
}

export default Footer;
