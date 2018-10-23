import React, { Component } from 'react';
import Calculator from './containers/Calculator'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
 		
    	<div>
	 		<Button color={this.props.color} onClick={this.toggle}>Open Calculator</Button>
	        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
	          <ModalHeader toggle={this.toggle}>Calculator</ModalHeader>
	          <ModalBody>
				<Calculator />          
			</ModalBody>
	        </Modal>
        </div>

    );
  }
}

export default App;
