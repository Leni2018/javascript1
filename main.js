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

// Bestzeit wird dann noch zur oberen Liste hinzugefügt
benutzer.bestzeit = 200;
console.log(benutzer);
// eckige Klammer ermöglicht Zugriff auf Daten
benutzer ["bestzeit ever"] = 100;
console.log(benutzer);

// Benutzer Eingabe > Öffnet auf Website Fenster mit Eingabemöglichkeit;
// Zeilenkommentar umschalten: über Bearbeiten (macht bereits geschriebenes zu Kommentar)
// let alter = prompt("Wie alt bist du?");
// console.log("Du bist ", alter, "Jahre alt");
// console.log("Über 18?", age > 18);

// // if- Abfrage> Funktion/Bedingung> liefert Antwort auf vorherige Eingabefrage (s.o.); mehrer Funktionen innerhalb if möglich (else)
// if (alter > 18) {
//     console.log("Du darfst hinein...");
// } else {
//     console.log("noch nicht 18...");
// }
// schleife: i wird hier erst al 0, definiert, dann alles kleiner Zehn, dann wird i + 1 gemacht (++ ist verkürzte Schreibweise)

//"For-Schleife"
// an <= denken
for (let i=0; i<=10; i++)
    console.log("Wert von i:", i);


