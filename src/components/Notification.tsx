import * as React from "react";

interface NotificationProps {uuid: string; notiType: string; message: string; onClickDelete: Function;}

const Notification: React.SFC<NotificationProps> = (props) => {
    return <div className={`notification ${props.notiType}`}>
        <div className={"message"}>{props.message}</div>
        <button className={'close-btn'} onClick={e => props.onClickDelete(props.uuid)}>x</button>
    </div>
}

export default Notification