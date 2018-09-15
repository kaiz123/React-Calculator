var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import Calculator from './containers/Calculator';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      modal: false
    };

    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          Button,
          { color: 'danger', onClick: this.toggle },
          'Open Calculator'
        ),
        React.createElement(
          Modal,
          { isOpen: this.state.modal, toggle: this.toggle, className: this.props.className },
          React.createElement(
            ModalHeader,
            { toggle: this.toggle },
            'Calculator'
          ),
          React.createElement(
            ModalBody,
            null,
            React.createElement(Calculator, null)
          )
        )
      );
    }
  }]);

  return App;
}(Component);

export default App;