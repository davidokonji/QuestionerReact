import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

class DeleteDialog extends React.Component {
  render() {
    const { open, className, toggle } = this.props;
    return (
      <div>
        <Modal isOpen={open} toggle={toggle} className={className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            About to delete
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={toggle}>Delete</Button>
            <Button color='secondary' onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default DeleteDialog;
