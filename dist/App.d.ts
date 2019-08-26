import React from 'react';
import './styles/main.scss';
import { NotificationWidget } from "./exporter";
declare class App extends React.Component {
    notificationWidget: NotificationWidget | undefined;
    componentDidMount(): void;
    private _addNotification;
    private _clearNotifications;
    render(): JSX.Element;
}
export default App;
