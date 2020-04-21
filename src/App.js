import React from 'react';
import './App.css';
import Comment from './page/comment/Comment.js'
import Login from './page/login/Login.js'
import Shop from './page/shop/List.js'
import Flex from './page/flex/Flex.js'
import Scroll from './page/scroll/Scroll'
import Position from './page/position/Position'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

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
        <Route path="/" component={Position}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
