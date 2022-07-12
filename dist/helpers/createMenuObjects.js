"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMenuObjects = void 0;
const createMenuObjects = (activeMenu) => {
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };
    if (activeMenu !== '') {
        returnObject[activeMenu] = true;
    }
    return returnObject;
};
exports.createMenuObjects = createMenuObjects;
