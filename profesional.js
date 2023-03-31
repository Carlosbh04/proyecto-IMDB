"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profesional = void 0;
var peliculas = [
    {
        titulo: "Rampage",
        director: "Brad Peyton",
        año: 2018,
        genero: ["Accion/Aventura"]
    },
    {
        titulo: "Spiderman-Man",
        director: "Sam Raimi",
        año: 2002,
        genero: ["Accion/Fantasia"]
    },
    {
        titulo: "Avatar:The Way of Water",
        director: "James Cameron",
        año: 2022,
        genero: ["Ciencia Ficcion/Accion"]
    },
    {
        titulo: "Uncharted",
        director: "Ruben Fleischer",
        año: 2022,
        genero: ["Aventura/Accion"]
    }
];
// console.log(peliculas);
var profesional = /** @class */ (function () {
    function profesional(name, age, weight, height, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    profesional.prototype.forEach = function (arg0) {
        throw new Error("Method not implemented.");
    };
    profesional.prototype.mostaratributos = function () {
        console.log("name:".concat(this.name, "\nage: ").concat(this.age, "\nweight: ").concat(this.weight, "\nheight: ").concat(this.height, "\nIs Retired: ").concat(this.isRetired, "\nnationality: ").concat(this.nationality, "\noscarsNumber: ").concat(this.oscarsNumber, "\nprofession: ").concat(this.profession, "\n"));
    };
    return profesional;
}());
exports.profesional = profesional;
// let actor = new profesional("Dwayne Johnson",50,118,1.96,false,"eeuu",4,"actor",);
// actor.mostaratributos();
