import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeago="Today at 7:00 AM"
        comment="Nice Blog post"
      />
      <CommentDetail
        author="Ria"
        timeago="Today at 2:00 PM"
        comment="Could be better"
      />
      <CommentDetail
        author="king"
        timeago="Today at 3:00 AM"
        comment="Great work"
      />
      <CommentDetail
        author="Mon"
        timeago="Today at 12:00 AM"
        comment="Nice Blog "
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
