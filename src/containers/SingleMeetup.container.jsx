import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavBarConnected } from '../components/common/NavBar';
import { getOneMeetup } from '../actions';
import SingleMeetupTop from '../components/singleMeetupTop';
import SingleMeetupBottom from '../components/singleMeetupBottom';
import Footer from '../components/footer.component';

class SingleMeetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: {
          id
        }
      },
      singleMeetup,
    } = this.props;
    const token = localStorage.getItem('token');
    await singleMeetup(id, token);
  }

  toggle = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  render() {
    const {
      meetup
    } = this.props;
    const { open } = this.state;
    return (
      <div>
        <NavBarConnected />
        <div className='container mt-5 shadow-sm'>
          <SingleMeetupTop {...meetup} toggle={this.toggle} open={open} />
          <SingleMeetupBottom />
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  meetup: state.meetup
});

const mapDispatchToProps = {
  singleMeetup: getOneMeetup
};

const OneMeetup = connect(mapStateToProps, mapDispatchToProps)(SingleMeetup);
export {
  OneMeetup,
  SingleMeetup
};
