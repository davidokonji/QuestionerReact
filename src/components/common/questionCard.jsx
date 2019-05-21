import React from 'react';
import { upArrow, downArrow } from '../../Assets';

const Questions = () => (
  <div className='py-3'>
    <div className='card col-12 col-md-10 shadow-sm'>
      <div className='card-body p-0 row'>
        <div className='col-1 col-md-1 d-flex flex-column justify-content-center my-2'>
          <p className='col'>
            <img src={upArrow} alt='uparrow' className='h-25 arrow-icon' />
          </p>
          <p className='col mx-3'>
                0
          </p>
          <p className='col'>
            <img src={downArrow} alt='downarrow' className='h-25 arrow-icon' />
          </p>
        </div>
        <div className='col-9 col-md-9 row'>
         question
        </div>
      </div>
    </div>
  </div>
);

export default Questions;
