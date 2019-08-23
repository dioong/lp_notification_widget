import * as React from "react";
import '../styles/scss/notification.scss';
interface InotificationProps {
    uuid: string;
    notiType: string;
    message: string;
    onClickDelete: Function;
}
declare const Notification: React.SFC<InotificationProps>;
export default Notification;
