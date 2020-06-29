import React from "react";

const ErrorMessage = (props) => {
  return (
    <div className="ui negative message">
      <i className="close icon"></i>
      <h1>
        <div className="header">{props.messageHeader}</div>
      </h1>
      <p>Error Description : {props.message}</p>
    </div>
  );
};

ErrorMessage.defaultProps = {
  message: "Unknown error occured, contact administrator",
  messageHeader: "Some Error Occured",
};

export default ErrorMessage;
