import { Component } from "react";
import Profile from "./Profile";
import "./profile.css"; 

class App extends Component {
  render() {
    return (
      <div>
        <h1>User Profile Page</h1>
        <Profile />
      </div>
    );
  }
}

export default App;