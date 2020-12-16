import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "actions";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

class App extends React.Component {
  renderButton() {
    if (this.props.auth) {
      return (
        <button
          onClick={() => this.props.changeAuth(false)}
          className="ui primary button"
        >
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          onClick={() => this.props.changeAuth(true)}
          className="ui red button"
        >
          Sign In
        </button>
      );
    }
  }

  renderHeader() {
    return (
      <div className="ui horizontal list">
        <div className="item">
          <div className="content">
            <Link to="/">Home</Link>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <Link to="/post">Post A Comment</Link>
          </div>
        </div>
        <div className="item">
          <div className="content">{this.renderButton()}</div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="ui container">
        <BrowserRouter>
          {this.renderHeader()}
          <div className="ui divider"></div>
          <Switch>
            <Route exact path="/post" component={CommentBox} />
            <Route exact path="/" component={CommentList} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps, actions)(App);
