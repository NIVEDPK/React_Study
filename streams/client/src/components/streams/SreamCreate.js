import React from "react";
import { createStreams } from "../../actions";
import { connect } from "react-redux";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = (formProps) => {
    this.props.createStreams(formProps);
  };

  render() {
    return (
      <div>
        <h2>Create Stream</h2>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStreams })(StreamCreate);
