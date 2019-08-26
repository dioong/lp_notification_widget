# lp notification widget task

## Installation
Install dependencies using yarn

````
yarn install
````

After that, command it to run sample

````
yarn start
````

## Usage
1. Add `"lokal_notification_widget": "git+https://github.com/dioong/lp_notification_widget.git"` to dependencies in package.json
2. `npm install`  or `yarn install`
3. `npm update lokal_notification_widget` or `yarn upgrade lokal_notification_widget` when repository has been updated
4. use in your application.

- add component NotificationWidgetContainer to your project
    ```javascript
  import {NotificationWidget, NotiPositions, NotiTypes} from "lokal_notification_widget";
  /**
    to initialize     
  */  
  const notificationWidget = new NotificationWidget(autoHideTime)
  
  /**
    to show notification     
    */
  notificationWidget.showNotification(message:string, notiType:NotiTypes, position:NotiPositions)

  /**
    to clear all notification,
  */
  notificationWidget.clearNotifications()
    ```

## Technology stack
#### React
[React](https://github.com/facebook/react)

#### TypeScript
[TypeScript](https://www.typescriptlang.org/)

#### Lodash
[Lodash](https://lodash.com/)

#### Branching
Git-flow strategy. Detail information [here](http://nvie.com/posts/a-successful-git-branching-model/).

## todo list
### add animiation options