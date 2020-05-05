import React from 'react'
import { Icon } from 'antd-mobile'
import ListItem from './ListItem'
import '../../css/list.less'
import { Link } from 'react-router-dom'
import { fetchTodoList } from '@/api/todolist'

class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      todoList: [
        {
          id: '1',
          title: 'This is title',
          thumb: 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
          extra: 'this is extra',
          body: 'This is content of `Card`',
          footer: 'extra footer content'
        },
        {
          id: '2',
          title: 'This is title',
          thumb: 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
          extra: 'this is extra',
          body: 'This is content of `Card`',
          footer: 'extra footer content'
        }
      ]
    }
    // this.createItem = this.createItem.bind(this)
  }
  render () {
    return (
    <div>
      {this.state.todoList.map(item =>
        <ListItem key={item.id} todoList={item}></ListItem>
      )}
      <div className="list-create-btn">
        <Link to="/todo-list/create"><Icon type="check-circle" /></Link>
      </div>
    </div>
    )
  }

  // 添加列表项
  // createItem () {
  //   // console.log(this.props)
  //   this.props.history.push('/todo-list/create')
  // }

  // 获取列表
  fetchList () {
    // this.setState()
    fetchTodoList().then(res => {
      console.log(res)
    })

  }

  componentDidMount () {
    this.fetchList()
  }
}

export default List