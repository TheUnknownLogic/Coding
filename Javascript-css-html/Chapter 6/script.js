// Question - 1

let age = prompt("Enter your age")
age = Number.parseInt(age)


if (age<18) {
    alert(`You cannot drive as you are ${age} year old`)
}

else {
    alert(`"You can drive as you are ${age} year old`)
}

// Question 2 and Question 3
alert("You are given another chance")

let age2 = confirm("What is your age")
age2 = Number.parseInt(age2)

if (age2<18) {
    alert(`You cannot drive as you are ${age2} year old`)
}
else if (age2<0) {
    console.error(`You entered ${age2} and age cannot be negative`)
}

else if (age2>18) {
    alert(`You can drive as you are ${age2} year old`)
}


let age3 = confirm("What is your age")
age3 = Number.parseInt(age3)

if (age3>4) {
    window.location.href = "https://google.com"

}
else {
    alert("ok")
}



