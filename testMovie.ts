import { profesional } from "./profesional";
import { movie } from "./movie";

let movies = new movie("Rampage",2018,"Accion",);

let actor = [ new profesional("Dwayne Johnson", 50, 118, 1.96, false, "eeuu", 4, "actor"), new profesional("Naomie Harris", 45, 62, 1.73, false, "Inglesa", 2, "actriz"),
  ]


movies.actors = actor;
movies.nacionality = "America";
movies.director = new profesional("Brad peyton",44,73,1.72,false,"canadiense",2,"director",);
movies.writer = new profesional("Carlton Cuse",64,80,1.92,false,"mexicano",1,"actor,escritor,productor de cine");
movies.language = "English";
movies.plataforma = "Amazon prime";
movies.isMCU = false;
movies.mainCharacterName = "Dwayne Johnson";
movies.producer = "Hiram Gracía";
movies.distributor = "Warner Bros";


movies.Movie();
