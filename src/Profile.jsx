import  { Component } from 'react';
import Name from './Name';
import Email from './Email';
import Adresss from './Adresss';
import PersonalInfo from './PersonalInfo';

class Profile extends Component {
  render() {
    return (
      <div className="profile-container">
        <h2 className="profile-title">Profile Information</h2>
        <Name name="Shalbuz Aliverdiyev" />
        <Email email="aliverdiyev05@inbox.r" />
        <Adresss address="Ahamd Camil 162, Baku" />
        <PersonalInfo info="A software engineer with 5 years of experience in web development." />
      </div>
    );
  }
}

export default Profile;
