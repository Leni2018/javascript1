//alert("Hello world");

//let leitet Variablen ein > Name einer Variablen kann keine Leerzeichen & - enthalten, darf nicht mit Zahl anfangen; Wenn Variable Zahlen sind, geht’s auch ohne „“ 
let nachricht = "Hallo Welt";
//alert(nachricht);
nachricht = "neuer text";
//alert (nachricht);
console.log (nachricht)
const linkColor = "#ff0000";
let eine_variable = "pips";
console.log("Variable: eine_variable: " , eine_variable);

//numerische Datentypen:
let highScore = 75.9944;
console.log("Highscore ist: ", highScore / 20);

//Datentypen Zeichenkette
let meineNachricht = "test1";
console.log(meineNachricht);
meineNachricht = "text2";
console.log(meineNachricht);

//für Zeilenumbrüche ``, oder, um innerhalb der `` "" zu schreiben (s.u.)
meineNachricht = `Ein mehr
und ein ganz langer 
text
als zeichnketten
jipiii`;

let fullName = `Jonny "best dude ever" Lebowsky`;
console.log(fullName)

let isOver18 = true;
console.log("über18?", isOver18)
let age=19;
console.log("age über 18", age > 18);

//Datentyp Zahlenliste. ! Einzelnen Elemente der Liste mit , trennen!
// namensListe [1] bezeihnet immer das 2. Element > das 1. ist 0
let zahlenListe = [2, 11, 24, 33];
console.log(zahlenListe);
let namensListe = ["Jane", "John"];
console.log(namensListe[1]); 

// zeigt Lände der Liste an
console.log("Anzahl der Namen: ", namensListe.length);

// Datentyp Objekt ! , zwischen den einzelnen Elementen. In der Konsole können diese Infos aufgeklappt werden
let benutzer = {
    vorname: "Jane",
    nachname: "Doe",
    alter: 28
};
console.log("Benutzer Alter: ", benutzer.alter);

// Bestzeit wird dann noch hinzugefügt
benutzer.bestzeit = 200;
console.log(benutzer);
benutzer ["bestzeit ever"] = 100;
console.log(benutzer);


