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
            grid[rover.y].splice([rover.x], 1, rover.direction)
            console.log(rover.direction);
        break;
        case "W" :
            rover.direction = "S";
            grid[rover.y].splice([rover.x], 1, rover.direction)
            console.log(rover.direction);
        break;
        case "S" :
            rover.direction = "E";
            grid[rover.y].splice([rover.x], 1, rover.direction)
            console.log(rover.direction);
        break;
        case "E" :
            rover.direction = "N";
            grid[rover.y].splice([rover.x], 1, rover.direction)
            console.log(rover.direction);
        break;
        default: console.log("Erreur d'input");
    }
}

/* Fonction pour faire tourner le Rover à droite (dans le sens d'une aiguille d'une montre) */
function turnRight(rover) {
    switch (rover.direction) {
        case "N" :
            rover.direction = "E";
            grid[rover.y].splice([rover.x], 1, rover.direction)
            console.log(rover.direction);
        break;
        case "E" :
            rover.direction = "S";
            grid[rover.y].splice([rover.x], 1, rover.direction)
            console.log(rover.direction);
        break;
        case "S" :
            rover.direction = "W";
            grid[rover.y].splice([rover.x], 1, rover.direction)
            console.log(rover.direction);
        break;
        case "W" :
            rover.direction = "N";
            grid[rover.y].splice([rover.x], 1, rover.direction)
            console.log(rover.direction);
        break;
        default: console/log("Erreur d'input");
    }
}

/* Fonction pour faire avancer le Rover d'une case */
function moveForward(rover) {
    switch (rover.direction) {
        case "N" :
            rover.travelLog.push([rover.y, rover.x]); /* Inscrit dans le log la position du Rover sur le grid */
            if (rover.y >= 1) { /* Condition pour empecher la variable de sortir de l'array */
            rover.y -= 1; /* Fait changer d'array dans grid */
            grid[rover.y].splice([rover.x], 0, rover.direction); /* Nouvelle position Rover sur le grid */
            grid[rover.y + 1].splice([rover.x], 1, ""); /* Supprime l'ancienne valeur */
            grid[rover.y].pop(); /* Supprime la derniere case de l'array rajoutée par le .splice */
            } else {
                return;
            }
        break;
        case "W" :
            rover.travelLog.push([rover.y, rover.x]);  /* Inscrit dans le log la position du Rover sur le grid */
            if (rover.x >= 1) { /* Condition pour empecher la variable de sortir de l'array */
            grid[rover.y].splice([rover.x], 1, ""); /* Supprime l'ancienne valeur */
            rover.x -= 1; /* Fait changer la position dans array */
            grid[rover.y].splice([rover.x], 0, rover.direction); /* Nouvelle position Rover sur le grid */
            grid[rover.y].pop(); /* Supprime la derniere case de l'array rajoutée par le .splice */
            } else {
                return;
            }
        break;
        case "S" :
            rover.travelLog.push([rover.y, rover.x]);  /* Inscrit dans le log la position du Rover sur le grid */
            if (rover.y < 9) { /* Condition pour empecher la variable de sortir de l'array */
            rover.y += 1; /* Fait changer d'array dans grid */
            grid[rover.y].splice([rover.x], 0, rover.direction); /* Nouvelle position Rover sur le grid */
            grid[rover.y - 1].splice([rover.x], 1, ""); /* Supprime l'ancienne valeur */
            grid[rover.y].pop(); /* Supprime la derniere case de l'array rajoutée par le .splice */
            } else {
                return;
            }
        break;
        case "E" :
            rover.travelLog.push([rover.y, rover.x]);  /* Inscrit dans le log la position du Rover sur le grid */
            if (rover.x < 9) { /* Condition pour empecher la variable de sortir de l'array */
            rover.x += 1; /* Fait changer la position dans un array */
            grid[rover.y].splice([rover.x], 0, rover.direction); /* Nouvelle position Rover sur le grid */
            grid[rover.y].splice([rover.x - 1], 1, ""); /* Supprime l'ancienne valeur */
            grid[rover.y].pop(); /* Supprime la derniere case de l'array rajoutée par le .splice */
            } else {
                return;
            }
        break;
        default: console.log("Erreur");
    }
}

