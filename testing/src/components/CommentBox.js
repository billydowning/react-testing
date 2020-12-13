import React from "react";

class CommentBox extends React.Component {
  state = { comment: "" };

  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Call and action creator here
    // and save the comment

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
      </div>
    );
  }
}

export default CommentBox;
