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
    activateWall(){
        if(this.theBall.body.speed == 0){
            let ballVelocity = this.physics.velocityFromAngle(Phaser.Math.Between(220, 320), this.ballSpeed)
            this.theBall.setVelocity(ballVelocity.x, ballVelocity.y);
            this.lowerWall.alpha = 0.1;
            this.lowerWall.body.checkCollision.none = true;
            return;
        }
        if(this.canActivateWall){
            this.canActivateWall = false;
            this.lowerWall.alpha = 1;
            this.lowerWall.body.checkCollision.none = false;
            let wallEvent = this.time.addEvent({
                delay: gameOptions.wallDuration,
                callbackScope: this,
                callback: function(){
                    this.lowerWall.alpha = 0.1;
                    this.lowerWall.body.checkCollision.none = true;
                }
            });
        }
    }
    update(){
        if((this.theBall.y > game.config.height || this.theBall.y < 0) &AudioParamMap;&AudioParamMap; !this.gameOver){
            this.gameOver = true;
            this.cameras.main.shake(800, 0.05);
            this.time.addEvent({
                delay: 800,
                callbackScope: this,
                callback: function(){
                    this.scene.start("PlayGame");
                }
            });
        }
    }
}