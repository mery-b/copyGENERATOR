var description = ["Dobre", "Dobry", "Dobra", "Pamiętne", "Pamiętny", "Pamiętna", "Miłe", "Miły", "Miła", "Jedyne takie", "Jedyna taka", "Wielki", "Wielka", "Wielkie", "Nadzwyczajny", "Nadzwyczajne", "Nadzwyczajna", "Niezrównany", "Niezrównana", "Niezwykły", "Niezwykła", "Niezwykłe", "Niebywały", "Niebywała", "Niebywałe", "Nieprawdopodobny", "Nieprawdopodobna", "Nieprawdopodobne", "Nieziemski", "Nieziemska", "Nieziemskie", "Zjawiskowy", "Zjawiskowe", "Zjawiskowa", "Przyjazny", "Przyjazna", "Przyjazne", "Prawy", "Prawa", "Prawe", "Łagodny", "Łagodna", "Łagodne", "Anielski", "Anielska", "Anielskie", "Odpowiedni", "Odpowiednia", "Odpowiednie", "Właściwy", "Właściwe", "Właściwa", "Porządne", "Porządny", "Porządna", "Niezgorszy", "Niezgorsza", "Niezgorsze", "Niczego sobie", "Radosny", "Radosne", "Radosna", "Szczęśliwy", "Szczęśliwa", "Szczęśliwe", "Wesoły", "Wesołe", "Wesoła", "Prawdziwe", "Prawdziwy", "Prawdziwa", "Solidny", "Solidna", "Solidne", "Pyszny", "Pyszna", "Pyszne", "Idealny", "Idealna", "Idealne", "Najlepszy", "Najlepsza", "Najlepsze", "Wymarzony", "Wymarzona", "Wymarzone", "Wybitny", "Wybitna", "Wybitne", "Kapitalny", "Kapitalne", "Kapitalna", "Boski", "Boskie", "Boska", "Pierwszorzędny", "Pierwszorzędna", "Pierwszorzędne", "Piękny", "Piękne", "Piękna", "Mistrzowski", "Mistrzowska", "Mistrzowskie", "Pierwszy", "Pierwsza", "Pierwsze", "Wyczekany", "Wyczekana", "Wyczekane", "Polski", "Polskie", "Polska", "Tradycyjny", "Tradycyjna", "Tradycyjne", "Domowy", "Domowe", "Domowa", "Nowoczesny", "Nowoczesna", "Nowoczesne", "Ciekawy", "Ciekawe", "Ciekawa", "Mądry", "Mądra", "Mądre", "Zwycięski", "Zwycięska", "Zwycięskie", "Doskonały", "Doskonała", "Doskonałe", "Odważna", "Odważny", "Odważne", "Rodzinny", "Rodzinna", "Rodzinne", "Wasza", "Wasze", "Nasze", "Atrakcyjny", "Atrakcyjna", "Atrakcyjne", "Cenny", "Cenna", "Cenne", "Słuszny", "Słuszne", "Słuszna", "Obłędny", "Obłędne", "Obłędna", "Specjalny", "Specjalna", "Specjalne", "Magiczny", "Magiczna", "Magiczne", "Praktyczny", "Praktyczna", "Praktyczne", "Niezawodny", "Niezawodna", "Niezawodne"];

var objectPlural = ["chwile", "momenty", "wspomnienia", "smaki", "radosci", "uczucia", "efekty", "rozwiązania", "rozwiązanie", "punkty", "myśli", "wyniki", "wrażenie", "chwile", "momenty", "wspomnienia", "pragnienie", "miejsce", "miejsca", "piękno", "odkrycie", "spojrzenie"];
var objectMasc = ["człowiek", "sposób", "świat", "ruch", "czas", "stan", "kształt", "efekt", "system", "punkt", "program", "wygląd", "styl", "wygląd i styl", "design", "spokój", "kolor", "projekt", "ruch"];
var objectFem = ["dusza", "wartość", "wyspa", "siła", "moc", "wolność", "gwiazda", "klasa", "myśl", "funkcjonalność", "funkcjonalność i klasa", "klasa i design", "akcja", "przyszłość", "piękność", "równowaga", "jazda", "kraina", "okazja"];

var endings = [".", "!", "!!!", ". Na zawsze!", ". I masz to.", " dla Ciebie.", "...", ". Bo zasługujesz...", ];


function generateCopy() {
   
  var randomDescription = description[Math.floor(Math.random()*description.length)];
  
  var randomObjectPlural = objectPlural[Math.floor(Math.random()*objectPlural.length)];
  var randomObjectFem = objectFem[Math.floor(Math.random()*objectFem.length)];
  var randomObjectMasc = objectMasc[Math.floor(Math.random()*objectMasc.length)];
  
  var randomEndings = endings[Math.floor(Math.random()*endings.length)];
  
  if (randomDescription.charAt(randomDescription.length-1) == "e") {
    document.getElementById("copy").innerHTML = randomDescription + " " + randomObjectPlural + randomEndings;  
  }
  else if (randomDescription.charAt(randomDescription.length-1) == "y") {
    document.getElementById("copy").innerHTML = randomDescription + " " + randomObjectMasc + randomEndings;  
  }
 else {
   document.getElementById("copy").innerHTML = randomDescription + " " + randomObjectFem + randomEndings; 
 }
     
  
}

generateCopy()



