import React, { Component } from "react";
import Task8 from "./task8";

class StatusMessage extends Component {
  render() {
    const { isSuccess } = this.props;

    return <div>{isSuccess ? <h1>Success!</h1> : <h1>Error!</h1>}</div>;
  }
}

export default StatusMessage;
