const connectedUsers = {};
const choices = {};
const moves = {
    "rock": "scissor",
    "rock": "human",
    "rock": "sponge",
    "rock": "fire",
    "gun": "fire",
    "gun": "scissor",
    "gun": "human",
    "gun": "rock",
    "water": "rock",
    "water": "fire",
    "water": "scissor",
    "water": "gun",
    "air": "gun",
    "air": "rock",
    "air": "fire",
    "air": "water",
    "paper": "air",
    "paper": "water",
    "paper": "gun",
    "paper": "rock",
    "sponge": "paper",
    "sponge": "air",
    "sponge": "water",
    "sponge": "gun",
    "human": "sponge",
    "human": "paper",
    "human": "air",
    "human": "water",
    "scissor": "human",
    "scissor": "sponge",
    "scissor": "paper",
    "scissor": "air",
    "fire": "scissor",
    "fire": "human",
    "fire": "sponge",
    "fire": "paper"

};

const initializeChoices = (roomId) => {
    choices[roomId] = ["", ""]
}

const userConnected = (userId) => {
    connectedUsers[userId]
}

const makeMove = (roomId, player, choice) => {
    if(choices[roomId]){
        choices[roomId][player - 1] = choice;
    }
}

module.exports = {connectedUsers, initializeChoices, userConnected, makeMove, moves, choices};