//console.log("Hi");
// console.log("Hello");

// let name = true;

// console.log(typeof name);

// class Customer{
//     name;
//     age;
//     address;

//     Customer(){

//     }

//     constructor(name,age,address){
//         this.name=name;
//         this.age=age;
//         this.address=address;
//     }

//     setName(name) {
//         this.name=name;
//     }
//     getName(){
//         return this.name;
//     }

// }

// let customer01 = new Customer("saman",12,"gamapaha");

// console.log(customer01.getName());



let randomNumber = Math.floor((Math.random()*10)+1);
console.log(randomNumber);

document.getElementById('btn').addEventListener('click',function () {
    let guessNum = parseInt(document.getElementById('num').value);
    let guessOut = document.getElementById('outPut');

    if (guessNum == randomNumber) {
        guessOut.textContent = "Congratulations Your Answer is Correct , You win...!";
        guessOut.style.color = 'green';
    }else if(guessNum <= randomNumber){ 
        guessOut.textContent = "Your Number is Lower than Correct Answer , Please Try Again...!";
        guessOut.style.color = 'red';
    }else { 
        guessOut.textContent = " Your Number is Higher than Correct Answer , Please Try Again...!";
        guessOut.style.color = 'red';
    }
    
} );



