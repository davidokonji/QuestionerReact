import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from '../config/axios';
import LoginUser from '../actions/UserAction';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false,
      error: '',
      message: '',
    };
  }

  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState({ email });
  }

  onPasswordChange = (e) => {
    const password = e.target.value;
    this.setState({ password });
  }

  handleSignin = async (e) => {
    e.preventDefault();
    const { email: { value: email }, password: { value: password } } = e.target;
    const { dispatch } = this.props;

    const res = await axios.post('/auth/login', {
      email,
      password,
    });
    if (res.status === 200) {
      window.localStorage.setItem('token', res.data.data[0].token);
      this.setState({ message: `Welcome back ${res.data.data[0].user.username}` });
      dispatch(LoginUser({
        id: res.data.data[0].user.id,
        firstname: res.data.data[0].user.firstname,
        lastname: res.data.data[0].user.lastname,
        username: res.data.data[0].user.username,
        email: res.data.data[0].user.email,
      }));
      setTimeout(() => {
        this.setState({ redirect: true });
      }, 2000);
    } else {
      this.setState({ error: 'Invalid Credential' });
    }
  }


  render() {
    const {
      email,
      password,
      redirect,
      error,
      message,
    } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <React.Fragment>
        {error.length === 0 ? '' : <div>{error}</div>}
        {message.length === 0 ? '' : <div>{message}</div>}
        <form method="post" onSubmit={this.handleSignin}>
          <div className="login-form" id="login-form">
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.onEmailChange}
              placeholder="Email or Username"
              className="input form_lg"
              required
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.onPasswordChange}
              placeholder="Password"
              id="password"
              className="input form_lg"
              required
            />
            <div className="btn">
              <button className="btn" id="login" type="submit">Sign in</button>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default connect()(Login);
