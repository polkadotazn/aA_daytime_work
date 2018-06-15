import React from 'react';

class Clock extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      time: new Date()
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount () {
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount () {
    // clearInterval(this.intervalId);
  }

  tick () {
    this.setState({time: new Date()});
  }

  prettifyTime (time) {
    if (time.toString().length === 1) {
      return `0${time}`;
    } else {
      return time;
    }
  }

  toHour (hr) {
    if (hr > 12) {
      return hr - 12;
    } else {
      return hr;
    }
  }

  render () {

    let minutes = this.prettifyTime(this.state.time.getMinutes());
    let seconds = this.prettifyTime(this.state.time.getSeconds());
    let hour = this.toHour(this.state.time.getHours());

    return (
      <div>
        <h1>Clock</h1>
        <d>{hour}:{minutes}<sec>{seconds}</sec></d>
      </div>
    );
  }
}

export default Clock;
