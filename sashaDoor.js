let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

let sashaDoorPath = 'https://uploads-ssl.webflow.com/5f8690e28f533367742dfc18/64f17e1d73fc956b92b004a8_Untitled%20design%20(23).svg';
let buttDoorPath1 = 'https://uploads-ssl.webflow.com/5f8690e28f533367742dfc18/64f17e1d617569224a14d8e7_Untitled%20design%20(22).svg';
let buttDoorPath2 = 'https://uploads-ssl.webflow.com/5f8690e28f533367742dfc18/64f17e1d617569224a14d8e7_Untitled%20design%20(22).svg';
let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

let startButton = document.getElementById('start');

function isClicked(door) {
    if (door.src === closedDoorPath) {
        return true
    } else return false;
}

function isSasha(door) {
    if (door.src === sashaDoorPath) {
        return true;
    } else return false;
}

function gameOver(status) {
    if (status === 'win') {
        startButton.innerHTML = `Yum! Let's go for a walk`;
    } else if 
        (status === 'not yet') {
            startButton.innerHTML = `Wrong door! She's facing the wrong way`;
    } else startButton.innerHTML = `Wrong door, Sasha's barking! Try again?`;
    currentlyPlaying = false; 
}

function playDoor(door) {
    numClosedDoors -= 1;

    if (isSasha(door) === true) {
        gameOver('win')
    } else if (isSasha(door) === false && numClosedDoors === 2) {
        gameOver('not yet');
    }
    else {
        gameOver()
    };
}

function randomSashaDoorGenerator() {
    let sashaDoor = Math.floor(Math.random() * numClosedDoors);
    if (sashaDoor === 0) {
        openDoor1 = sashaDoorPath;
        openDoor2 = buttDoorPath1;
        openDoor3 = buttDoorPath2;
    } else if (sashaDoor === 1) {
        openDoor1 = buttDoorPath1;
        openDoor2 = sashaDoorPath;
        openDoor3 = buttDoorPath2;
    } else {
        openDoor1 = buttDoorPath1;
        openDoor2 = buttDoorPath2;
        openDoor3 = sashaDoorPath;
    }
}

doorImage1.onclick = () => {
    if (currentlyPlaying && isClicked(doorImage1)) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
}

doorImage2.onclick = () => {
    if (currentlyPlaying && isClicked(doorImage2)) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
}

doorImage3.onclick = () => {
    if (currentlyPlaying && isClicked(doorImage3)) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
}

startButton.onclick = () => {
    if (currentlyPlaying === false) {
        startRound();
    }
}

const startRound = () => {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3;
    currentlyPlaying = true;
    startButton.innerHTML = 'Woof woof!';
    randomSashaDoorGenerator();
}

startRound();

