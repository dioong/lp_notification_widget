const eventManager = {
    list: new Map(),



    on(event:string, callback:Function) {
        this.list.has(event) || this.list.set(event, []);
        this.list.get(event).push(callback);
        return this;
    },

    off(event:string) {
        this.list.delete(event);
        return this;
    },

    emit(event:string, ...args: any[]) {
        this.list.has(event) &&
        this.list.get(event).forEach((callback: (args?: any) => void) =>
            setTimeout(() => {
                callback(...args);
            }, 0)
        );
    }
};

export default eventManager;