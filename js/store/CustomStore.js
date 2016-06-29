'use strict'

var EventEmitter = require('events').EventEmitter;
let assign = require('object-assign');

const DATA_CHANGE =
    {
        Patient:'DATA_CHANGE_PATIENT',
        Mechanism:"DATA_CHANGE_MECHANISM",
        Treatment:"DATA_CHANGE_TREATMENT"
    };

let dataStore = {
    Patient:{
        sex:"1",
        smokingHistory:"无",
        birthday:'',
        medicalHistory:'',
        otherTherapy:'',
        allergies:''},
    Mechanism:{
        diagnosisDate:"",
        pathologicalPattern:"",
        diseaseStaging:"",
        metastaticLesion:"",
        otherLesion:"",
        genicMutation:"",
        otherMutation:"",
        detection:""},
    Treatment:{
        uuid:'',
        startDate:"",
        endDate:"",
        scheme:"",
        schemeComment:"",
        otherScheme:"",
        effect:"",
        images:""},
};

let CustomStore = assign({}, EventEmitter.prototype, {

    getStore(key){
        return dataStore[key];
    },
    setStore(key,value){
        dataStore[key] = value;
        this.emit(DATA_CHANGE[key]);
    },
    getItem(key,field)
    {
        return dataStore[key][field];
    },
    setItem(key,field,value)
    {
        dataStore[key][field] = value;
        this.emit(DATA_CHANGE[key]);
    },
    clear(key)
    {
        dataStore[key] = undefined;
        this.emit(DATA_CHANGE[key]);
    },
    addListener(key,callback)
    {
        this.on(DATA_CHANGE[key],callback);
    },
    removerListener(key,callback)
    {
        this.removerListener(DATA_CHANGE[key],callback);
    }
});

module.exports = CustomStore;
