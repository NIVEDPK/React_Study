import React from "react";

class GoogleAuth extends React.Component {
  state = { isLoggedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: "Provide auth2 client ID ",
          scope: "email",
        })
        .then(() => {
          this.api = window.gapi.auth2.getAuthInstance();
          this.setState({ isLoggedIn: this.api.isSignedIn.get() });
          this.api.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isLoggedIn: this.api.isSignedIn.get() });
  };

  onSignIn = () => {
    this.api.signIn();
  };

  onSignOut = () => {
    this.api.signOut();
  };

  renderAuthButton() {
    if (this.state.isLoggedIn === null) {
      return null;
    } else if (this.state.isLoggedIn) {
      return (
        <button onClick={this.onSignOut} className="ui red google button">
          <i className="google icon" />
          Signout
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignIn} className="ui red google button">
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

export default GoogleAuth;
