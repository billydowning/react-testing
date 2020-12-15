import React from "react";
import { connect } from "react-redux";
import * as actions from "actions";

class CommentBox extends React.Component {
  state = { comment: "" };

  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.saveComment(this.state.comment);

    this.setState({ comment: "" });
  };

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <h4>Add a Comment:</h4>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button className="ui primary right floated button">
              Submit Comment
            </button>
          </div>
        </form>
        <button
          onClick={this.props.fetchComments}
          className="ui red right floated button"
        >
          Fetch Comments
        </button>
      </div>
    );
  }
}

export default connect(null, actions)(CommentBox);
