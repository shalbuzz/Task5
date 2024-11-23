import  { Component } from 'react';

class Name extends Component {
  render() {
    return (
      <div className="info-container">
        <h3 className="info-label">Name:</h3>
        <p className="info-value">{this.props.name}</p>
      </div>
    );
  }
}

export default Name;
