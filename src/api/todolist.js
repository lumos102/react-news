import http from './index'
import qs from 'qs'

// 查询列表
export function fetchTodoList (params) {
  return http({
    url: '/todo/query',
    method: 'get'
  })
}

// 创建todoItem
export function createTodoItem (params) {
  return http({
    url: '/todo/create',
    method: 'post',
    data: params
    // data: qs.stringify(params)
  })
}