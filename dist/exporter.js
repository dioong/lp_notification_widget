"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var NotificationWidgetContainer_1 = __importDefault(require("./components/NotificationWidgetContainer"));
var eventManager_1 = __importDefault(require("./utils/eventManager"));
var NotificationProps_1 = require("./enums/NotificationProps");
exports.NotiTypes = NotificationProps_1.NotiTypes;
exports.NotiPositions = NotificationProps_1.NotiPositions;
var EventTypes_1 = require("./enums/EventTypes");
var react_dom_1 = __importDefault(require("react-dom"));
var React = __importStar(require("react"));
var NotificationWidget = /** @class */ (function () {
    function NotificationWidget(autoHideTime) {
        this._autoHideTime = autoHideTime || 3000;
        var id = "lp-notification_widget_container";
        var containerDomNode = document.getElementById(id);
        if (!containerDomNode) {
            var containerDomNode_1 = document.createElement('div');
            containerDomNode_1.setAttribute("id", id);
            document.body.appendChild(containerDomNode_1);
            react_dom_1.default.render(React.createElement(NotificationWidgetContainer_1.default, { autoHideTime: autoHideTime }), containerDomNode_1);
        }
    }
    NotificationWidget.prototype.showNotification = function (message, notiType, positions) {
        eventManager_1.default.emit(EventTypes_1.EventTypes.add, message, notiType, positions);
    };
    NotificationWidget.prototype.clearNotifications = function () {
        eventManager_1.default.emit(EventTypes_1.EventTypes.clear);
    };
    return NotificationWidget;
}());
exports.NotificationWidget = NotificationWidget;
