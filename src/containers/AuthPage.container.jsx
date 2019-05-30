import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Header from '../components/Landingheader';
import Login from '../components/LoginAuth';
import { RegisterConnected } from '../components/RegAuth';
import Footer from '../components/footer.component';

class authPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: true,
      formType: 'signup',
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    if (params[0] === 'login') {
      this.setState({
        visibility: false
      });
    }
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
          <ToastContainer hideProgressBar autoClose={1000} closeButton={false} />
          <div className='wrapper_container'>
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
                <RegisterConnected />
              )
              : <Login />}
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default authPage;
