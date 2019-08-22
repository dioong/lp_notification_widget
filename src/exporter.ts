import NotificationWidgetContainer from './components/NotificationWidgetContainer';
import eventManager from './utils/eventManager';
import {notiTypes, WidgetPositions} from "./enums/NotificationProps";

function showNotification(message:string, notiType:notiTypes, positions:WidgetPositions) {
    eventManager.emit("ADD", message, notiType, positions);
}

function clearNotifications() {
    eventManager.emit("CLEAR");
}

export {
    NotificationWidgetContainer,
    showNotification,
    clearNotifications,
    WidgetPositions,
    notiTypes
};