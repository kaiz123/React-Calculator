var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import Buttons from '../../components/Buttons';
import Display from '../../components/Display';
import { Button, ButtonGroup, Container, Row } from 'reactstrap';

var Calculator = function (_React$Component) {
    _inherits(Calculator, _React$Component);

    function Calculator() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Calculator);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call.apply(_ref, [this].concat(args))), _this), _this.state = { expression: "" }, _this._onChange = function (e) {
            _this.setState({ expression: e.target.value });
        }, _this._onClick = function (val) {
            if (isNaN(_this.state.expression.substr(_this.state.expression.length - 1)) == true && isNaN(val) == true && val != '+' && val != '-') {
                _this.setState({ expression: _this.state.expression.replace(/.$/, val) });
            } else {
                _this.setState({ expression: _this.state.expression + val });
            }
        }, _this._onClear = function () {
            _this.setState({ expression: "" });
        }, _this._onDelete = function () {
            _this.setState({ expression: _this.state.expression.slice(0, -1) });
        }, _this._onEvaluate = function () {

            var expression = _this.state.expression.replace('x', '*');
            expression = expression.replace('^(-1)', '**(-1)');
            try {
                var ans = eval(expression).toString();
                _this.setState({ expression: ans });
            } catch (err) {
                _this.setState({ expression: "error" });
            }
        }, _this._onEvaluateSquareRoot = function () {

            var expression = _this.state.expression.replace('x', '*');
            try {
                var ans = Math.sqrt(expression).toString();
                _this.setState({ expression: ans });
            } catch (err) {
                _this.setState({ expression: "error" });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    /**
    * Update the expression value in the state to the current latest string in the Input.
    */


    /**
    * For all digit and operator buttons except "=", update expression value in the state by adding the buttons value to it.
    * @param {string} val - The sring value of the clicked button.
    */


    /**
    * Update the expression value in the state to an empty string on click of the "C" button.
    */


    /**
    * Update the expression value in the state to the calculated answer on click of the "=" button.
    */


    _createClass(Calculator, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                Container,
                null,
                React.createElement(
                    Row,
                    null,
                    React.createElement(Display, { expression: this.state.expression, onChange: this._onChange })
                ),
                React.createElement(
                    Row,
                    null,
                    React.createElement(Buttons, { onClick: this._onClick, onClear: this._onClear, onDelete: this._onDelete, onEvaluate: this._onEvaluate, onEvaluateSquareRoot: this._onEvaluateSquareRoot })
                )
            );
        }
    }]);

    return Calculator;
}(React.Component);

export default Calculator;