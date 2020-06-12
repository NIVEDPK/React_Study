import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "509622520621-tq2jemv151igeh9q77ij83g85trkdaru.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.api = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.api.isSignedIn.get());
          this.api.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isLoggedIn) => {
    if (isLoggedIn) {
      this.props.signIn(this.api.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.api.signIn();
  };

  onSignOutClick = () => {
    this.api.signOut();
  };

  renderAuthButton() {
    if (this.props.isLoggedIn === null) {
      return null;
    } else if (this.props.isLoggedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Signout
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign in with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStatetoProps = (state) => {
  return {
    isLoggedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStatetoProps, { signIn, signOut })(GoogleAuth);
