'use strict';

var EventEmitter = require('events').EventEmitter;
let assign = require('object-assign');

const ON_CONFIG_CHANGE = "ON_CONFIG_CHANGE";

let dataStore = {};

let ConfigStore = assign({}, EventEmitter.prototype, {

    getStore() {
        return dataStore;
    },
    setStore(store) {
        dataStore = store;
        this.emit(ON_CONFIG_CHANGE)
    },

    getData(key)
    {
        return dataStore[key];
    },

    putValue(key, value)
    {
        dataStore[key] = value;
        this.emit(ON_CONFIG_CHANGE);
    },

    remove(key)
    {
        delete dataStore[key];
        this.emit(ON_CONFIG_CHANGE);
    },

    addListener(callback) {
        this.on(ON_CONFIG_CHANGE, callback)
    },

    removeListener(callback) {
        this.removeListener(ON_CONFIG_CHANGE, callback);
    },
});

module.exports = ConfigStore;
