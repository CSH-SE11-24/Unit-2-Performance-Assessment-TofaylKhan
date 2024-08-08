const prompt = require('prompt-sync')()


let wake = prompt("School starts at 8:50 should i wake up at 7:30Am or 8:20Am and risk being late?")

wake = parseInt(wake)

function attendL() {
if (820 === wake ){
  console.log("You'll be late to school")
}

if (730 === wake ){
  console.log("You'll be on time for school")
}

if (730 === wake ){
  console.log("u arrived at school")
}
}

let lateS = attendLgh
 let classes = {
   P1: "Computer science",
   p2: "Enviormental science",
   p3: "English",
   p4:"Global",
   p5: "lunch"
 }
let p1 = prompt("You have Computer science first period would u like to go on time (1) or be late and have a checkin for being late afterschool (2)")

let late = prompt("If you arrrive to school after 8:47 your late, Are you late?").toLowerCase

if (late === "yes"){
  }


console.log("Your next class is " + classes.p2 ) 


let p2 = prompt("You have Enviormental science next would u like to go on time (1) or be late again and have a checkin for being late afterschool (2)")

if (late === "no"){
console.log("You are on time go and have a seat")

console.log("Your next class is " + classes.p3 )

 console.log("Your next class is " + classes.p4 )
}

   // console.log("Your next class is " + classes.p5 ) 
console.log("You've been talking a lot in class, Go check in")

let reminder = prompt("Did you check in?")
reminder = reminder.toLowerCase()

if(reminder === "no"){
  for (let r = 1; r <= 3; r++ ){
console.log("Go check-in!")
}
}
