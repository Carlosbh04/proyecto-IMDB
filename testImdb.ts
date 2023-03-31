import { movie } from "./movie";
import { imdb } from "./imdb";




let pelicula1 = new movie("Rempage",2018,"accion");
let pelicula2 = new movie("Jumanji",2017,"Aventura/Accion");
let pelicula3 = new movie("Jurassic World",2015,"Accion/Ciencia Ficcion");


let pelicula: movie[]=[pelicula1,pelicula2,pelicula3];
let Imdb = new imdb(pelicula);
console.log(Imdb.peliculas);
