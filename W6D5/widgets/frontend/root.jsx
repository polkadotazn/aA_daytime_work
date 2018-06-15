import Clock from './clock';
import React from 'react';

class Root extends React.Component {

  render () {
    return (
      <div>
        <div id="time">
          <Clock />
        </div>
      </div>
    );
  }
}

export default Root;
