const prompt = require('prompt-sync')();

console.log("Simpel driving test");

let age = prompt("Enter your age:- ");
age = Number.parseInt();
console.log(typeof age);

if(age<0){
    console.log("Age is invalid enter the age again");
}
else if(age>0 && age<9){
    console.log("You are a kid you can't even think of driving");

}

else if(age>9 && age<18){
    console.log("You are a kid you can think of driving after 18");
}
else{
    console.log("You are eligable to drive");
}

console.log("Done")

console.log("You  ",(age<18? " Drive": "Cannot Drive"));