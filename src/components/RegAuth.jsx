import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import { RegisterAction, clear } from '../actions/UserAction';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password: '',
      othername: '',
      phonenumber: ''
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

  handleSignup = (e) => {
    e.preventDefault();

    const {
      firstname,
      lastname,
      username,
      email,
      password,
      phonenumber,
      othername
    } = this.state;
    const { userRegister } = this.props;

    const data = {
      firstname,
      lastname,
      username,
      email,
      password,
      phonenumber,
      othername
    };
    userRegister(data);
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  resetForm = () => {
    this.setState({
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password: '',
      othername: '',
      phonenumber: ''
    });
  }

  render() {
    const {
      firstname,
      lastname,
      email,
      username,
      password,
      othername,
      phonenumber
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
          <div className='double'>
            <input
              type='text'
              placeholder='other name'
              value={othername}
              onChange={this.handleInputChange}
              name='othername'
              className='input form_sm'
              required
            />
          </div>
          <div className='double'>
            <input
              type='text'
              placeholder='Phone number'
              value={phonenumber}
              onChange={this.handleInputChange}
              name='phonenumber'
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
    );
  }
}

export const mapStateToProps = state => ({
  user: state.auth,
  redirect: state.auth.redirect
});

const mapDispatchToProps = {
  userRegister: RegisterAction,
  clearError: clear
};

const RegisterConnected = withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));
export {
  Register,
  RegisterConnected
};
