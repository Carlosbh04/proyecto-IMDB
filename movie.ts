import { profesional } from "./profesional";

 export class movie{
    title:string;
    releaseYear:number;
    actors:profesional[];
    nacionality:string;
    director:profesional;
    writer:profesional;
    language:string;
    plataforma:string;
    isMCU:boolean;
    mainCharacterName:string;
    producer:string;
    distributor:string;
    genre:string;


    constructor(title:string,releaseYear:number,genre:string){
        this.title = title;
        this.releaseYear = releaseYear;
        this.genre = genre;
       

    }
    Movie():void{
        console.log(`title : ${this.title}`);
        console.log(`Release Year: ${this.releaseYear}`);
        console.log(`genre: ${this.genre}`);
        
        console.log(`Actors:`);this.actors.forEach((actor)=>{
        console.log(`${actor.name}`);})
        console.log(`Nacionality: ${this.nacionality}`);
        console.log(`Director:`);
        this.director.mostaratributos();
        console.log(`Writer:`);
        this.writer.mostaratributos();
        console.log(`Languaje: ${this.language}`);
        console.log(`Plataforma: ${this.plataforma}`);
        console.log(`Is MCU: ${this.isMCU}`);
        console.log(`Main Character Name: ${this.mainCharacterName}`);
        console.log(`Producer: ${this.producer}`);
        console.log(`Distributor: ${this.distributor}`);
        console.log(`Genre: ${this.genre}`);     
        
    }

}


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

