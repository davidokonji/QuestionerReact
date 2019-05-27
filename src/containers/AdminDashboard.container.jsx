import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Footer from '../components/footer.component';
import { NavBarConnected } from '../components/common/NavBar';
import AdminSideBar from '../components/AdminSidebar';
import { AdminDash } from '../components/AdminTable';
import { getMeetups } from '../actions';

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  componentDidMount() {
    const { allMeetups } = this.props;
    allMeetups();
  }

  toggle = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  render() {
    const { meetups: { data = [] }, isAdmin } = this.props;
    const { open } = this.state;

    if (!isAdmin) {
      return <Redirect to='/' />;
    }

    return (
      <div>
        <NavBarConnected />
        <div className='container'>
          <div className='row mt-5'>
            <AdminSideBar open={open} toggle={this.toggle} />
            <AdminDash data={data} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  meetups: state.meetups,
  admin: state.auth.isAdmin
});

const mapDispatchToProps = {
  allMeetups: getMeetups,
};

const Admin = connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
export {
  Admin,
  AdminDashboard
};
