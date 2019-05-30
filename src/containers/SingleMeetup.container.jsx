import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { NavBarConnected } from '../components/common/NavBar';
import { getOneMeetup, createQuestion, meetupRsvp } from '../actions';
import SingleMeetupTop from '../components/singleMeetupTop';
import SingleMeetupBottom from '../components/singleMeetupBottom';
import Footer from '../components/footer.component';

class SingleMeetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
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
      meetup,
      addQuestion,
      rsvp,
      message = '',
      successful = false
    } = this.props;
    if (successful) {
      toast(message, {
        position: toast.POSITION.TOP_CENTER,
        type: toast.TYPE.INFO,
      });
    } else if (successful === false && message.length !== 0) {
      toast(message, {
        position: toast.POSITION.TOP_CENTER,
        type: toast.TYPE.INFO,
        className: 'rotateY animated'
      });
    }
    const { open } = this.state;
    return (
      <div>
        <NavBarConnected />
        <div className='container mt-5 shadow-sm'>
          <ToastContainer hideProgressBar autoClose={1000} closeButton={false} />
          <SingleMeetupTop
            {...meetup}
            toggle={this.toggle}
            open={open}
            addQuestion={addQuestion}
            rsvp={rsvp}
          />
          <SingleMeetupBottom />
        </div>
        <Footer />
      </div>
    );
  }
}
export const mapStateToProps = state => ({
  meetup: state.meetup,
  message: state.meetup.message,
  successful: state.meetup.successful
});

const mapDispatchToProps = {
  singleMeetup: getOneMeetup,
  addQuestion: createQuestion,
  rsvp: meetupRsvp
};

const OneMeetup = connect(mapStateToProps, mapDispatchToProps)(SingleMeetup);
export {
  OneMeetup,
  SingleMeetup
};
