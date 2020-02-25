import React from 'react';

class CommentItem extends React.Component {
  render () {
    return (
      <div className="comment-item">
        <div className="comment-item-name">{ this.props.comment.name }：</div>
        <div className="comment-item-content">{this.props.comment.content}</div>
      </div>
    )
  }
}

export default CommentItem