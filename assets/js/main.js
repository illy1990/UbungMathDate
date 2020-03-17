//,MATH - Ubung 1 - CodeFlow Übung lev1_1: Math.PI
console.log(Math.PI);
const PI = Math.PI;
let roundedPI = PI.toFixed(2);
console.log(roundedPI)

// MATH - Ubung 2 - CodeFlow Übung lev1_2: Math.round()

let CeilA = (Math.ceil(PI))
let CeilB = (Math.ceil(9.45))
let CeilC = (Math.ceil(193.4464))
let CeilD = (Math.ceil(0.8596433607))
let CeilE = (Math.ceil(0.65149992))
let CeilF = (Math.ceil(2.1807301500))
let CeilG = (Math.ceil(- 2.9406290890))
let CeilH = (Math.ceil(- 24.45))
console.log(CeilA);
console.log(CeilB);
console.log(CeilC);
console.log(CeilD);
console.log(CeilE);
console.log(CeilF);
console.log(CeilG);
console.log(CeilH);

function round(x) {
    let y = Math.round(x);
    return y;
}

console.log(round(3.232));
console.log(round(342.23343));


// MATH - Ubung 3 - CodeFlow Übung lev1_2: Math.round()

let randomNum = Math.random();
let randomNum1_10 = Math.floor(Math.random() * 10 + 1);
let randomNum1_100 = Math.floor(Math.random() * 100 + 1);

console.log(randomNum);
console.log(randomNum1_10);
console.log(randomNum1_100);

// MATH - Ubung 4 - CodeFlow Übung lev1_4: Math.min Math.max
console.log(Math.min(393, 205, 479, 47, 376, 267, 385, 2, 190, 383, 286, 462, 115, 138, 331, 409, 427, 245, 224, 276, 483, 55, 147, 177, 208, 347, 135, 282, 33, 270, 475, 426, 476, 453, 474, 351, 219, 358, 354, 410, 240, 139, 371, 356, 277, 202, 264, 204, 447, 488));
console.log(Math.max(393, 205, 479, 47, 376, 267, 385, 2, 190, 383, 286, 462, 115, 138, 331, 409, 427, 245, 224, 276, 483, 55, 147, 177, 208, 347, 135, 282, 33, 270, 475, 426, 476, 453, 474, 351, 219, 358, 354, 410, 240, 139, 371, 356, 277, 202, 264, 204, 447, 488));

// MATH - Ubung 5 - CodeFlow Übung lev2_1: Math.round()

let RundungsArray = [PI, 9.45, 193.4464, 0.8596433607, 0.65149992, 2.1807301500, - 2.9406290890, - 24.45];

RundungsArray.forEach((ZuRunden) => console.log(Math.ceil(ZuRunden)))



// MATH - Ubung 6 - CodeFlow Übung lev2_2: Math.random() Math.floor() Game

// let ComputerDenkt = Math.floor(Math.random() * 10 + 1);
// let PeopleDenkt = prompt();

// if (ComputerDenkt == PeopleDenkt) {
//     console.log(ComputerDenkt + " " + PeopleDenkt + " yeah, richtig geraten")
// } else {
//     console.log(ComputerDenkt + " " + PeopleDenkt + " you flopped. Try again!")
// }



// MATH - Ubung 7 - CodeFlow Übung lev2_3: Math.min Math.max

function minimalWerte() {
    let dasAlterDerEltern = Math.min(52, 52);
    let dasAlterDerGeschwister = Math.min(15, 20, 22, 30);
    let dasAlterDerTrainer = Math.min(28, 32, 27);
    let dasAlterDerFussballspieler = Math.min(38, 23, 45, 23, 23)

    let youngsterOne = Math.min(dasAlterDerEltern, dasAlterDerGeschwister, dasAlterDerTrainer, dasAlterDerTrainer)
    console.log(youngsterOne)
}
minimalWerte();


// DATE - Ubung 1 - CodeFlow Übung lev1_1: date new Date()

let date1 = new Date();
let date2 = new Date(1975, 9, 10, 15, 23, 43);
let date3 = new Date(1982, 1, 2, 10, 0, 0);
let date4 = new Date(1995, 2, 27, 0, 0, 0);

document.getElementById("date1").innerHTML = date1;
document.getElementById("date2").innerHTML = date2;
document.getElementById("date3").innerHTML = date3;
document.getElementById("date4").innerHTML = date4;

