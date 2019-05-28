let game;
let gameOptions = {

    wallDuration: 100,

    ballStartSpeed: 500,

    ballSpeedIncrease: 20
}

window.onload = function() {
    let gameConfig = {
        width: 480,
        height: 640,
        scene: playGame,
        backgroundColor: 0x222222,
        physics: {
            default: "arcade"
        }
    }
    game 
}