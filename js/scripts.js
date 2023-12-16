
const numberMemory = [];

for (let i = 0; i < 5; i++){

    let trueNumber = randomNumber(1, 50);


    let foundInArray = numberMemory.includes(trueNumber); 

    while(foundInArray == true){

        trueNumber = randomNumber(1, 50);
        foundInArray = numberMemory.includes(trueNumber); 

    }

    numberMemory.push(trueNumber); 
    console.log(numberMemory)
    
}

setTimeout(() => {
    document.getElementById('number-memory').innerHTML = numberMemory;  
}, 1000);

setTimeout(() => {
    document.getElementById('number-memory').innerHTML = '';  
}, 30000);

const numberUser = [];
const numberVerified = [];

setTimeout(() => {
    for(let j = 0; j < 5; j++){
        const userNumber = parseInt(prompt('Inserisci il numero'))
        numberUser.push(userNumber);
        

        if(numberMemory.includes(userNumber)){
            numberVerified.push(userNumber);
            document.getElementById('result').innerHTML = 'Hai indovinato i numeri '+ numberVerified;

        }
        
        console.log(numberVerified);

    }
}, 32000);









//----- FUNCTIONS ----------------------------------------------

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }