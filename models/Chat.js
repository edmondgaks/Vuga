import isISO31661Alpha2 from "validator/lib/isISO31661Alpha2";

export default class Chat {
    constructor() {
        alert("Chat feature is loading")
        this.openConnection(); 
    }

    openConnection() {
        this.socket = io()
    }
}