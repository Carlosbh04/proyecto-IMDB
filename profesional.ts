
   interface pelicula{
    titulo:string;
    director:string;
    año:number;
    genero: string[];
}


 let peliculas:pelicula[]= [
    {
        titulo:"Rampage",
        director:"Brad Peyton",
        año: 2018,
        genero:["Accion/Aventura"]
    },
    {
        titulo:"Spiderman-Man",
        director:"Sam Raimi",
        año: 2002,
        genero:["Accion/Fantasia"]
    },
    {
        titulo:"Avatar:The Way of Water",
        director:"James Cameron",
        año: 2022,
        genero:["Ciencia Ficcion/Accion"]
    },
    {
        titulo:"Uncharted",
        director:"Ruben Fleischer",
        año:2022,
        genero:["Aventura/Accion"]
    }
];

// console.log(peliculas);



export class profesional{
    forEach(arg0: (Director: any) => void) {
        throw new Error("Method not implemented.");
    }
    name:string;
    age:number;
    weight: number;
    height: number;
    isRetired: boolean;
    nationality: string;
    oscarsNumber: number;
    profession: string;

    constructor(name:string,age:number,weight:number,height:number,isRetired:boolean,nationality:string,oscarsNumber:number,profession:string){
        this.name = name;
        this.age =  age;
        this.weight = weight;
        this.height =  height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
       this.profession = profession;

    }
    mostaratributos():void{
        console.log(`name:${this.name}\nage: ${this.age}\nweight: ${this.weight}\nheight: ${this.height}\nIs Retired: ${this.isRetired}\nnationality: ${this.nationality}\noscarsNumber: ${this.oscarsNumber}\nprofession: ${this.profession}\n`);
        
    }
}


// let actor = new profesional("Dwayne Johnson",50,118,1.96,false,"eeuu",4,"actor",);
// actor.mostaratributos();



