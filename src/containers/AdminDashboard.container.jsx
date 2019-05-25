import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from '../components/footer.component';
import { NavBarConnected } from '../components/common/NavBar';
import AdminSideBar from '../components/AdminSidebar';
import AdminTable from '../components/AdminTable';
import { getMeetups } from '../actions';
import Dialog from '../components/common/dialog';

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  componentDidMount() {
    const { allMeetups } = this.props;
    const token = localStorage.getItem('token');
    allMeetups(token);
  }

  toggle = () => {
    //   this.props.delete(props.id).then(() => {

    //   })
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  render() {
    const { meetups: { data = [] } } = this.props;
    const { open } = this.state;
    return (
      <div>
        <NavBarConnected />
        <div className='container'>
          <div className='row mt-5'>
            <AdminSideBar />
            <AdminTable data={data} toggle={this.toggle} />
          </div>
        </div>
        <Dialog open={open} toggle={this.toggle} className='mt-5' />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  meetups: state.meetups
});

const mapDispatchToProps = {
  allMeetups: getMeetups,
};

const Admin = connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
export {
  Admin,
  AdminDashboard
};
