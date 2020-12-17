import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
import requireAuth from "components/requireAuth";

class CommentBox extends Component {
  state = { comment: "" };

  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({ comment: "" });
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button className="ui primary button">Submit Comment</button>
          </div>
        </form>
        <button
          className="ui red button fetch-comments"
          onClick={this.props.fetchComments}
        >
          Fetch Comments
        </button>
      </div>
    );
  }
}

export default connect(null, actions)(requireAuth(CommentBox));
