const userName = prompt("What is your name?")
const userSurname = prompt("What is your surname?")

const userFullname =
    userName + " " + userSurname
alert("Здравствуйте" + " " + userFullname)
console.log(userFullname)

//-------------------------

const number_1 = prompt("print a number")
const number_2 = prompt("print a number")

let congratsMessage;
if (number_1 > number_2) {
    congratsMessagecongratsMessage = "number_1 > number_2"
}else if (number_1 < number_2){
    congratsMessage = "number_1 < number_2"
}else if (number_1 === number_2){
    congratsMessage = "number_1 = number_2"
}else {
    congratsMessage = "print a number!!!"
}

console.log(congratsMessage)

// ------------------------------
// первый вариант
const svetofor = prompt(" colors = red, yellow, green")

switch (svetofor) {
    case "red":
        console.log("stop!!!");
        break
    case "yellow":
        console.log("wait");
        break
    case "green":
        console.log("go")
        break
    default:
        console.error("print a color")
}

// -------------------------------------

// второй вариант
const svetofor2 = prompt(" colors = red, yellow, green")

function color() {
    if (svetofor2 === "red"){
        alert("stop")
    }else if (svetofor2 === "yellow"){
        alert("wait")
    }else if (svetofor2 === "green"){
        alert("go")
    }else {
        console.error("print a color")
    }
}

color()