let date1Round2 = new Date("September 2, 2019 09:00:00")
let date2Round2 = new Date(0)
let date3Round2 = new Date(31556908800)
let date4Round2 = new Date(86400000)

document.getElementById("date1Round2").innerHTML = date1Round2;
document.getElementById("date2Round2").innerHTML = date2Round2;
document.getElementById("date3Round2").innerHTML = date3Round2;
document.getElementById("date4Round2").innerHTML = date4Round2;

// DATE - Ubung 2 - CodeFlow Übung lev1_2: GET Date Methods

let aktuelleUhrzeit = new Date();
var UhrenmonateVorgegeben = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

var UhrenwochenTagVorgegeben = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];

let UhrenJahr = aktuelleUhrzeit.getFullYear();
let UhrenMonat = aktuelleUhrzeit.getMonth();
let UhrenTag = aktuelleUhrzeit.getDay();
let UhrenStunde = aktuelleUhrzeit.getHours();
let UhrenMinute = aktuelleUhrzeit.getMinutes();
let UhrenWochentagAnzeige = UhrenwochenTagVorgegeben[UhrenTag];
let UhrenMonatsAnzeige = UhrenmonateVorgegeben[UhrenMonat];

console.log(UhrenJahr)
console.log(UhrenMonat)
console.log(UhrenTag)
console.log(UhrenStunde)
console.log(UhrenMinute)
console.log(UhrenWochentagAnzeige)
console.log(UhrenMonatsAnzeige)


// DATE - Ubung 3 - CodeFlow Übung lev1_2: GET Date Methods

var setDate1 = new Date();
setDate1.setFullYear(2222, 09, 23);
setDate1.setHours(13),
    setDate1.setMinutes(25),
    setDate1.setSeconds(11);

document.getElementById("setDate1").innerHTML = setDate1;
// document.getElementById("setDate2").innerHTML = setDate2;
// document.getElementById("setDate3").innerHTML = setDate3;
// document.getElementById("setDate4").innerHTML = setDate4;
// document.getElementById("setDate5").innerHTML = setDate5;
// document.getElementById("setDate6").innerHTML = setDate6;


// DATE - Ubung 4 - CodeFlow Übung lev1_4: Tage In Monat

function DaysInMonth(monat, Jahr) {
    var DaysInMonth2 = new Date();
    DaysInMonth2.setFullYear(Jahr, monat, 0);
    DaysInMonth2.setHours(00);
    DaysInMonth2.setMinutes(00);
    DaysInMonth2.setSeconds(00)
    DaysInMonth2.setUTCMilliseconds(0)


    var Ausgabe = DaysInMonth2.getDate();
    console.log("Der angebene Monate hat insgesamt " + Ausgabe + " Tage.")

    // Test1---------------------------------------------------------:
    // var DaysInMonth3 = new Date();
    // DaysInMonth2.setFullYear(Jahr, monat, 1);
    // DaysInMonth2.setHours(00);
    // DaysInMonth2.setMinutes(00);
    // DaysInMonth2.setSeconds(00)
    // DaysInMonth2.setUTCMilliseconds(0)

    // var GesamteMonate = DaysInMonth3.getTime() - DaysInMonth2.getTime();
    // var GesamteTage = GesamteMonate / 1000 / 3600 / 60 / 60;

    // console.log(GesamteTage)
    // Test1---------------------------------------------------------:

}

DaysInMonth(1, 2016);

// DATE - Ubung 5 - CodeFlow Übung lev1_5: Monatsname

var MonatsListe = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

function NameDesMonats(Jahr, Monat, Tag) {
    var MonatsName = new Date();
    MonatsName.setFullYear(Jahr, Monat - 1, Tag);
    MonatsName.setHours(00);
    MonatsName.setMinutes(00);
    MonatsName.setSeconds(00)
    MonatsName.setUTCMilliseconds(00)

    var welcherMonat = MonatsListe[MonatsName.getMonth()];
    console.log("Der Name des eingegeben Monats ist: " + welcherMonat)
}

NameDesMonats(2016, 3, 4);
NameDesMonats(2019, 12, 24);
NameDesMonats(1410, 7, 15);

// DATE - Ubung 6 - CodeFlow Übung lev1_6: AM PM

