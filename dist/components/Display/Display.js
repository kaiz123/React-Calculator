var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import { Container, Input, Row } from 'reactstrap';
import PropTypes from 'prop-types';

/**
 * The display containing the input box present above the buttons.
 */

var Display = function (_React$Component) {
    _inherits(Display, _React$Component);

    function Display() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Display);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Display.__proto__ || Object.getPrototypeOf(Display)).call.apply(_ref, [this].concat(args))), _this), _this.state = { expression: "" }, _this.handleKeyDown = function () {
            document.onkeydown = function (e) {
                return false;
            };
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Display, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(_ref2) {
            var expression = _ref2.expression;


            this.setState({ expression: expression });
        }
    }, {
        key: 'render',
        value: function render() {

            return React.createElement(
                Container,
                null,
                React.createElement(
                    Row,
                    { style: { justifyContent: 'center' } },
                    React.createElement(Input, { value: this.state.expression, onClick: this.handleKeyDown, style: { width: '50%' }, onChange: this.props.onChange })
                )
            );
        }
    }]);

    return Display;
}(React.Component);

;

export default Display;

Display.propTypes = {
    /** onChange updates expression value in the parents state to current value in the input */
    onChange: PropTypes.func

};

Container.propTypes = {
    fluid: PropTypes.bool
};