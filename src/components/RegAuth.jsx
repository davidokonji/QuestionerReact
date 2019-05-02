import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../config/axios';
import LoginUser from '../actions/UserAction';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password: '',
      error: '',
      redirect: false,
      message: '',
    };
  }

  onFirstnameChange = (e) => {
    const firstname = e.target.value;
    this.setState({ firstname });
  };

  onLastnameChange = (e) => {
    const lastname = e.target.value;
    this.setState({ lastname });
  };

  onUsernameChange = (e) => {
    const username = e.target.value;
    this.setState({ username });
  };

  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState({ email });
  };

  onPasswordChange = (e) => {
    const password = e.target.value;
    if (password && password.match(/^(?=.*[a-zA-Z])(?=.*[0-9])/)) {
      this.setState({ password, error: '' });
    } else {
      this.setState({
        password,
        error: <div>Password should be alphanumeric</div>,
      });
    }
  };

  handleSignup = async (e) => {
    e.preventDefault();

    const {
      firstname: { value: firstname },
      lastname: { value: lastname },
      username: { value: username },
      email: { value: email },
      password: { value: password },
    } = e.target;

    const { dispatch } = this.props;

    const res = await axios.post('/auth/signup', {
      firstname,
      lastname,
      username,
      email,
      password,
    });
    if (res.status === 201) {
      window.localStorage.setItem('token', res.data.data[0].token);
      this.setState({ message: `Thank you for registering ${res.data.data[0].user.username}` });
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
      this.setState({ error: 'Error in registration' });
    }
  }

  handleInputChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      firstname,
      lastname,
      email,
      username,
      password,
      error,
      message,
    } = this.state;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <React.Fragment>
        {error.length === 0 ? '' : <div>{error}</div>}
        {message.length === 0 ? '' : <div>{message}</div>}
        <form method="post" onSubmit={this.handleSignup}>
          <div className="signup-form" id="signup-form">
            <div className="double">
              <input
                type="text"
                placeholder="First Name"
                name="firstname"
                value={firstname}
                onChange={this.onFirstnameChange}
                className="input form_sm"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                name="lastname"
                value={lastname}
                onChange={this.onLastnameChange}
                className="input form_sm"
                required
              />
            </div>
            <div className="double">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={this.onUsernameChange}
                name="username"
                className="input form_sm"
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={this.onEmailChange}
              className="input form_lg"
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.onPasswordChange}
              className="input form_lg"
              required
            />
            <div className="btn">
              <button className="btn" type="submit">
                    Create account
              </button>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default connect()(Register);
