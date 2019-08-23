import { EventTypes } from '../enums/EventTypes';
declare const eventManager: {
    list: Map<any, any>;
    on(event: EventTypes, callback: Function): any;
    off(event: EventTypes): any;
    emit(event: EventTypes, ...args: any[]): void;
};
export default eventManager;
