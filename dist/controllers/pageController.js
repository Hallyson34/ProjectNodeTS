"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fishes = exports.cats = exports.dogs = exports.home = void 0;
const createMenuObjects_1 = require("../helpers/createMenuObjects");
const Pet_1 = require("../models/Pet");
const home = (req, res) => {
    let list = Pet_1.Pet.getall();
    res.render('pages/page', {
        menu: (0, createMenuObjects_1.createMenuObjects)('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    });
};
exports.home = home;
const dogs = (req, res) => {
    let list = Pet_1.Pet.filterByType('dog');
    res.render('pages/page', {
        menu: (0, createMenuObjects_1.createMenuObjects)('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list
    });
};
exports.dogs = dogs;
const cats = (req, res) => {
    let list = Pet_1.Pet.filterByType('cat');
    res.render('pages/page', {
        menu: (0, createMenuObjects_1.createMenuObjects)('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
    });
};
exports.cats = cats;
const fishes = (req, res) => {
    let list = Pet_1.Pet.filterByType('fish');
    res.render('pages/page', {
        menu: (0, createMenuObjects_1.createMenuObjects)('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list
    });
};
exports.fishes = fishes;
