import React, { Component } from 'react';
import Header from '../components/Landingheader';
import Login from '../components/LoginAuth';
import { Register } from '../components/RegAuth';

class authPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: true,
      formType: 'signup',
    };
  }

  toggleSignupForms = () => {
    const { visibility, formType } = this.state;
    if (formType === 'signup') {
      this.setState({
        visibility: !visibility,
        formType: 'login',
      });
    } else if (formType === 'login') {
      this.setState({
        visibility: !visibility,
        formType: 'signup',
      });
    }
  }

  render() {
    const { visibility } = this.state;
    return (
      <React.Fragment>
        <Header navClass='nav_header_light' />
        <div className='wrapper'>
          <div className='wrapper_container'>
            {/* <div className='showalert'>something</div> */}
            <div
              className='signup'
              id='signup'
              onClick={this.toggleSignupForms}
              role='presentation'
              style={{ backgroundColor: visibility ? '#fff' : '#e9eaea' }}
            >
            Sign Up
            </div>
            <div
              className='login'
              id='login'
              onClick={this.toggleSignupForms}
              role='presentation'
              style={{ backgroundColor: visibility ? '#e9eaea' : '#fff' }}
            >
            Sign In
            </div>
            {visibility
              ? (
                <Register />
              )
              : <Login />}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default authPage;
