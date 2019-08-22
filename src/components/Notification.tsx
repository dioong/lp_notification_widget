import * as React from "react";
import '../styles/scss/notification.scss';

interface NotificationProps {uuid: string; notiType: string; message: string; onClickDelete: Function;}

const Notification: React.SFC<NotificationProps> = (props) => {
    return <div className={`notification ${props.notiType}`}>
        <div className={"message"}>{props.message}</div>
        <button className={'close-btn'} onClick={e => props.onClickDelete(props.uuid)}>✖</button>
    </div>
}

export default Notification