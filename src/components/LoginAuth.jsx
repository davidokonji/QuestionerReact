import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { LoginAction, clear } from '../actions';

export class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      disable: false,
    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSignin = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { userLogin } = this.props;
    const data = {
      email,
      password
    };
    userLogin(data);
  }

  resetForm = () => {
    this.setState({
      email: '',
      password: ''
    });
  }


  render() {
    const {
      email,
      password,
      disable
    } = this.state;
    const {
      user: {
        message = ''
      },
      redirect = false,
      history: { push },
      clearError
    } = this.props;
    if (redirect) {
      toast(message, {
        position: toast.POSITION.TOP_CENTER,
        type: toast.TYPE.SUCCESS,
        onClose: () => push('/dashboard')
      });
    } else if (redirect === false && message.length !== 0) {
      toast(message, {
        position: toast.POSITION.TOP_CENTER,
        type: toast.TYPE.WARNING,
        className: 'rotateY animated'
      });
      this.resetForm();
      clearError();
    }
    return (
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
    );
  }
}

export const mapStateToProps = state => ({
  user: state.auth,
  redirect: state.auth.redirect
});

const mapDispatchToProps = {
  userLogin: LoginAction,
  clearError: clear
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginComponent));
