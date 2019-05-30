import React from 'react';
import ContentLoader from 'react-content-loader';

const UpcomingLoader = () => (
  <div className='col-4 col-md-4'>
    <ContentLoader
      height={160}
      width={350}
      speed={2}
      primaryColor='#f3f3f3'
      secondaryColor='#ecebeb'
    >
      <rect x='184' y='123' rx='0' ry='0' width='0' height='0' />
      <rect x='247' y='60' rx='0' ry='0' width='0' height='0' />
      <rect x='162' y='80' rx='0' ry='0' width='0' height='0' />
      <rect x='28' y='15' rx='0' ry='0' width='249' height='18' />
      <rect x='221' y='60' rx='0' ry='0' width='0' height='0' />
      <rect x='28' y='50' rx='0' ry='0' width='249' height='12' />
      <rect x='27' y='97' rx='0' ry='0' width='249' height='14' />
      <rect x='28' y='75' rx='0' ry='0' width='187' height='11' />
    </ContentLoader>
  </div>
);

export default UpcomingLoader;
