import NotificationWidgetContainer from './components/NotificationWidgetContainer';
import eventManager from './utils/eventManager';
import { NotiTypes, NotiPositions } from './enums/NotificationProps';
import { EventTypes } from './enums/EventTypes';
import ReactDOM from 'react-dom';
import * as React from "react";
var NotificationWidget = /** @class */ (function () {
    function NotificationWidget(autoHideTime) {
        this._autoHideTime = autoHideTime || 3000;
        var id = "lp-notification_widget_container";
        var containerDomNode = document.getElementById(id);
        if (!containerDomNode) {
            var containerDomNode_1 = document.createElement('div');
            containerDomNode_1.setAttribute("id", id);
            document.body.appendChild(containerDomNode_1);
            ReactDOM.render(React.createElement(NotificationWidgetContainer, { autoHideTime: autoHideTime }), containerDomNode_1);
        }
    }
    NotificationWidget.prototype.showNotification = function (message, notiType, positions) {
        eventManager.emit(EventTypes.add, message, notiType, positions);
    };
    NotificationWidget.prototype.clearNotifications = function () {
        eventManager.emit(EventTypes.clear);
    };
    return NotificationWidget;
}());
export { NotificationWidget, NotiPositions, NotiTypes };
