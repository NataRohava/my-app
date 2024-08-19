import React from 'react';

class TestString extends React.Component {
  render () {
    return <div>
      {
        this.props.name
      }
    </div>
  }
}
export default TestString;