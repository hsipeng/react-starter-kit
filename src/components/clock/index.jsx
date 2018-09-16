import React, { Component } from "react";
import moment from "moment";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timeId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return <span>{moment(this.state.date).format("YYYY-MM-DD HH:mm:ss")}</span>;
  }
}
