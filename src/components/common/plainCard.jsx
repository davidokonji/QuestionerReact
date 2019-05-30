import React from 'react';

const PlainCard = ({
  id,
  topic,
  location,
  date,
  history
}) => (
  <div
    className='col-12 col-md-4 mt-3 plaincard'
    onClick={() => history.push(`/meetup/${id}`)}
    role='button'
    tabIndex='-1'
    onKeyDown={null}
  >
    <div className='card shadow-sm'>
      <div className='card-body col-12'>
        <h3 className='mt-0'>{topic}</h3>
        <p className='mt-0'>{location}</p>
        <p className='mt-0'>{date}</p>
      </div>
    </div>
  </div>
);

export default PlainCard;
