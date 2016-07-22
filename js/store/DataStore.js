'use strict';

var EventEmitter = require('events').EventEmitter;
let assign = require('object-assign');

const ON_DATA_CHANGE = "ON_DATA_CHANGE";

let dataStore = {};

let DataStore = assign({}, EventEmitter.prototype, {

    getStore() {
        return dataStore;
    },
    setStore(store) {
        dataStore = store;
        this.emit(ON_DATA_CHANGE)
    },

    getData(key)
    {
        return dataStore[key];
    },

    putValue(key, value)
    {
        dataStore[key] = value;
        this.emit(ON_DATA_CHANGE);
    },

    remove(key)
    {
        delete dataStore[key];
        this.emit(ON_DATA_CHANGE);
    },

    addListener(callback) {
        this.on(ON_DATA_CHANGE, callback)
    },

    removeListener(callback) {
        this.removeListener(ON_DATA_CHANGE, callback);
    },
});

module.exports = DataStore;
