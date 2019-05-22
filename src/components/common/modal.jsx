import React, { Component } from 'react';
import {
  Modal, ModalBody
} from 'reactstrap';

class ModalComponent extends Component {
  render() {
    const {
      open,
      toggle,
      className,
      children
    } = this.props;
    const externalCloseBtn = (
      <button
        className='close'
        type='button'
        style={{ position: 'absolute', top: '15px', right: '15px' }}
        onClick={toggle}
      >
        &times;
      </button>
    );

    return (
      <div>
        <Modal
          isOpen={open}
          toggle={toggle}
          className={className}
          external={externalCloseBtn}
        >
          <ModalBody>
            {children}
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalComponent;
