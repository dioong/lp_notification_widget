import NotificationWidgetContainer from './components/NotificationWidgetContainer';
import { NotiTypes, NotiPositions } from './enums/NotificationProps';
declare function showNotification(message: string, notiType: NotiTypes, positions: NotiPositions): void;
declare function clearNotifications(): void;
export { NotificationWidgetContainer, showNotification, clearNotifications, NotiPositions, NotiTypes };
