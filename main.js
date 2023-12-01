/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/
/*ESERCIZIO 1*****

// Creare una variabile dove chiediamo all'utente di inserire una parola

const word = prompt('Scrivi una parola');

//Dichiaro la variabile
analizeWord(word)


//Creare una funzione che compara la parola inserita con il suo contrario e verifica se sono uguali

function analizeWord (word) {
    let split_word = word.split('');
    console.log(split_word);
    let split_word_1 = split_word.reverse()
    console.log( split_word_1);
    let reverse_word = split_word_1.join('')
    console.log(reverse_word);
    if (word === reverse_word){
        return console.log("E' palindroma");
    } else {
        return console.log("Non è palindroma");
    }


      
}
*****************************************************************/


/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


/*****Esercizio 2  
//Creo una costante con un prompt che chiede di scegliere pari o dispari

const user_choice = prompt ('Scrivi uno tra pari o dispari');
 if (user_choice === 'pari'){
    console.log('Hai scelto pari');
    let computer_choice_1 = ('dispari')
    console.log('Il computer è ' + computer_choice_1)
 } else {
    console.log('Hai scelto dispari')
    let computer_choice_2 = ('pari')
    console.log('Il computer è ' + computer_choice_2)
 }
 

//Creo una costante con un prompt che chiede di scegliere un numero da 1 a 5

const user_number = Number(prompt('Scegli un numero tra 1 e 5'));
console.log(user_number);

//Genero un numero random tra 1 e 5 per il computer

const computer_number = Number(Math.floor((Math.random() * 5) + 1));
console.log(computer_number);

//Creo una costante che somma i due numeri generati

const sum = (user_number + computer_number);
console.log(sum);

//Invoco la funzione

playTheGame(sum);

function playTheGame(sum) {
    if (sum % 2 == 0){

        return 'pari'
    } 
    
    return 'dispari'
    
        
}

if (playTheGame(sum) === user_choice){

    console.log('Hai vinto');
}

console.log('Hai perso');

