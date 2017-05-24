"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Input = (function (_super) {
    __extends(Input, _super);
    function Input() {
        var _this = _super.call(this) || this;
        _this.state = {
            value: 'Hello!可以在这里输出字符串！'
        };
        return _this;
    }
    Input.prototype.handleChange = function (event) {
        this.setState({ value: event.target.value });
    };
    ;
    Input.prototype.render = function () {
        var value = this.state.value;
        return (React.createElement("div", null,
            React.createElement("input", { value: value, onChange: this.handleChange.bind(this) }),
            React.createElement("p", null,
                " ",
                value)));
    };
    return Input;
}(React.Component));
exports.Input = Input;
;
