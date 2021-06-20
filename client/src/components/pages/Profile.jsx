import React, { Component } from 'react';
import Logout from './auth/Logout';


class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        This is the user's profile page.
        <Logout />
      </div>
    )
  }
}
export default Profile;
