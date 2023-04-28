alert("This is the snake water and gun game created by Harshil Jain")
let choices = ["snake", "water", "gun"];
let computerChoice = choices[Math.floor(Math.random() * choices.length)];
// console.log("Computer choice:", computerChoice);




function func() {
    u_score = 0
    c_score = 0
    while (true) {

        user = prompt("What you want to choose(snake/water/gun)")
        console.log(`I choose ${computerChoice} `)

        if (user == computerChoice) {
            console.log("Draw Happened")
        }
        else if (user == "snake" && computerChoice == "water" || user == "water" && computerChoice == "gun" || user == "gun" && computerChoice == "snake") {
            console.log("Congratulations you got a point")
            u_score = u_score + 1
            func()
            if (u_score == 5) {
                console.log("Congratulations you won")
                break
            }

        }
        else {
            console.log("Wohoo I got a point")
            c_score = c_score + 1
            func()
            if (c_score == 5) {
                console.log("Wohoo I won ")
                break
            }
        }
        console.log("ok")


    }
}
func()