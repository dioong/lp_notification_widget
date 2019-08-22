import * as React from "react";
import '../styles/scss/notification.scss';

interface InotificationProps {uuid: string; notiType: string; message: string; onClickDelete: Function;}

const Notification: React.SFC<InotificationProps> = (props) => {
    return <div className={`lp-notification ${props.notiType}`}>
        <div className={"lp-message"}>{props.message}</div>
        <button className={'lp-close-btn'} onClick={e => props.onClickDelete(props.uuid)}>✖</button>
    </div>
}

export default Notification