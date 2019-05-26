import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { WithContext as ReactTags } from 'react-tag-input';
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'reactstrap';
import Button from './Button';
import { addMeetup } from '../actions';
import Modal from './common/modal';

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];
export class AdminSidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tagList: [
      ],
      suggestions: [
        { id: 'technology', text: 'technology' },
        { id: 'social', text: 'social' },
      ],
      topic: '',
      location: '',
      happeningOn: '',
      images: '',
      imagePreview: ''
    };
  }

  handleOnChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  imageHandler = ({ target: { files } }) => {
    this.setState({
      images: files[0],
      imagePreview: URL.createObjectURL(files[0]),
    });
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const { createMeetup } = this.props;
    const {
      topic,
      location,
      happeningOn,
      tagList,
      images
    } = this.state;
    const filteredTags = tagList.map(tag => tag.text);
    const tags = filteredTags.join();
    const data = {
      topic,
      location,
      happeningOn,
      tags,
      images
    };

    createMeetup(data);
  }

  handleAddition = (tag) => {
    this.setState(state => ({ tagList: [...state.tagList, tag] }));
  }

  handleDrag = (tag, currPos, newPos) => {
    const { tagList } = this.state;
    const setTags = new Set([...tagList]);
    const newTags = setTags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    this.setState({ tagList: newTags });
  }

  handleDelete = (i) => {
    const { tagList } = this.state;
    this.setState({
      tagList: tagList.filter((tag, index) => index !== i),
    });
  }

  render() {
    const { toggle, open } = this.props;
    const {
      tagList,
      suggestions,
      imagePreview,
      topic
    } = this.state;
    const placeholder = 'Add meetup Tags';
    return (
      <Fragment>
        <div className='col-12 col-md-3'>
          <div className='p-5 shadow-sm'>
            <Button styles='button p-3' text='Create Meetup' event={toggle} />
          </div>
        </div>
        <Modal toggle={toggle} open={open} className='mt-5'>
          <Form method='post' onSubmit={this.handleSubmit} encType='multipart/form-data'>
            {
              imagePreview && (
                <div>
                  <img src={imagePreview} alt={topic} style={{ height: '30rem' }} />
                </div>
              )
            }
            <FormGroup>
              <Input
                type='file'
                name='image'
                max={1}
                accept='image/*'
                onChange={this.imageHandler}
              />
              <FormText color='muted'>
              Add meetup images
              </FormText>
            </FormGroup>
            <FormGroup>
              <Input
                type='text'
                name='topic'
                placeholder='Add Topic'
                onChange={this.handleOnChange}
                className='px-3'
              />
            </FormGroup>
            <FormGroup>
              <Input
                type='text'
                name='location'
                placeholder='Add Location'
                onChange={this.handleOnChange}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type='date'
                name='happeningOn'
                placeholder='Add Date'
                onChange={this.handleOnChange}
              />
            </FormGroup>
            <FormGroup>
              <div id='app'>
                <ReactTags
                  tags={tagList}
                  suggestions={suggestions}
                  handleDelete={this.handleDelete}
                  handleAddition={this.handleAddition}
                  handleDrag={this.handleDrag}
                  delimiters={delimiters}
                  placeholder={placeholder}
                  inline={false}
                />
              </div>
            </FormGroup>
            <button type='submit' className='btn' onClick={toggle}>Create Meetup</button>
          </Form>
        </Modal>
      </Fragment>
    );
  }
}
const mapDispatchToProps = {
  createMeetup: addMeetup
};


export default connect(null, mapDispatchToProps)(AdminSidebar);
