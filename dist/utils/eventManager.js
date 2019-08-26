var eventManager = {
    list: new Map(),
    on: function (event, callback) {
        this.list.has(event) || this.list.set(event, []);
        this.list.get(event).push(callback);
        return this;
    },
    off: function (event) {
        this.list.delete(event);
        return this;
    },
    emit: function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.list.has(event) &&
            this.list.get(event).forEach(function (callback) {
                return setTimeout(function () {
                    callback.apply(void 0, args);
                }, 0);
            });
    },
};
export default eventManager;
