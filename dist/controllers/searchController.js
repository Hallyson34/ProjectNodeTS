"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const Pet_1 = require("../models/Pet");
const createMenuObjects_1 = require("../helpers/createMenuObjects");
const search = (req, res) => {
    let query = req.query.q;
    if (!query) {
        res.redirect('/');
        return;
    }
    let list = Pet_1.Pet.filterByName(query);
    res.render('pages/page', {
        menu: (0, createMenuObjects_1.createMenuObjects)(''),
        list,
        query
    });
};
exports.search = search;
