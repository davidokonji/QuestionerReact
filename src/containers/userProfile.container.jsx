import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavBarConnected } from '../components/common/NavBar';
import Footer from '../components/footer.component';
import UserSidebar from '../components/userSidebar';
import UserDash from '../components/userDash';
import {
  getSingleUser,
  getUserCommentCount,
  getUserQuestionCount,
  getUserUpcoming
} from '../actions';

class UserProfile extends Component {
  componentDidMount() {
    const {
      getUser,
      getComment,
      getQuestion,
      getUpcoming
    } = this.props;
    getUser();
    getComment();
    getQuestion();
    getUpcoming();
  }

  render() {
    const {
      user,
      comment,
      questionCount,
      upcoming,
      loading,
      message = '',
      status = ''
    } = this.props;
    const dashProps = {
      comment,
      count: questionCount,
      upcoming,
      loading,
      message,
      status
    };
    return (
      <div>
        <NavBarConnected />
        <div className='container-fluid row mt-5'>
          <UserSidebar {...user} />
          <UserDash {...dashProps} />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getUser: getSingleUser,
  getComment: getUserCommentCount,
  getQuestion: getUserQuestionCount,
  getUpcoming: getUserUpcoming
};

export const mapStateToProps = state => ({
  user: state.profile.user,
  comment: state.profile.comments,
  questionCount: state.profile.questionCount,
  upcoming: state.profile.upcoming,
  loading: state.profile.loading,
  message: state.profile.message,
  status: state.profile.status
});

const ProfileConnected = connect(mapStateToProps, mapDispatchToProps)(UserProfile);
export {
  UserProfile,
  ProfileConnected
};
