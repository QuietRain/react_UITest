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
var MyTitle = (function (_super) {
    __extends(MyTitle, _super);
    function MyTitle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // getDefaultProps: function () {
        //   return {
        //     title: 'Hello World'
        //   }
        // },
        _this.propTypes = {
            title: React.PropTypes.string.isRequired,
        };
        return _this;
    }
    MyTitle.prototype.render = function () {
        return React.createElement("h1", null,
            " ",
            this.props.title,
            " ");
    };
    return MyTitle;
}(React.Component));
exports.MyTitle = MyTitle;
;
