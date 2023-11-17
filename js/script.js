/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km(0.21 € al km)
va applicato uno sconto del 20 % per i minorenni
va applicato uno sconto del 40 % per gli over 65.
*/

// definizione variabili 

const kilometers = parseInt(prompt('Quanti chilometri desidere percorrere oggi?'));
const age = parseInt(prompt('Quanti anni hai?'));

const ticketPrice = kilometers * 0.21;
document.getElementById('ticket_prc').innerHTML = `Totale CHF${parseFloat(ticketPrice).toFixed(2)}`;

let scontoUnder18 = parseFloat();

let scontoSenior = parseFloat();

let total = parseFloat().toFixed(4);

//calcolo sconto

//condizionale 
if(age > 65) {
    //sconto per i senior 40%
    scontoSenior = ((ticketPrice * 40) / 100);
    //totale
    total = parseFloat(ticketPrice).toFixed(2) - parseFloat(scontoSenior).toFixed(2);
    console.log('sconto Senior = ' + parseFloat(scontoSenior).toFixed(2));
    //print sul paragrafo ticket_total
    document.getElementById("discount").innerHTML = `Sconto Senior applicato: CHF${parseFloat(scontoSenior).toFixed(2)}`;
    document.getElementById("ticket_total").innerHTML = `Totale con sconto applicato: CHF${parseFloat(total).toFixed(2)}`;

} else if (age < 18){

    //sconto per i minorenni 20%
    scontoUnder18 = ((ticketPrice * 20) / 100);
    //totale
    total = parseFloat(ticketPrice).toFixed(2) - parseFloat(scontoUnder18).toFixed(2);
    console.log('sconto Junior = ' + parseFloat(scontoUnder18).toFixed(2));
    // print sul paragrafo ticket_total
    document.getElementById("discount").innerHTML = `Sconto under 18 applicato: CHF${parseFloat(scontoUnder18).toFixed(2)}`;
    document.getElementById("ticket_total").innerHTML = `Totale con sconto applicato: CHF${parseFloat(total).toFixed(2)}`;

} else {
    
    total = ticketPrice;
    document.getElementById("discount").innerHTML = `Maggiorenne tarriffa intera`;
    document.getElementById("ticket_total").innerHTML = "Totale : CHF" + parseFloat(total).toFixed(2);
}

//debug
console.log(kilometers);
console.log(age);
console.log(total);