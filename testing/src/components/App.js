import React from "react";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

const App = () => {
  return (
    <div className="ui container">
      <CommentBox />
      <CommentList />
    </div>
  );
};

export default App;
