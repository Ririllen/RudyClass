//Varianta 1 - Functii constructor
const Rudy = function (tipRasa, colorPar, birthDay) {
    this.tipRasa = tipRasa;
    this.colorPar = colorPar;
    this.birthDay = birthDay;
    this.vaccin = [];
    this.passport = false;
}

Rudy.prototype.descriptionRudy = function() {
    return `Rudy este un caine de rasa ${this.tipRasa}, are culoarea  ${this.colorPar}, s-a nascut in anul ${this.birthDay} si ${!this.passport ? "nu " : ""} are voie sa iasa din Moldova si are urmatoarele vaccine ${this.vaccin[0].nume} `;
 }
 
 Rudy.prototype.adaugareVaccin = function(vaccin) {
     this.vaccin.push(vaccin);
 }

 Rudy.prototype.afiseazaIstoriculVaccinarii = function(){
    for(let i=0; i < this.vaccin.length; i++){
       console.log(" vaccin  "+ this.vaccin[i].nume + " data de "+ this.vaccin[i].data )
    }
}

const rudyOne = new Rudy('labrador', 'gold','2020');
rudyOne.adaugareVaccin({nume: "hepatita canina", data:"2020-03-17" } );
rudyOne.afiseazaIstoriculVaccinarii();
console.log(rudyOne.descriptionRudy());
