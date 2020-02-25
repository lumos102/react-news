import React from 'react';
import './App.css';
import Comment from './page/comment/Comment.js'
import Login from './page/login/Login.js'
import Shop from './page/shop/List.js'
import Scroll from './page/scroll/Scroll'
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
        <Route path="/" component={Shop}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
