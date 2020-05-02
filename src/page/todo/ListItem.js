import React from 'react'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile'


 class ListItem extends React.Component {
  render () {
    return (
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Card>
          <Card.Header
            title={this.props.todoList.title}
            thumb={this.props.todoList.thumb}
            extra={<span>{this.props.todoList.extra}</span>}
          />
          <Card.Body>
            <div>{this.props.todoList.body}</div>
          </Card.Body>
          <Card.Footer content="footer content" extra={<div>{this.props.todoList.footer}</div>} />
        </Card>
        <WhiteSpace size="lg" />
      </WingBlank>
    )
  }
 }

 export default ListItem