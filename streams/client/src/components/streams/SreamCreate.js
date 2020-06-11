import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderError = ({ error, touched }) => {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    } else return null;
  };

  renderInput = ({ input, label, meta }) => {
    const error = `field ${meta.error && meta.touched ? "error" : ""}`;

    return (
      <div className={error}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit(formProps) {
    console.log(formProps);
  }

  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="title"
          component={this.renderInput}
          label="Enter the Name"
        />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter the Description"
        />
        <button className="ui button primary"> submit</button>
      </form>
    );
  }
}

const validate = (formvalues) => {
  let error = {};
  if (!formvalues.title) {
    error.title = "You must enter a title";
  }
  if (!formvalues.description) {
    error.description = "You must enter a description";
  }
  return error;
};

export default reduxForm({
  form: "streamCreate",
  validate,
})(StreamCreate);
