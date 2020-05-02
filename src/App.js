import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css';
import 'antd-mobile/dist/antd-mobile.css'

import Comment from './page/comment/Comment.js'
import Login from './page/login/Login.js'
import Shop from './page/shop/List.js'
import Flex from './page/flex/Flex.js'
import Scroll from './page/scroll/Scroll'
import Position from './page/position/Position'
import TodoList from './page/todo/List'
import ItemCreate from './page/todo/ItemCreate'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/scroll" component={Scroll}></Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/comment" component={Comment}></Route>
        <Route path="/shop" component={Shop} ></Route>
        <Route path="/flex" component={Flex} ></Route>
        <Route path="/position" component={Position} ></Route>

        <Route path="/todo-list/create" component={ItemCreate}></Route>
        <Route path="/todo-list" component={TodoList} ></Route>


        <Route path="/" component={TodoList}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
