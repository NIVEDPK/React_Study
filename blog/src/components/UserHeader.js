import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndUser } from "../actions";

class UserHeader extends React.Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return <div>User Header : {user.name}</div>;
  }
}

const mapPropstoState = (state, ownProps) => {
  return {
    user: state.users.find((user) => user.id === ownProps.userId),
  };
};

export default connect(mapPropstoState, { fetchPostsAndUser })(UserHeader);
