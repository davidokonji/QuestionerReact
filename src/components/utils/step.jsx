import React from 'react';

const Step = (props) => {
  const { image, text } = props;
  return (
    <div className="step">
      <span><img src={`../Assets/svg/${image}`} alt="" width="70px" height="90px" /></span>
      <p className="step_text">
        {text}
      </p>
    </div>
  );
};

export default Step;
