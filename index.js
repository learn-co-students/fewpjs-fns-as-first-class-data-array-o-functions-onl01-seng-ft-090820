function wakeDog(dogName, dogBreed) {
    let x = `Wake ${dogName} the ${dogBreed}`;
    console.log(x)
    return x
}

function leashDog(dogName, dogBreed) {
    let x = `Leash ${dogName} the ${dogBreed}`;
    console.log(x)
    return x
}

function walkToPark(dogName, dogBreed) {
    let x = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(x)
    return x
}

function throwFrisbee(dogName, dogBreed) {
    let x = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(x)
    return x
}

function walkHome(dogName, dogBreed) {
    let x = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(x)
    return x
}

function unleashDog(dogName, dogBreed) {
    let x = `Unleash ${dogName} the ${dogBreed}`;
    console.log(x)
    return x
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]


function exerciseDog(dogName, dogBreed) {
    return routine.map(full => full(dogName, dogBreed))
}