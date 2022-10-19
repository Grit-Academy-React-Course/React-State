import React from "react";

class StopWatch extends React.Component {

    addLeadingZeros = (num, totalLength) => {
        return String(num).padStart(totalLength, '0');
    }
    
    render() {
        return (
            <div className="stopWatch">
                <h1>{this.addLeadingZeros(this.props.stopWatch.hours, 2)}:{this.addLeadingZeros(this.props.stopWatch.minutes, 2)}:{this.addLeadingZeros(this.props.stopWatch.seconds, 2)}</h1>
                <button className="start" onClick={this.props.start}>Start</button>
                <button className="pause" onClick={this.props.pause}>Pause</button>
                <button className="reset" onClick={this.props.reset}>Reset</button>
            </div>
        )
    }
}

export default StopWatch;