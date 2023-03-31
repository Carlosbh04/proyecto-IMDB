"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movie = void 0;
var movie = /** @class */ (function () {
    function movie(title, releaseYear, genre) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.genre = genre;
    }
    movie.prototype.Movie = function () {
        console.log("title : ".concat(this.title));
        console.log("Release Year: ".concat(this.releaseYear));
        console.log("genre: ".concat(this.genre));
        console.log("Actors:");
        this.actors.forEach(function (actor) {
            console.log("".concat(actor.name));
        });
        console.log("Nacionality: ".concat(this.nacionality));
        console.log("Director:");
        this.director.mostaratributos();
        console.log("Writer:");
        this.writer.mostaratributos();
        console.log("Languaje: ".concat(this.language));
        console.log("Plataforma: ".concat(this.plataforma));
        console.log("Is MCU: ".concat(this.isMCU));
        console.log("Main Character Name: ".concat(this.mainCharacterName));
        console.log("Producer: ".concat(this.producer));
        console.log("Distributor: ".concat(this.distributor));
        console.log("Genre: ".concat(this.genre));
    };
    return movie;
}());
exports.movie = movie;
// let movies = new movie("Rampage",2018,"Accion",);
// let actor = [ new profesional("Dwayne Johnson", 50, 118, 1.96, false, "eeuu", 4, "actor"), new profesional("Naomie Harris", 45, 62, 1.73, false, "Inglesa", 2, "actriz"),
//   ]
// movies.actors = actor;
// movies.nacionality = "America";
// movies.director = new profesional("Brad peyton",44,73,1.72,false,"canadiense",2,"director",);
// movies.writer = new profesional("Carlton Cuse",64,80,1.92,false,"mexicano",1,"actor,escritor,productor de cine");
// movies.language = "English";
// movies.plataforma = "Amazon prime";
// movies.isMCU = false;
// movies.mainCharacterName = "Dwayne Johnson";
// movies.producer = "Hiram Gracía";
// movies.distributor = "Warner Bros";
// movies.Movie();
