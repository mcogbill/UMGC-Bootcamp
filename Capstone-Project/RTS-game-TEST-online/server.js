const express = require("express");
const path = require("path");

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.use(express.static(path.join(__dirname + "/public")));

let waitingPlayer = null;
let gameSession = {}

io.on("connection", function (socket) {
    socket.on("newuser", function (username) {
        socket.broadcast.emit("update", username + " joined the session");
    });
    socket.on("exituser", function (username) {
        socket.broadcast.emit("update", username + " left the session");
    });
    socket.on("chat", function (message) {
        socket.broadcast.emit("chat", message);
    });
    socket.on("playLocal", () => {
        io.emit('gameLocalStart');
    });
    socket.on("playOnline", function (username) {
        // Handle matchmaking
        if (!waitingPlayer) {
            waitingPlayer = username;
            socket.broadcast.emit("update", username + " started a game, and is waiting for opponent. Click 'Play Online' to join game session.");
        } else {
            // Start the game
            const player1 = waitingPlayer;
            const player2 = username;

            socket.broadcast.emit("update", "Game session started: " + player1 + " vs. " + player2);

            // Reset waitingPlayer
            waitingPlayer = null;

            // Emit event to start the game
            io.emit("gameOnlineStart");
        }
    });
});

server.listen(5000);