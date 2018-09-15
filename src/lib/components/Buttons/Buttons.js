import React from 'react';
import { Button, ButtonGroup, Container, Row} from 'reactstrap';
import PropTypes from 'prop-types';

/**
 * A wrapper component for all the buttons.
 */
const Buttons = (props) => {
    return (
        <Container style={{padding:0}}>
            <Row style={{justifyContent:'center'}}>
                <Button onClick={() => props.onClick('7')} outline color="info" style={{width: '10%'}}>7</Button>
                <Button onClick={() => props.onClick('8')} outline color="info" style={{width: '10%'}}>8</Button>
                <Button onClick={() => props.onClick('9')} outline color="info" style={{width: '10%'}}>9</Button>
                <Button onClick={() => props.onClick('x')} outline color="warning" style={{width: '10%'}}>x</Button>
            </Row>
            <Row style={{justifyContent:'center'}}>
                <Button onClick={() => props.onClick('4')} outline color="info" style={{width: '10%'}}>4</Button>
                <Button onClick={() => props.onClick('5')} outline color="info" style={{width: '10%'}}>5</Button>
                <Button onClick={() => props.onClick('6')} outline color="info" style={{width: '10%'}}>6</Button>
                <Button onClick={() => props.onClick('-')} outline color="warning" style={{width: '10%'}}>-</Button>
            </Row>
            <Row style={{justifyContent:'center'}}>
                <Button onClick={() => props.onClick('1')} outline color="info" style={{width: '10%'}}>1</Button>
                <Button onClick={() => props.onClick('2')} outline color="info" style={{width: '10%'}}>2</Button>
                <Button onClick={() => props.onClick('3')} outline color="info" style={{width: '10%'}}>3</Button>
                <Button onClick={() => props.onClick('+')} outline color="warning" style={{width: '10%'}}>+</Button>
            </Row>
            <Row style={{justifyContent:'center'}}>
                <Button onClick={() => props.onClear()} outline color="info" style={{width: '10%'}}>C</Button>
                <Button onClick={() => props.onClick('0')} outline color="info" style={{width: '10%'}}>0</Button>
                <Button onClick={() => props.onEvaluate()} outline color="warning" style={{width: '10%'}}>=</Button>
                <Button onClick={() => props.onClick('/')} outline color="warning" style={{width: '10%'}}>/</Button>

            </Row>
            <Row style={{justifyContent:'center'}}>
                <Button onClick={() => props.onEvaluateSquareRoot()} outline color="warning" style={{width: '10%'}}>√</Button>
                <Button onClick={() => props.onClick('^(-1)')} outline color="warning" style={{width: '15%'}}>1/X</Button>
                <Button onClick={() => props.onDelete()} outline color="warning" style={{width: '15%'}}>Del</Button>
            </Row>
        </Container>

    );
};


export default Buttons;


ButtonGroup.propTypes = {
    ariaLabel: PropTypes.string,
    className: PropTypes.string,
    role: PropTypes.string,
    size: PropTypes.string,
    vertical: PropTypes.bool
};

Button.propTypes = {
    active: PropTypes.bool,
    block: PropTypes.bool,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    onClick: PropTypes.func,
    size: PropTypes.string
}


Container.propTypes = {
    fluid:  PropTypes.bool
}

Buttons.propTypes = {
    /** Updates expression in state to include the clicked buttons value */
    onClick: PropTypes.func,

    /** Updates expression in state to empty string on click of "C" button */
    onClear: PropTypes.func,

    /** Update the expression value in the state to the calculated answer on click of the "=" button. */
    onEvaluate: PropTypes.func,
}