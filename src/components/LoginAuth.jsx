import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { LoginAction } from '../actions';

export class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      message: '',
      disable: false,
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
      message,
      disable
    } = this.state;
    const { user = '', redirect = false, history: { push } } = this.props;
    if (redirect) {
      toast(user.message, {
        position: toast.POSITION.TOP_CENTER,
        type: toast.TYPE.SUCCESS,
        onClose: () => push('/dashboard')
      });
    }
    return (
      <React.Fragment>
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
              <button
                className='btn'
                id='login'
                type='submit'
                disabled={disable}
              >
              Sign in
              </button>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.auth,
  redirect: state.auth.redirect
});

const mapDispatchToProps = {
  userLogin: LoginAction
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginComponent));
