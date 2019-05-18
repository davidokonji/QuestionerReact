import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginAction } from '../actions';

export class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      // error: '',
      message: '',
    };
  }

  handleInputChange = (event) => {
    const { target } = event;
    const { value } = target;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  handleSignin = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { userLogin } = this.props;
    const data = {
      email,
      password
    };
    await userLogin(data);
  }

  render() {
    const {
      email,
      password,
      redirect,
      // error,
      message,
    } = this.state;

    // if (redirect) {
    //   return <Redirect to='/dashboard' />;
    // }
    return (
      <React.Fragment>
        {/* error.length === 0 ? '' : <div>{error}</div> */}
        {/* message.length === 0 ? '' : <div>{message}</div> */}
        <form method='post' onSubmit={this.handleSignin}>
          <div className='login-form' id='login-form'>
            <input
              type='text'
              name='email'
              value={email}
              onChange={this.handleInputChange}
              placeholder='Email'
              className='input form_lg'
              required
            />
            <input
              type='password'
              name='password'
              value={password}
              onChange={this.handleInputChange}
              placeholder='Password'
              id='password'
              className='input form_lg'
              required
            />
            <div>
              <button className='btn' id='login' type='submit'>Sign in</button>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  userLogin: LoginAction
};

export default connect(null, mapDispatchToProps)(LoginComponent);
