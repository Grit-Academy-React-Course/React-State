import React, { Fragment } from "react";
import StopWatch from "./components/stopWatch/StopWatch";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0,
      interval: null,
    }
  }

  start = () => {
    this.state.interval = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 })
      if (this.state.seconds === 59) {
        this.setState({ seconds: 0, minutes: this.state.minutes + 1 })
      }
      if (this.state.minutes === 59 && this.state.seconds === 59) {
        this.setState({ minutes: 0, hours: this.state.hours + 1 })
      }
    }, 1000)
  }

  pause = () => {
    clearInterval(this.state.interval)
  }

  reset = () => {
    this.setState({
      seconds: 0,
      minutes: 0,
      hours: 0,
    })
    clearInterval(this.state.interval)
  }

  render() {
    return (
      <Fragment>
        <StopWatch
          start={this.start}
          pause={this.pause}
          reset={this.reset}
          stopWatch={this.state}
        />
      </Fragment>
    )
  }
}

export default App;