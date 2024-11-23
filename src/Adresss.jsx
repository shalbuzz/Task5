import  { Component } from 'react';

class Adresss extends Component {
  render() {
    return (
      <div className="info-container">
        <h3 className="info-label">Adresss:</h3>
        <p className="info-value">{this.props.address}</p>
      </div>
    );
  }
}

export default Adresss;
