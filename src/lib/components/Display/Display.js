import React from 'react';
import { Container, Input, Row } from 'reactstrap';
import PropTypes from 'prop-types';

/**
 * The display containing the input box present above the buttons.
 */

class Display extends React.Component {

    state = { expression: "" };

    componentWillReceiveProps({expression}) {

        this.setState({expression: expression})

    }
    handleKeyDown=()=>{
        document.onkeydown = function (e) 
        {
        return false;
        }
    }


    render(){

        return (
            <Container>
                <Row style={{justifyContent:'center'}}>
                    <Input value={this.state.expression} onClick={this.handleKeyDown} style={{width:'50%'}} onChange={this.props.onChange}/>
                </Row>
            </Container>

        );

    }
};


export default Display;

Display.propTypes = {
    /** onChange updates expression value in the parents state to current value in the input */
    onChange: PropTypes.func

}

Container.propTypes = {
    fluid:  PropTypes.bool
}