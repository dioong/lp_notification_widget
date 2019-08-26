"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./styles/main.scss");
var exporter_1 = require("./exporter");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._addNotification = function (notiType, position) {
            var message = prompt("insert notification message");
            if (_this.notificationWidget) {
                _this.notificationWidget.showNotification(message || "", notiType, position);
            }
        };
        _this._clearNotifications = function () {
            if (_this.notificationWidget) {
                _this.notificationWidget.clearNotifications();
            }
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        this.notificationWidget = new exporter_1.NotificationWidget(5000);
    };
    App.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement("div", { className: "menu" },
            react_1.default.createElement("button", { className: "menu-button", onClick: function (event) { return _this._addNotification(exporter_1.NotiTypes.alert, exporter_1.NotiPositions.tl); } }, "Top Left alert"),
            react_1.default.createElement("button", { className: "menu-button", onClick: function (event) { return _this._addNotification(exporter_1.NotiTypes.alert, exporter_1.NotiPositions.tr); } }, "Top Right alert"),
            react_1.default.createElement("button", { className: "menu-button", onClick: function (event) { return _this._addNotification(exporter_1.NotiTypes.warning, exporter_1.NotiPositions.bl); } }, "Bottom Left warning"),
            react_1.default.createElement("button", { className: "menu-button", onClick: function (event) { return _this._addNotification(exporter_1.NotiTypes.info, exporter_1.NotiPositions.br); } }, "Bottom Right info"),
            react_1.default.createElement("button", { className: "menu-button", onClick: function (event) { return _this._clearNotifications(); } }, "clear")));
    };
    return App;
}(react_1.default.Component));
exports.default = App;