/* Fonction pour faire avancer le Rover */
function moveBackward(rover) {
    switch (rover.direction) {
        case "N" :
            rover.travelLog.push([rover.y, rover.x]); /* Inscrit dans le log la position du Rover sur le grid */
            if (rover.y < 9) { /* Condition pour empecher la variable de sortir de l'array */
            rover.y += 1; /* Fait changer d'array dans grid */
            grid[rover.y ].splice([rover.x], 0, rover.direction); /* Nouvelle position Rover sur le grid */
            grid[rover.y - 1].splice([rover.x], 1, ""); /* Supprime l'ancienne valeur */
            grid[rover.y].pop(); /* Supprime la derniere case de l'array rajoutée par le .splice */
            } else {
                return;
            }
        break;
        case "W" :
            rover.travelLog.push([rover.y, rover.x]);  /* Inscrit dans le log la position du Rover sur le grid */
            if (rover.x < 9) { /* Condition pour empecher la variable de sortir de l'array */
            grid[rover.y].splice([rover.x], 1, ""); /* Supprime l'ancienne valeur */
            rover.x += 1; /* Fait changer la position dans array */
            grid[rover.y].splice([rover.x], 0, rover.direction); /* Nouvelle position Rover sur le grid */
            grid[rover.y].pop(); /* Supprime la derniere case de l'array rajoutée par le .splice */
            } else {
                return;
            }
        break;
        case "S" :
            rover.travelLog.push([rover.y, rover.x]);  /* Inscrit dans le log la position du Rover sur le grid */
            if (rover.y >= 1) { /* Condition pour empecher la variable de sortir de l'array */
            rover.y -= 1; /* Fait changer d'array dans grid */
            grid[rover.y].splice([rover.x], 0, rover.direction); /* Nouvelle position Rover sur le grid */
            grid[rover.y + 1].splice([rover.x], 1, ""); /* Supprime l'ancienne valeur */
            grid[rover.y].pop(); /* Supprime la derniere case de l'array rajoutée par le .splice */
            } else {
                return;
            }
        break;
        case "E" :
            rover.travelLog.push([rover.y, rover.x]);  /* Inscrit dans le log la position du Rover sur le grid */
            if (rover.x >= 1) { /* Condition pour empecher la variable de sortir de l'array */
            grid[rover.y].splice([rover.x], 1, ""); /* Supprime l'ancienne valeur */
            rover.x -= 1; /* Fait changer la position dans un array */
            grid[rover.y].splice([rover.x], 0, rover.direction); /* Nouvelle position Rover sur le grid */
            grid[rover.y].pop(); /* Supprime la derniere case de l'array rajoutée par le .splice */
            } else {
                return;
            }
        break;
        default: console.log("Erreur");
    }
}

/* Fonction pour que l'utilisateur intéragisse avec le Rover sur la grid */
function pilotRover(string) {
    switch (string) {
        case "L" :
            turnLeft(rover);
            console.table(grid);
        break;
        case "R" :
            turnRight(rover);
            console.table(grid);
        break;
        case "F" :
            moveForward(rover);
            console.table(grid);
        break;
        case "B" :
            moveBackward(rover);
            console.table(grid);
            break;
        default : console.log("Input invalide");
    }
}

input.start();

function userCommand() {
    input.get({name: "input", description: "Entrez la commande que vous voulez executer" }, function(err,res) {
        if (res.input !== "exit") {
        pilotRover(res.input.toUpperCase());
        userCommand();
        }
        /* Entrez "exit" dans le prompt pour quitter */
    })
}

/* Execution */ 

userCommand();