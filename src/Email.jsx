import  { Component } from 'react';

class Email extends Component {
  render() {
    return (
      <div className="info-container">
        <h3 className="info-label">Email:</h3>
        <p className="info-value">{this.props.email}</p>
      </div>
    );
  }
}

export default Email;
