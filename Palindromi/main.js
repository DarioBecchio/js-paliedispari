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