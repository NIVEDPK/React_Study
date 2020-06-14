import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formvalue) => {
    this.props.editStream(this.props.stream.id, formvalue);
  };

  renderStreams = () => {
    if (!this.props.stream) {
      return <div>Loadng.....</div>;
    }
    return (
      <div>
        <h2>Edit a Stream</h2>
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  };

  render() {
    return <div>{this.renderStreams()}</div>;
  }
}

const mapStatetoprops = (state, ownProps) => {
  return {
    stream: state.stream[ownProps.match.params.id],
  };
};

export default connect(mapStatetoprops, { fetchStream, editStream })(
  StreamEdit
);
