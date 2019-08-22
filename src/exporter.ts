import NotificationWidgetContainer from './components/NotificationWidgetContainer';
import eventManager from './utils/eventManager';
import {NotiTypes, NotiPositions} from "./enums/NotificationProps";
import {EventTypes} from "./enums/EventTypes";

function showNotification(message:string, notiType:NotiTypes, positions:NotiPositions) {
    eventManager.emit(EventTypes.add, message, notiType, positions);
}

function clearNotifications() {
    eventManager.emit(EventTypes.clear);
}

export {
    NotificationWidgetContainer,
    showNotification,
    clearNotifications,
    NotiPositions,
    NotiTypes
};