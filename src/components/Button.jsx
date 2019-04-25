import React from 'react';

const Button = (props) => {
  const { text, event, styles } = props;
  return (
    <button type="button" onClick={event} className={styles}>
      {text}
    </button>
  );
};

export default Button;
