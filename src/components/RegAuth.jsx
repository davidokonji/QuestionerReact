import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RegisterAction } from '../actions/UserAction';

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password: '',
      // error: '',
      // redirect: false,
      message: '',
    };
  }

  onPasswordChange = (e) => {
    const password = e.target.value;
    if (password && password.match(/^(?=.*[a-zA-Z])(?=.*[0-9])/)) {
      this.setState({ password });
    } else {
      this.setState({
        password,
      });
    }
  };

  handleSignup = async (e) => {
    e.preventDefault();

    const {
      firstname,
      lastname,
      username,
      email,
      password,
    } = this.state;
    const { userRegister } = this.props;

    const data = {
      firstname,
      lastname,
      username,
      email,
      password,
    };
    await userRegister(data);
  }

  handleInputChange = (event) => {
    const { target } = event;
    const { value } = target;
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
      // error,
      message,
    } = this.state;
    // const { redirect } = this.state;

    // if (redirect) {
    //   return <Redirect to='/dashboard' />;
    // }
    return (
      <React.Fragment>
        {/* error.length === 0 ? '' : <div>{error}</div> */}
        {/* message.length === 0 ? '' : <div>{message}</div> */}
        <form method='post' onSubmit={this.handleSignup}>
          <div className='signup-form' id='signup-form'>
            <div className='double'>
              <input
                type='text'
                placeholder='First Name'
                name='firstname'
                value={firstname}
                onChange={this.handleInputChange}
                className='input form_sm'
                required
              />
              <input
                type='text'
                placeholder='Last Name'
                name='lastname'
                value={lastname}
                onChange={this.handleInputChange}
                className='input form_sm'
                required
              />
            </div>
            <div className='double'>
              <input
                type='text'
                placeholder='Username'
                value={username}
                onChange={this.handleInputChange}
                name='username'
                className='input form_sm'
                required
              />
            </div>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={this.handleInputChange}
              className='input form_lg'
              required
            />
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={this.onPasswordChange}
              className='input form_lg'
              required
            />
            <div>
              <button className='btn' type='submit'>
                    Create account
              </button>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  userRegister: RegisterAction
};

export default connect(null, mapDispatchToProps)(Register);
