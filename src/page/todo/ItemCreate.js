import React, { Component } from 'react'
import { List, TextareaItem } from 'antd-mobile';
import { createTodoItem } from '@/api/todolist'

export default class ItemCreate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      form: {
        title: ''
      }
    }
  }
  render() {
    return (
      <div>
        <List renderHeader={() => 'Customize to focus'}>
          <TextareaItem
            title="标题"
            placeholder="click the button below to focus"
            data-seed="logId"
            autoHeight
            value={this.state.form.title}
            ref={el => this.customFocusInst = el}
          />
          {/* 聚焦 */}
          {/* <List.Item>
            <div
              style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
              onClick={() => this.customFocusInst.focus()}
            >
              click to focus
            </div>
          </List.Item> */}
          <List.Item>
            <div
              style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
              onClick={() => this.submit()}
            >
              click to focus
            </div>
          </List.Item>
        </List>
      </div>
    )
  }

  // 提交
  submit () {
    // 提交请求
    createTodoItem(this.form).then(res => {
      console.log(res)
    })
    console.log(this.state.form)
    // 回调：返回上一页
  }
}
