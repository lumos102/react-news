import React from 'react'
import Header from '../../component/Header'
import '../../css/login.css'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      form: {
        accouont: '',
        password: ''
      }
      // accouont: '',
      // password: ''
    }
  }

  handleAccountChange (event) {
    const accountVal = event.target.value
    this.setState({
      form: {
        account: accountVal,
        password: this.state.form.password
      }
    })
  }

  handlePasswordChange (event) {
    const passwordVal = event.target.value
    this.setState({
      form: {
        password: passwordVal,
        account: this.state.form.account
      }}
    )
  }

  handleFormSubmit (event) {
    event.preventDefault()
  }

  render () {
    return (
      <div className="login-page">
        <Header></Header>
        <div className="login-page-content">
          <form onSubmit={(event)=>this.handleFormSubmit(event)}>
            <input value={this.state.form.account || ''}
              className="login-form-item"
              type="text"
              placeholder="网易邮箱账号"
              onChange={(event)=>this.handleAccountChange(event)}
            />
            <input value={this.state.form.password || ''}
              className="login-form-item"
              type="password"
              placeholder="密码"
              onChange={(event)=>this.handlePasswordChange(event)}
            />
            <div className="login-tip">
              请使用网易管家账号，全面保护您的账号！
            </div>
            <input type="submit"
              value="登录"
              className="login-form-item"
            />
          </form>
        </div>
      </div>
    )
  }
}

export default Login