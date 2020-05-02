import http from './index'

// 查询列表
export function fetchTodoList (params) {
  return http({
    url: '/todo/query',
    method: 'get',
    params
    // mode:"no-cors" //跨域
  })
}

// 创建todoItem
export function createTodoItem (params) {
  return http({
    url: '/todo/create',
    method: 'post',
    params
    // mode:"no-cors" //跨域
  })
}