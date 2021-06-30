let input = require("prompt");
/* Rover qui doit se déplacer dans array Grid */
let rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: []
};

/* Array dans lequel le rover est sensé se déplacer */
let grid = [
    [rover.direction,"","","","","","","","",""],
    ["","","","","","","","","",""],
    ["","","","","","","","","",""],
    ["","","","","","","","","",""],
    ["","","","","","","","","",""],
    ["","","","","","","","","",""],
    ["","","","","","","","","",""],
    ["","","","","","","","","",""],
    ["","","","","","","","","",""],
    ["","","","","","","","","",""]
];

/* Fonction pour faire tourner le Rover à gauche (Inverse du sens de l'aiguille d'une montre) */
function turnLeft(rover) {
    switch (rover.direction) {
        case "N" :
            rover.direction = "W";
            console.log(rover.direction);
        break;
        case "W" :
            rover.direction = "S";
            console.log(rover.direction);
        break;
        case "S" :
            rover.direction = "E";
            console.log(rover.direction);
        break;
        case "E" :
            rover.direction = "N";
            console.log(rover.direction);
        break;
        default: "Erreur d'input"
    }
}

/* Fonction pour faire tourner le Rover à droite (dans le sens d'une aiguille d'une montre) */
function turnRight(rover) {
    switch (rover.direction) {
        case "N" :
            rover.direction = "E";
            console.log(rover.direction);
        break;
        case "E" :
            rover.direction = "S";
            console.log(rover.direction);
        break;
        case "S" :
            rover.direction = "W";
            console.log(rover.direction);
        break;
        case "W" :
            rover.direction = "N";
            console.log(rover.direction);
        break;
        default: "Erreur d'input"
    }
}

/* Fonction pour faire avancer le Rover d'une case */
function moveForward(rover) {
    console.log(rover);
    switch (rover.direction) {
        case "N" :
            rover.travelLog.push([rover.y, rover.x]); /* Inscrit dans le log la position du Rover sur le grid */
            rover.y -= 1; /* Fait changer d'array */
            grid[rover.y].splice([rover.x], 0, rover.direction);
            grid[rover.y].pop(); /* Supprime la derniere case de l'array rajoutée par le .splice */
            console.log(rover.y);
        break;
        case "W" :
            rover.travelLog.push([rover.y, rover.x]);  /* Inscrit dans le log la position du Rover sur le grid */
            rover.x -= 1; /* Fait changer la position d'un array */
            grid[rover.y].splice([rover.x], 0, rover.direction);
            grid[rover.y].pop(); /* Supprime la derniere case de l'array rajoutée par le .splice */
            console.log(rover.x);
        break;
        case "S" :
            rover.travelLog.push([rover.y, rover.x]);  /* Inscrit dans le log la position du Rover sur le grid */
            rover.y += 1; /* Fait changer d'array */
            grid[rover.y].splice([rover.x], 0, rover.direction);
            grid[rover.y].pop(); /* Supprime la derniere case de l'array rajoutée par le .splice */
            console.log(rover.y);
        break;
        case "E" :
            rover.travelLog.push([rover.y, rover.x]);  /* Inscrit dans le log la position du Rover sur le grid */
            rover.x += 1; /* Fait changer la position d'un array */
            grid[rover.y].splice([rover.x], 0, rover.direction);
            grid[rover.y].pop(); /* Supprime la derniere case de l'array rajoutée par le .splice */
            console.log(rover.x);
        break;
        default: "Erreur";
    }
}

/* Fonction pour que l'utilisateur intéragisse avec le Rover sur la grid */
function pilotRover(string) {
    switch (string) {
        case "L" : turnLeft(rover);
        console.table(grid);
        console.log(rover.travelLog);
        break;
        case "R" : turnRight(rover);
        console.table(grid);
        console.log(rover.travelLog);
        break;
        case "F" : moveForward(rover);
        console.table(grid);
        console.log(rover.travelLog);
        break;
        default : "Input invalide";
    }
}

input.start();

function userCommand() {
    input.get({name: "input", description: "Entrez la commande que vous voulez executer" }, function(err,res) {
        if (res.input !== "exit") {
        pilotRover(res.input.toUpperCase());
        userCommand();
        }
    })
}

/* Execution */ 

userCommand();