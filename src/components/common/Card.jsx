import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Card = ({
  id, images, title, location, tags, happeningOn
}) => {
  const month = moment(happeningOn).format('MMM');
  const day = moment(happeningOn).format('D');
  const date = moment(happeningOn).format('dddd, MMMM Do YYYY');
  return (
    <div
      className='card col-md-3 col-lg-3 my-3 shadow-sm p-0 mx-3'
      role='button'
      tabIndex='-1'
      onKeyDown={null}
    >
      <div className='card-body p-0'>
        <div
          className='card-img'
        >
          <img src={images} alt='' className='card-img-top card-img' />
        </div>
        <div className='row col-12 h-auto'>
          <div className='col-2 col-md-2 d-flex flex-column side-card p-0'>
            <span className='mt-5 side-card-value mx-auto'>
              {month}
            </span>
            <span className='mt-2 side-card-value mx-auto'>
              {day}
            </span>
          </div>
          <div className='col-10 col-md-10'>
            <div className='col-12 my-3'>
              <Link to={`/meetup/${id}`} className='stretched-link card-link'>
                {title}
              </Link>
            </div>
            <div className='col-12 my-3'>
              {date}
            </div>
            <div className='col-12 my-3'>
              {location}
            </div>
            <div className='col-12 my-3'>
              <span className=''>
                {tags}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
