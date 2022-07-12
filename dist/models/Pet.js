"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pet = void 0;
const data_1 = require("./data");
exports.Pet = {
    getall: () => data_1.data,
    filterByType: (type) => data_1.data.filter(pet => pet.type === type),
    filterByName: (name) => data_1.data.filter(pet => pet.name.toLowerCase().includes(name.toLowerCase()))
};
