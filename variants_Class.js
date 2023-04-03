//Variant 2
class RudyES6 {
    constructor(nume, tipRasa, colorPar, birthDay) {
        this.nume = nume;
        this.tipRasa = tipRasa;
        this.colorPar = colorPar;
        this.birthDay = birthDay;
        this.vaccin = [];
        this.passport = false;
    }
    descriptionRudy() {
        return `${this.nume} este un caine de rasa ${this.tipRasa}, are culoarea  ${this.colorPar}, s-a nascut in anul ${this.birthDay} si ${!this.passport ? "nu " : ""} are voie sa iasa din Moldova si are urmatoarele vaccine ${this.vaccin[0].nume} `;
     }
     
    adaugareVaccin(vaccin) {
         this.vaccin.push(vaccin);
     }
    
    afiseazaIstoriculVaccinarii(){
        for(let i=0; i < this.vaccin.length; i++){
           console.log(" vaccin  "+ this.vaccin[i].nume + " data de "+ this.vaccin[i].data )
        }
    }
}

const rudyThree = new RudyES6('Laika','labrador', 'gold','2020');
rudyThree.adaugareVaccin({nume: "hepatita canina", data:"2020-03-17" } );
rudyThree.afiseazaIstoriculVaccinarii();
console.log(rudyThree.descriptionRudy());

//Varianta 1 - Functii constructor
const Rudy = function (nume,tipRasa, colorPar, birthDay) {
    this.nume = nume;
    this.tipRasa = tipRasa;
    this.colorPar = colorPar;
    this.birthDay = birthDay;
    this.vaccin = [];
    this.passport = false;
}

Rudy.prototype.descriptionRudy = function() {
    return `${this.nume} este un caine de rasa ${this.tipRasa}, are culoarea  ${this.colorPar}, s-a nascut in anul ${this.birthDay} si ${!this.passport ? "nu " : ""} are voie sa iasa din Moldova si are urmatoarele vaccine ${this.vaccin[0].nume} `;
 }
 
 Rudy.prototype.adaugareVaccin = function(vaccin) {
     this.vaccin.push(vaccin);
 }

 Rudy.prototype.afiseazaIstoriculVaccinarii = function(){
    for(let i=0; i < this.vaccin.length; i++){
       console.log(" vaccin  "+ this.vaccin[i].nume + " data de "+ this.vaccin[i].data )
    }
}

const rudyOne = new Rudy('Belka','labrador', 'gold','2020');
rudyOne.adaugareVaccin({nume: "hepatita canina", data:"2020-03-17" } );
rudyOne.afiseazaIstoriculVaccinarii();
console.log(rudyOne.descriptionRudy());

const rudyTwo = new Rudy('Strelka', 'husky', 'tarcat','2021');
rudyTwo.adaugareVaccin({nume: "hepatita labradina", data:"2021-04-03" } );
rudyTwo.afiseazaIstoriculVaccinarii();
console.log(rudyTwo.descriptionRudy());
