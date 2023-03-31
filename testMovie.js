"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var profesional_1 = require("./profesional");
var movie_1 = require("./movie");
var movies = new movie_1.movie("Rampage", 2018, "Accion");
var actor = [new profesional_1.profesional("Dwayne Johnson", 50, 118, 1.96, false, "eeuu", 4, "actor"), new profesional_1.profesional("Naomie Harris", 45, 62, 1.73, false, "Inglesa", 2, "actriz"),
];
movies.actors = actor;
movies.nacionality = "America";
movies.director = new profesional_1.profesional("Brad peyton", 44, 73, 1.72, false, "canadiense", 2, "director");
movies.writer = new profesional_1.profesional("Carlton Cuse", 64, 80, 1.92, false, "mexicano", 1, "actor,escritor,productor de cine");
movies.language = "English";
movies.plataforma = "Amazon prime";
movies.isMCU = false;
movies.mainCharacterName = "Dwayne Johnson";
movies.producer = "Hiram Gracía";
movies.distributor = "Warner Bros";
movies.Movie();
