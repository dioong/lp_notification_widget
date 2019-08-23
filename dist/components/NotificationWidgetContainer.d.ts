import * as React from "react";
import '../styles/scss/notificationWidget.scss';
import { NotiPositions, NotiTypes } from "../enums/NotificationProps";
interface InotificationScheme {
    message: string;
    notiType: NotiTypes;
    position: NotiPositions;
    uuid: string;
    created: number;
}
interface InotificationWidgetState {
    notifications: Array<InotificationScheme>;
}
interface InotificationWidgetProps {
    autoHideTime?: number;
}
declare class NotificationWidgetContainer extends React.Component<InotificationWidgetProps, InotificationWidgetState> {
    defaultAutoHideTime: number;
    _timeCheckId: any;
    state: {
        notifications: never[];
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: Readonly<InotificationWidgetProps>, prevState: Readonly<InotificationWidgetState>, snapshot?: any): void;
    componentWillUnmount(): void;
    private _check_time;
    _runTimer: () => void;
    _onDelete: (uuid: string) => void;
    renderNotification: () => JSX.Element[];
    render(): JSX.Element;
}
export default NotificationWidgetContainer;
