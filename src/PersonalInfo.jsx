import  { Component } from 'react';

class PersonalInfo extends Component {
  render() {
    return (
      <div className="info-container">
        <h3 className="info-label">Personal Info:</h3>
        <p className="info-value">{this.props.info}</p>
      </div>
    );
  }
}

export default PersonalInfo;
