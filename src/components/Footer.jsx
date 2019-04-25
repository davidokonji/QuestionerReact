import React from 'react';
import '../style/footer.scss';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <React.Fragment>
      <footer>
      &copy;
        {date}

      </footer>
    </React.Fragment>
  );
};

export default Footer;
