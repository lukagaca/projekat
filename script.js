let persons = [{name: 'Luka', lastName: 'Gaca', age: 27, mama: {ime: "Meme"}}, {name: 'Petar', lastName: 'Pejovic', age: 27}, {name: 'Aleksandra', lastName: 'Koljensic', age: 22}];
const lateTwenties = persons.filter((agist)=>{return agist.age === 27}).map((person)=>{return person.lastName});
console.log(lateTwenties);

const x = 10;
const boja = x >= 10 ? `Plava` : `Zelena`; // ternarni operator
console.log(boja);

class Osoba { // oop 
    constructor(ime, prezime, godine) {
        this.ime = ime;
        this.prezime = prezime;
        this.godine = godine;
    }
    punoIme() {
        return `${this.ime} ${this.prezime}`;
    }
}
const osoba1 = new Osoba('Luka', 'Gaca', 27);
const osoba2 = new Osoba('Aleksandra', 'Koljensic', 22);
console.log(osoba1.punoIme());
console.log(osoba1);
console.log(osoba2.punoIme());
console.log(osoba2);