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
import React from 'react';
import './styles/main.scss';
import { NotificationWidget, NotiPositions, NotiTypes } from "./exporter";
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
        this.notificationWidget = new NotificationWidget(5000);
    };
    App.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "menu" },
            React.createElement("button", { className: "menu-button", onClick: function (event) { return _this._addNotification(NotiTypes.alert, NotiPositions.tl); } }, "Top Left alert"),
            React.createElement("button", { className: "menu-button", onClick: function (event) { return _this._addNotification(NotiTypes.alert, NotiPositions.tr); } }, "Top Right alert"),
            React.createElement("button", { className: "menu-button", onClick: function (event) { return _this._addNotification(NotiTypes.warning, NotiPositions.bl); } }, "Bottom Left warning"),
            React.createElement("button", { className: "menu-button", onClick: function (event) { return _this._addNotification(NotiTypes.info, NotiPositions.br); } }, "Bottom Right info"),
            React.createElement("button", { className: "menu-button", onClick: function (event) { return _this._clearNotifications(); } }, "clear")));
    };
    return App;
}(React.Component));
export default App;
