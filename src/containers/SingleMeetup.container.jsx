import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavBarConnected } from '../components/common/NavBar';
import { getOneMeetup, createQuestion } from '../actions';
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
      addQuestion
    } = this.props;
    const { open } = this.state;
    return (
      <div>
        <NavBarConnected />
        <div className='container mt-5 shadow-sm'>
          <SingleMeetupTop
            {...meetup}
            toggle={this.toggle}
            open={open}
            addQuestion={addQuestion}
          />
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
  singleMeetup: getOneMeetup,
  addQuestion: createQuestion
};

const OneMeetup = connect(mapStateToProps, mapDispatchToProps)(SingleMeetup);
export {
  OneMeetup,
  SingleMeetup
};
