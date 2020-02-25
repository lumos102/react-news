import React from 'react';
import Header from '../../component/Header'
import CommentItem from './CommentItem'
import '../../css/comment.css'

class CommentList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '习近平举行仪式欢迎法国总统访华',
      comments: [
        {
          name: '浙江网友',
          content: '这条评论的内容是加强沟通',
          id: 1
        },
        {
          name: '杭州网友',
          content: '这条评论的内容是加强沟通',
          id: 2
        }
      ]
    }
  }

  // componentDidMount () {
  //   // 挂载完成
  //   this.timerID = setInterval(
  //     () => this.tick(),
  //     1000
  //   )
  // }

  // componentWillUnmount () {
  //   // 即将卸载
  //   clearInterval(this.timerID)
  // }

  // tick () {
  //   this.setState({  date: new Date()})
  // }

  render () {
    return (
      <div className="comment-page">
        <Header></Header>
        <div className="comment-page-content">
          <div className="comment-page-title">
            { this.state.title }
          </div>
          <div className="comment-page-toolbar">
            查看原文
          </div>
          <div className="comment-page-talk">
            <input type="textarea" className="comment-talk-area" />
          </div>
          <div className="comment-talk-block">
            <span className="comment-talk-title">热门跟帖</span>
          </div>
          {this.state.comments.map((item) =>
            <CommentItem comment={item} key={item.id}></CommentItem>
          )}
        </div>
      </div>
    )
  }
}

export default CommentList