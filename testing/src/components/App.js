import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/post" component={CommentBox} />
          <Route exact path="/" component={CommentList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
