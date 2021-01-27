//raceday

let raceNumber = Math.floor(Math.random() * 100)

let registeredEarly = true
let runnersAge = 18

if (runnersAge > 18 && registeredEarly === true) {
  raceNumber += 1000
}

if (runnersAge > 18 && registeredEarly === true) {
  console.log(`Race will start at 9:30am, your race numnber is ${raceNumber}`)
} else if (runnersAge > 18 && registeredEarly === false) {
  console.log(`Race will start at 11:00am, your race number is ${raceNumber}`)
} else if (runnersAge < 18 && registeredEarly === true) {
  console.log(`Race will start at 12:30pm, your race number is ${raceNumber}`)
} else if (runnersAge < 18 && registerdEarly === false) {
  console.log(`Race will start at 1:30pm, your race number is ${raceNumber}`)
} else {
  console.log('Please see the registration desk')
}

console.log(raceNumber)
