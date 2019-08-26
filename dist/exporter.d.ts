import { NotiTypes, NotiPositions } from './enums/NotificationProps';
declare class NotificationWidget {
    _autoHideTime: number;
    constructor(autoHideTime: number);
    showNotification(message: string, notiType: NotiTypes, positions: NotiPositions): void;
    clearNotifications(): void;
}
export { NotificationWidget, NotiPositions, NotiTypes };
