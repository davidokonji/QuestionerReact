import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/common/NavBar';
import { getOneMeetup } from '../actions';
import SingleMeetupTop from '../components/singleMeetupTop';
import SingleMeetupBottom from '../components/singleMeetupBottom';

export class SingleMeetup extends Component {
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
    await singleMeetup(id);
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
        <Navbar />
        <div className='container mt-5 shadow-sm'>
          <SingleMeetupTop {...meetup} toggle={this.toggle} open={open} />
          <SingleMeetupBottom />
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SingleMeetup);
