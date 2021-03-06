import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { Link } from "react-router-dom";

class StreamList extends React.Component {
  renderAdmin = (stream) => {
    if (stream.userId === this.props.currentUserID) {
      return (
        <div className="right floated content">
          <Link to={`streams/edit/${stream.id}`} className="ui button primary">
            EDIT
          </Link>
          <Link
            to={`streams/delete/${stream.id}`}
            className="ui button negative"
          >
            DELETE
          </Link>
        </div>
      );
    }
  };

  renderStreams = () => {
    return this.props.state.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  };
  componentDidMount = () => {
    this.props.fetchStreams();
  };

  renderCreate = () => {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <h2>StreamList</h2>
        <div className="ui celled list">{this.renderStreams()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    state: Object.values(state.stream),
    currentUserID: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStatetoProps, { fetchStreams })(StreamList);
