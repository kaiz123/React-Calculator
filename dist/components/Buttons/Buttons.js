import React from 'react';
import { Button, ButtonGroup, Container, Row } from 'reactstrap';
import PropTypes from 'prop-types';

/**
 * A wrapper component for all the buttons.
 */
var Buttons = function Buttons(props) {
    return React.createElement(
        Container,
        { style: { padding: 0 } },
        React.createElement(
            Row,
            { style: { justifyContent: 'center' } },
            React.createElement(
                Button,
                { onClick: function onClick() {
                        return props.onClick('7');
                    }, outline: true, color: 'info', style: { width: '10%' } },
                '7'
            ),
            React.createElement(
                Button,
                { onClick: function onClick() {
                        return props.onClick('8');
                    }, outline: true, color: 'info', style: { width: '10%' } },
                '8'
            ),
            React.createElement(
                Button,
                { onClick: function onClick() {
                        return props.onClick('9');
                    }, outline: true, color: 'info', style: { width: '10%' } },
                '9'
            ),
            React.createElement(
                Button,
                { onClick: function onClick() {
                        return props.onClick('x');
                    }, outline: true, color: 'warning', style: { width: '10%' } },
                'x'
            )
        ),
        React.createElement(
            Row,
            { style: { justifyContent: 'center' } },
            React.createElement(
                Button,
                { onClick: function onClick() {
                        return props.onClick('4');
                    }, outline: true, color: 'info', style: { width: '10%' } },
                '4'
            ),
            React.createElement(
                Button,
                { onClick: function onClick() {
                        return props.onClick('5');
                    }, outline: true, color: 'info', style: { width: '10%' } },
                '5'
            ),
            React.createElement(
                Button,
                { onClick: function onClick() {
                        return props.onClick('6');
                    }, outline: true, color: 'info', style: { width: '10%' } },
                '6'
            ),
            React.createElement(
                Button,
                { onClick: function onClick() {
                        return props.onClick('-');
                    }, outline: true, color: 'warning', style: { width: '10%' } },
                '-'
            )
        ),
        React.createElement(
            Row,
            { style: { justifyContent: 'center' } },
            React.createElement(
                Button,
                { onClick: function onClick() {
                        return props.onClick('1');
                    }, outline: true, color: 'info', style: { width: '10%' } },
                '1'
            ),
            React.createElement(
                Button,
                { onClick: function onClick() {
                        return props.onClick('2');
                    }, outline: true, color: 'info', style: { width: '10%' } },
                '2'
            ),
            React.createElement(
                Button,
                { onClick: function onClick() {
                        return props.onClick('3');
                    }, outline: true, color: 'info', style: { width: '10%' } },
                '3'
            ),
            React.createElement(
                Button,
                { onClick: function onClick() {
                        return props.onClick('+');
                    }, outline: true, color: 'warning', style: { width: '10%' } },
                '+'
            )
        ),
        React.createElement(
            Row,
            { style: { justifyContent: 'center' } },
            React.createElement(
                Button,
                { onClick: function onClick() {
                        return props.onClear();
                    }, outline: true, color: 'info', style: { width: '10%' } },
                'C'
            ),
            React.createElement(
                Button,
                { onClick: function onClick() {
                        return props.onClick('0');
                    }, outline: true, color: 'info', style: { width: '10%' } },
                '0'
            ),
            React.createElement(
                Button,
                { onClick: function onClick() {
                        return props.onEvaluate();
                    }, outline: true, color: 'warning', style: { width: '10%' } },
                '='
            ),
            React.createElement(
                Button,
                { onClick: function onClick() {
                        return props.onClick('/');
                    }, outline: true, color: 'warning', style: { width: '10%' } },
                '/'
            )
        ),
        React.createElement(
            Row,
            { style: { justifyContent: 'center' } },
            React.createElement(
                Button,
                { onClick: function onClick() {
                        return props.onEvaluateSquareRoot();
                    }, outline: true, color: 'warning', style: { width: '10%' } },
                '\u221A'
            ),
            React.createElement(
                Button,
                { onClick: function onClick() {
                        return props.onClick('^(-1)');
                    }, outline: true, color: 'warning', style: { width: '15%' } },
                '1/X'
            ),
            React.createElement(
                Button,
                { onClick: function onClick() {
                        return props.onDelete();
                    }, outline: true, color: 'warning', style: { width: '15%' } },
                'Del'
            )
        )
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
};

Container.propTypes = {
    fluid: PropTypes.bool
};

Buttons.propTypes = {
    /** Updates expression in state to include the clicked buttons value */
    onClick: PropTypes.func,

    /** Updates expression in state to empty string on click of "C" button */
    onClear: PropTypes.func,

    /** Update the expression value in the state to the calculated answer on click of the "=" button. */
    onEvaluate: PropTypes.func
};