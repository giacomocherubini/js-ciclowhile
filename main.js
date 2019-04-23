var cognome = ['cherubini', 'rossi', 'verdi'];
var richiesta_cognome = prompt('inserisci il tuo cognome');
cognome.push(richiesta_cognome);
cognome.sort();

var i=0;
while (i<cognome.length){
  if (richiesta_cognome == cognome[i]){
    console.log(i);
  }
  i++;
}
