import React from 'react';
import '../css/header.css'

class CommentHeader extends React.Component {
  render () {
    return (
      <div className="page-header" onMouseDown={(event) => this.props.event ? this.props.event(event) : null}>网 易</div>
    )
  }
}

export default CommentHeader
