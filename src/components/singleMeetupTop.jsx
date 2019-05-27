import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Button from './Button';
import { calendar, location } from '../Assets';
import Modal from './common/modal';

class SingleMeetupTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  questionHandler = (e) => {
    e.preventDefault();
    const { addQuestion, id } = this.props;
    const { title, body } = this.state;

    const data = {
      meetupId: id,
      title,
      body
    };
    addQuestion(data);
  }

  render() {
    const {
      id,
      topic,
      location: meetupLocation,
      happeningOn,
      images,
      tags,
      toggle,
      open
    } = this.props;
    const { title, body } = this.state;
    return (
      <Fragment>
        <div className='d-flex flex-md-row flex-column justify-content-center col-12'>
          <div className='col-12 col-md p-0 m-0'>
            <img src={images} alt='meetupImage' className='mt-md-3 m-0 p-0 meetup-img col-12' />
          </div>
          <div className='meetup-info ml-4 mt-md-5 mt-2 col'>
            <div className='my-5'>
              <h2 className='meetup-title'>
                {topic}
              </h2>
            </div>
            <div className='meetup-date my-4 row'>
              <p className='col-2 mr-0'>
                <img src={calendar} alt='date' className='h-75 icon' />
              </p>
              <p className='col-9'>
                { happeningOn }
              </p>
            </div>
            <div className='meetup-location my-4 row'>
              <p className='col-2'>
                <img src={location} alt='location' className='h-75 icon' />
              </p>
              <p className='col-9'>
                {meetupLocation}
              </p>
            </div>
            <div className='meetup-rsvp my-4 row'>
              <p className='col-2'>
                  RSVP
              </p>
              <div className='col-1'>
                  Yes
              </div>
            </div>
            <div className='meetup-tags my-4'>
                  Tags
            </div>
            <div className='meetup-question my-4'>
              <Button styles='btn col-md-8 my-4 col-10' text=' Ask Question' event={toggle} />
            </div>

          </div>
        </div>
        <Modal toggle={toggle} open={open} className='my-5 shadow-sm'>
          <form className='my-5' method='post' onSubmit={this.questionHandler}>
            <div className='form-group mx-3 my-3'>
              <small id='subject' className='form-text text-muted'>Question Subject</small>
              <input
                type='text'
                name='title'
                className='form-control p-4 shadow-none '
                aria-describedby='questionTitle'
                placeholder='Add a question title'
                style={{ fontSize: '1rem' }}
                onChange={this.handleOnChange}
                value={title}
              />
            </div>
            <div className='form-group my-3 mx-3 '>
              <textarea
                className='form-control form-control-lg p-2 shadow-none '
                rows='4'
                placeholder='Talk about the question...'
                onChange={this.handleOnChange}
                value={body}
                name='body'
              />
            </div>
            <p>
              <button type='submit' className='btn my-2 py-0 col-12' onClick={toggle}> POST </button>
            </p>
          </form>
        </Modal>
      </Fragment>
    );
  }
}

export default SingleMeetupTop;
