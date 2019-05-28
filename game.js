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
    game = new Phaser.Game(gameConfig);
    window.focus()
    resize();
    window.addEventListener("resize", resize, false);
}

class playGame extends Phaser.Scene{
    constructor(){
        super("PlayGame");
    }
    preload(){
        this.load.image("ball", "ball.png");
        this.load.image("wall", "wall.png");
    }
    create(){
        this.gameOver = false;
        this.canActivateWall = true;
        this.ballSpeed = gameOptions.ballStartSpeed;
        this.wallGroup = this.physics.add.group();
        this.theBall = this.physics.add.image(game.config.wdith / 2, game.config.height * 4 / 5, "ball");
        this.theBall.body.setCircle(25)
        this.theBall.setBounce(1)
        this.createWall(32, game.config.height / 2, 32, game.config.height - 96);
        this.createWall(game.config.width - 32, game.config.height / 2, )
    }
    createWall(posX, posY, width, height){
        let wall = this.physics.add.image(posX, posY, "wall");
        wall.displayWidth = width;
        wall.displayHeight = height;
        this.wallGroup.add(wall);
        wall.setImmovable();
        return wall;
    }
    
}