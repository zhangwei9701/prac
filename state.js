import React from "react";
import { render } from "react-dom";

class Parent extends React.Component {
  state = {
    name: "Mark",
    time: "0"
  };
  componentDidMount() {
    setTimeout(
      this.setState(() => ({ time: "1" }), alert("test")),
      10
    );
    // this.setState(() => ({name: "MarkChanged"}));
    //notes here: steState() recive a updater function, which is to update state, callback func as optional
    this.setState()
    setTimeout(
      this.setState(() => ({ name: "Timer2" })),
      2000
    );
  }
  render() {
    return (
      <div>
        <ul>this.state.name = {this.state.name} </ul>
        <ul>this.state.time = {this.state.time} </ul>
      </div>
    );
  }
}

render(<Parent />, document.getElementById("root"));