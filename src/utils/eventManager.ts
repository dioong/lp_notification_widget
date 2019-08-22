import {EventTypes} from "../enums/EventTypes";

const eventManager = {
    list: new Map(),

    on(event:EventTypes, callback:Function) {
        this.list.has(event) || this.list.set(event, []);
        this.list.get(event).push(callback);
        return this;
    },

    off(event:EventTypes) {
        this.list.delete(event);
        return this;
    },

    emit(event:EventTypes, ...args: any[]) {
        this.list.has(event) &&
        this.list.get(event).forEach((callback: (args?: any) => void) =>
            setTimeout(() => {
                callback(...args);
            }, 0)
        );
    }
};

export default eventManager;