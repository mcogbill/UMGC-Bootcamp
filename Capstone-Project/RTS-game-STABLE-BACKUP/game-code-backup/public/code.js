
class Sprite {
    constructor({
        position,
        rotation,
        imageSrc,
        scale = 1,
        framesMax = 1,
        offset = { x: 0, y: 0 }
    }) {
        this.position = position,
            this.rotation = rotation,
            this.width = 50,
            this.height = 150,
            this.image = new Image(),
            this.image.src = imageSrc,
            this.scale = scale,
            this.framesMax = framesMax,
            this.framesCurrent = 0,
            this.framesElapsed = 0,
            this.framesHold = 20,
            this.offset = offset
    };

    draw() {
        c.drawImage(
            this.image,
            this.framesCurrent * (this.image.width / this.framesMax),
            0,
            this.image.width / this.framesMax,
            this.image.height,
            this.position.x - this.offset.x,
            this.position.y - this.offset.y,
            (this.image.width / this.framesMax) * this.scale,
            this.image.height * this.scale
        );
    };

    animateFrames() {
        this.framesElapsed++

        if (this.framesElapsed % this.framesHold === 0) {
            if (this.framesCurrent < this.framesMax - 1) {
                this.framesCurrent++;
            } else {
                this.framesCurrent = 0;
            };
        };
    };

    update() {
        this.draw();
        this.animateFrames();
    };
};

class Pawn extends Sprite {
    constructor({
        position,
        rotation,
        velocity,
        color = 'red',
        imageSrc,
        scale = 1,
        framesMax = 1,
        offset = { x: 0, y: 0 },
        sprites,
        border1 = { offset: {}, width: undefined, height: undefined },
        border2 = { offset: {}, width: undefined, height: undefined },
        border3 = { offset: {}, width: undefined, height: undefined },
        killBox = { offset: {}, width: undefined, height: undefined },
        capturePoint1 = { offset: {}, width: undefined, height: undefined },
        capturePoint2 = { offset: {}, width: undefined, height: undefined },
        capturePoint3 = { offset: {}, width: undefined, height: undefined },
        attackBox = { offset: {}, width: undefined, height: undefined },
        hitBox = { offset: {}, width: undefined, height: undefined }
    }) {
        super({
            position,
            rotation,
            imageSrc,
            scale,
            framesMax,
            offset
        });
        this.velocity = velocity,
            this.width = 50,
            this.height = 150,
            this.rotation = 0,
            this.lastKey,
            this.border1 = {
                position: {
                    x: this.position.x,
                    y: this.position.y
                },
                offset: border1.offset,
                width: border1.width,
                height: border1.height
            };
        this.border2 = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            offset: border2.offset,
            width: border2.width,
            height: border2.height
        };
        this.border3 = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            offset: border3.offset,
            width: border3.width,
            height: border3.height
        };
        this.killBox = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            offset: killBox.offset,
            width: killBox.width,
            height: killBox.height
        };
        this.capturePoint1 = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            offset: capturePoint1.offset,
            width: capturePoint1.width,
            height: capturePoint1.height
        };
        this.capturePoint2 = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            offset: capturePoint2.offset,
            width: capturePoint2.width,
            height: capturePoint2.height
        };
        this.capturePoint3 = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            offset: capturePoint3.offset,
            width: capturePoint3.width,
            height: capturePoint3.height
        };
        this.attackBox = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            offset: attackBox.offset,
            width: attackBox.width,
            height: attackBox.height
        };
        this.hitBox = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            offset: hitBox.offset,
            width: hitBox.width,
            height: hitBox.height
        };
        this.color = color;
        this.idleState = true;
        this.isTurtle = false;
        this.isForming = false;
        this.isRamming = false;
        this.isPushing = false;
        this.isFighting = false;
        this.isArchers = false;
        this.health = 100;
        this.stamina = 100;
        this.strike = 100;
        this.framesCurrent = 0;
        this.framesElapsed = 0;
        this.framesHold = 20;
        this.sprites = sprites;
        this.dead = false;

        for (const sprite in this.sprites) {
            sprites[sprite].image = new Image();
            sprites[sprite].image.src = sprites[sprite].imageSrc;
        };
    };


    // Collision Boxes
    update() {
        this.draw();
        if (!this.dead) this.animateFrames();

        this.border1.position.x = this.position.x + this.border1.offset.x;
        this.border1.position.y = this.position.y + this.border1.offset.y;
        this.border2.position.x = this.position.x + this.border2.offset.x;
        this.border2.position.y = this.position.y + this.border2.offset.y;
        this.border3.position.x = this.position.x + this.border3.offset.x;
        this.border3.position.y = this.position.y + this.border3.offset.y;

        // c.fillStyle = 'green'
        // c.fillRect(
        //     this.border1.position.x,
        //     this.border1.position.y,
        //     this.border1.width,
        //     this.border1.height
        // );
        // c.fillStyle = 'green'
        // c.fillRect(
        //     this.border2.position.x,
        //     this.border2.position.y,
        //     this.border2.width,
        //     this.border2.height
        // );
        // c.fillStyle = 'green'
        // c.fillRect(
        //     this.border3.position.x,
        //     this.border3.position.y,
        //     this.border3.width,
        //     this.border3.height
        // );

        this.killBox.position.x = this.position.x + this.killBox.offset.x;
        this.killBox.position.y = this.position.y + this.killBox.offset.y;

        // c.fillStyle = 'red'
        // c.fillRect(
        //   this.killBox.position.x,
        //   this.killBox.position.y,
        //   this.killBox.width,
        //   this.killBox.height
        // );

        this.capturePoint1.position.x = this.position.x + this.capturePoint1.offset.x;
        this.capturePoint1.position.y = this.position.y + this.capturePoint1.offset.y;
        this.capturePoint2.position.x = this.position.x + this.capturePoint2.offset.x;
        this.capturePoint2.position.y = this.position.y + this.capturePoint2.offset.y;
        this.capturePoint3.position.x = this.position.x + this.capturePoint3.offset.x;
        this.capturePoint3.position.y = this.position.y + this.capturePoint3.offset.y;

        // c.fillStyle = 'blue'
        // c.fillRect(
        //     this.capturePoint1.position.x,
        //     this.capturePoint1.position.y,
        //     this.capturePoint1.width,
        //     this.capturePoint1.height
        // );
        // c.fillStyle = 'black'
        // c.fillRect(
        //     this.capturePoint2.position.x,
        //     this.capturePoint2.position.y,
        //     this.capturePoint2.width,
        //     this.capturePoint2.height
        // );
        // c.fillStyle = 'red'
        // c.fillRect(
        //     this.capturePoint3.position.x,
        //     this.capturePoint3.position.y,
        //     this.capturePoint3.width,
        //     this.capturePoint3.height
        // );

        this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
        this.attackBox.position.y = this.position.y + this.attackBox.offset.y;

        this.hitBox.position.x = this.position.x + this.hitBox.offset.x;
        this.hitBox.position.y = this.position.y + this.hitBox.offset.y;

        // // draw attack box (Used for front attacks)
        // c.fillStyle = 'black'
        // c.fillRect(
        //   this.attackBox.position.x,
        //   this.attackBox.position.y,
        //   this.attackBox.width,
        //   this.attackBox.height
        // );

        // // draw hit box (Not currently in use...)
        // c.fillStyle = 'green'
        // c.fillRect(
        //   this.hitBox.position.x,
        //   this.hitBox.position.y,
        //   this.hitBox.width,
        //   this.hitBox.height
        // );

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    };



    // Add rotation Function Here.......



    idle() {
        this.idleState = true;
        this.isTurtle = false;
        this.isForming = false;
        this.isFighting = false;
        this.isRamming = false;
        this.isPushing = false;
    };

    move() {
        this.idleState = false;
        this.isTurtle = false;
        this.isForming = false;
        this.isFighting = false;
        this.isRamming = false;
        this.isPushing = false;
    };

    moveAround() {
        this.idleState = false;
        this.isTurtle = false;
        this.isForming = false;
        this.isFighting = false;
        this.isRamming = true;
        this.isPushing = false;
    };

    phalanx() {
        this.idleState = false;
        this.isTurtle = false;
        this.isForming = true;
        this.isFighting = false;
        this.isRamming = false;
        this.isPushing = false;
    };

    fight() {
        this.idleState = false;
        this.isTurtle = false;
        this.isForming = true;
        this.isFighting = true;
        this.isRamming = false;
        this.isPushing = false;
    };

    push() {
        this.idleState = false;
        this.isTurtle = false;
        this.isForming = false;
        this.isFighting = false;
        this.isRamming = false;
        this.isPushing = true;
    };

    aiIdle() {
        if (this.idleState === true &&
            this.isTurtle === false &&
            this.isForming === false &&
            this.isFighting === false &&
            this.isRamming === false &&
            this.isPushing === false) {
            this.velocity.x = 0;
            this.velocity.y = 0;
            this.regenStaminaMax();
            this.regenStrikeMax();
            this.switchSprite('idle');
        };
    };

    aiMove() {
        if (this.idleState === false &&
            this.isTurtle === false &&
            this.isForming === false &&
            this.isFighting === false &&
            this.isRamming === false &&
            this.isPushing === false) {
            this.velocity.x = -0.5;
            this.velocity.y = 0;
            this.takeStaminaMin();
            this.switchSprite('run');
        };
    };

    aiMoveDown() {
        if (this.idleState === false &&
            this.isTurtle === false &&
            this.isForming === false &&
            this.isFighting === false &&
            this.isRamming === true &&
            this.isPushing === false) {
            this.velocity.x = 0;
            this.velocity.y = 0.5;
            this.takeStaminaMin();
            this.switchSprite('run');
        };
    };

    aiPhalanx() {
        if (this.idleState === false &&
            this.isTurtle === false &&
            this.isForming === true &&
            this.isFighting === false &&
            this.isRamming === false &&
            this.isPushing === false) {
            this.velocity.x = 0;
            this.velocity.y = 0;
            this.regenStaminaMed();
            this.regenStrikeMed();
            this.switchSprite('phalanxIdle');
        };
    };

    aiFighting() {
        if (this.idleState === false &&
            this.isTurtle === false &&
            this.isForming === true &&
            this.isFighting === true &&
            this.isRamming === false &&
            this.isPushing === false) {
            this.velocity.x = 0;
            this.velocity.y = 0;
            this.takeStaminaMax();
            this.switchSprite('attackFight');
        };
    };

    aiPushing() {
        if (this.idleState === false &&
            this.isTurtle === false &&
            this.isForming === false &&
            this.isFighting === false &&
            this.isRamming === false &&
            this.isPushing === true) {
            this.velocity.x = 0.1;
            this.velocity.y = 0;
            this.switchSprite('phalanxIdle');
        };
    };

    phalanxON() {
        if (this.image === this.sprites.idle.image) {
            this.switchSprite('phalanxIdle');
            this.idleState = false;
        };
    };

    phalanxOFF() {
        if (this.image === this.sprites.phalanxIdle.image) {
            this.switchSprite('idle');
            this.idleState = true;
        };
    };

    turtleON() {
        if (this.isTurtle === false) {
            this.switchSprite('turtleIdle');
            this.isTurtle = true;
        };
    };

    turtleOFF() {
        if (this.image === this.sprites.turtleIdle.image) {
            this.switchSprite('idle');
            this.isTurtle = false;
        };
    };

    ram() {
        if (this.stamina >= 5 && this.strike >= 95) {
            this.switchSprite('attackRam');
            this.isRamming = true;
        };
    };

    fightON() {
        if (this.isFighting === false) {
            this.switchSprite('attackFight');
            this.isFighting = true;
        };
    };

    fightOFF() {
        if (this.isFighting === true) {
            this.switchSprite('phalanxIdle');
            this.isFighting = false;
        };
    };

    takeHit() {
        this.switchSprite('takeHit');
    };

    takeDamageRam() {
        this.health -= 25;
        updateHealthBars();

        if (this.health <= 0) {
            this.health = 0;
            this.switchSprite('death');
        };
    };

    takeStaminaRam() {
        this.stamina -= 50;
        this.strike -= 100;
        updateStaminaBars();
        updateStrikeBars();

        if (this.stamina <= 0) {
            this.stamina = 0;
        };
        if (this.strike <= 0) {
            this.strike = 0;
        };
    };

    takeDamageAi() {
        this.health -= 1;
        updateHealthBars();

        if (this.health <= 0) {
            this.health = 0;
            this.switchSprite('death');
        };
    };

    takeDamageMax() {
        this.health -= 0.25;
        updateHealthBars();

        if (this.health <= 0) {
            this.health = 0;
            this.switchSprite('death');
        };
    };

    takeDamageMed() {
        this.health -= 0.1;
        updateHealthBars();

        if (this.health <= 0) {
            this.health = 0;
            this.switchSprite('death');
        };
    };

    takeDamageMin() {
        this.health -= 0.025;
        updateHealthBars();

        if (this.health <= 0) {
            this.health = 0;
            this.switchSprite('death');
        };
    };

    takeStaminaMax() {
        this.stamina -= 1;
        updateStaminaBars();

        if (this.stamina <= 0) {
            this.stamina = 0;
        };
    };

    takeStaminaMed() {
        this.stamina -= 0.25;
        updateStaminaBars();

        if (this.stamina <= 0) {
            this.stamina = 0;
        };
    };

    takeStaminaMin() {
        this.stamina -= 0.1;
        updateStaminaBars();

        if (this.stamina <= 0) {
            this.stamina = 0;
        };
    };

    regenStaminaMax() {
        this.stamina += 0.1;
        updateStaminaBars();

        if (this.stamina >= 100) {
            this.stamina = 100;
        };
    };

    regenStaminaMed() {
        this.stamina += 0.025;
        updateStaminaBars();

        if (this.stamina >= 100) {
            this.stamina = 100;
        };
    };

    regenStaminaMin() {
        this.stamina += 0.01;
        updateStaminaBars();

        if (this.stamina >= 100) {
            this.stamina = 100;
        };
    };

    takeStrikeMax() {
        this.strike -= 1;
        updateStrikeBars();

        if (this.strike <= 0) {
            this.strike = 0;
        };
    };

    regenStrikeMax() {
        this.strike += 0.1;
        updateStrikeBars();

        if (this.strike >= 100) {
            this.strike = 100;
        };
    };

    regenStrikeMed() {
        this.strike += 0.025;
        updateStrikeBars();

        if (this.strike >= 100) {
            this.strike = 100;
        };
    };

    regenStrikeMin() {
        this.strike += 0.01;
        updateStrikeBars();

        if (this.strike >= 100) {
            this.strike = 100;
        };
    };

    archers1ON() {
        if (this.isArchers === false) {
            this.switchSprite('archersAttack');
            this.isArchers === true;
        };
    };

    archers1OFF() {
        if (this.image === this.sprites.archersAttack.image) {
            this.switchSprite('archersIdle');
            this.isArchers === false;
        };
    };



    switchSprite(sprite) {
        if (this.image === this.sprites.death.image) {
            if (this.framesCurrent === this.sprites.death.framesMax - 1)
                this.dead = true;
            return;
        };

        // overriding when attack fight
        if (
            this.image === this.sprites.attackFight.image &&
            this.framesCurrent < this.sprites.attackFight.framesMax - 1
        )
            return;

        // overriding when ram fight
        if (
            this.image === this.sprites.attackRam.image &&
            this.framesCurrent < this.sprites.attackRam.framesMax - 1
        )
            return;

        // override when Pawn gets hit
        if (
            this.image === this.sprites.takeHit.image &&
            this.framesCurrent < this.sprites.takeHit.framesMax - 1
        )
            return;

        switch (sprite) {
            case 'idle':
                if (this.image !== this.sprites.idle.image) {
                    this.image = this.sprites.idle.image;
                    this.framesMax = this.sprites.idle.framesMax;
                    this.framesCurrent = 0;
                };
                break;
            case 'run':
                if (this.image !== this.sprites.run.image) {
                    this.image = this.sprites.run.image;
                    this.framesMax = this.sprites.run.framesMax;
                    this.framesCurrent = 0;
                };
                break;

            case 'phalanxForm':
                if (this.image !== this.sprites.phalanxForm.image) {
                    this.image = this.sprites.phalanxForm.image;
                    this.framesMax = this.sprites.phalanxForm.framesMax;
                    this.framesCurrent = 0;
                };
                break;

            case 'phalanxIdle':
                if (this.image !== this.sprites.phalanxIdle.image) {
                    this.image = this.sprites.phalanxIdle.image;
                    this.framesMax = this.sprites.phalanxIdle.framesMax;
                    this.framesCurrent = 0;
                };
                break;

            case 'phalanxMarch':
                if (this.image !== this.sprites.phalanxMarch.image) {
                    this.image = this.sprites.phalanxMarch.image;
                    this.framesMax = this.sprites.phalanxMarch.framesMax;
                    this.framesCurrent = 0;
                };
                break;

            case 'phalanxPush':
                if (this.image !== this.sprites.phalanxPush.image) {
                    this.image = this.sprites.phalanxPush.image;
                    this.framesMax = this.sprites.phalanxPush.framesMax;
                    this.framesCurrent = 0;
                };
                break;

            case 'turtleIdle':
                if (this.image !== this.sprites.turtleIdle.image) {
                    this.image = this.sprites.turtleIdle.image;
                    this.framesMax = this.sprites.turtleIdle.framesMax;
                    this.framesCurrent = 0;
                };
                break;

            case 'attackRam':
                if (this.image !== this.sprites.attackRam.image) {
                    this.image = this.sprites.attackRam.image;
                    this.framesMax = this.sprites.attackRam.framesMax;
                    this.framesCurrent = 0;
                };
                break;

            case 'attackFight':
                if (this.image !== this.sprites.attackFight.image) {
                    this.image = this.sprites.attackFight.image;
                    this.framesMax = this.sprites.attackFight.framesMax;
                    this.framesCurrent = 0;
                };
                break;

            case 'takeHit':
                if (this.image !== this.sprites.takeHit.image) {
                    this.image = this.sprites.takeHit.image;
                    this.framesMax = this.sprites.takeHit.framesMax;
                    this.framesCurrent = 0;
                };
                break;

            case 'death':
                if (this.image !== this.sprites.death.image) {
                    this.image = this.sprites.death.image;
                    this.framesMax = this.sprites.death.framesMax;
                    this.framesCurrent = 0;
                };
                break;

            case 'archersIdle':
                if (this.image !== this.sprites.archersIdle.image) {
                    this.image = this.sprites.archersIdle.image;
                    this.framesMax = this.sprites.archersIdle.framesMax;
                    this.framesCurrent = 0;
                };
                break;

            case 'archersAttack':
                if (this.image !== this.sprites.archersAttack.image) {
                    this.image = this.sprites.archersAttack.image;
                    this.framesMax = this.sprites.archersAttack.framesMax;
                    this.framesCurrent = 0;
                };
                break;

            case 'archersFlag':
                if (this.image !== this.sprites.archersFlag.image) {
                    this.image = this.sprites.archersFlag.image;
                    this.framesMax = this.sprites.archersFlag.framesMax;
                    this.framesCurrent = 0;
                };
                break;

            case 'playerFlag':
                if (this.image !== this.sprites.playerFlag.image) {
                    this.image = this.sprites.playerFlag.image;
                    this.framesMax = this.sprites.playerFlag.framesMax;
                    this.framesCurrent = 0;
                };
                break;

            case 'enemyFlag':
                if (this.image !== this.sprites.enemyFlag.image) {
                    this.image = this.sprites.enemyFlag.image;
                    this.framesMax = this.sprites.enemyFlag.framesMax;
                    this.framesCurrent = 0;
                };
                break;
        };
    };
};

// Utilities
function rectangularCollision({ rectangle1, rectangle2 }) {
    return (
        rectangle1.attackBox.position.x + rectangle1.attackBox.width >=
        rectangle2.position.x &&
        rectangle1.attackBox.position.x <=
        rectangle2.position.x + rectangle2.width &&
        rectangle1.attackBox.position.y + rectangle1.attackBox.height >=
        rectangle2.position.y &&
        rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
    );
};

function terrainCollision({ rectangle1, rectangle2 }) {
    return (
        (rectangle1.attackBox.position.x + rectangle1.attackBox.width >
            rectangle2.border1.position.x &&
            rectangle1.attackBox.position.x <
            rectangle2.border1.position.x + rectangle2.border1.width &&
            rectangle1.attackBox.position.y + rectangle1.attackBox.height >
            rectangle2.border1.position.y &&
            rectangle1.attackBox.position.y < rectangle2.border1.position.y + rectangle2.border1.height) ||
        (rectangle1.attackBox.position.x + rectangle1.attackBox.width >
            rectangle2.border2.position.x &&
            rectangle1.attackBox.position.x <
            rectangle2.border2.position.x + rectangle2.border2.width &&
            rectangle1.attackBox.position.y + rectangle1.attackBox.height >
            rectangle2.border2.position.y &&
            rectangle1.attackBox.position.y < rectangle2.border2.position.y + rectangle2.border2.height) ||
        (rectangle1.attackBox.position.x + rectangle1.attackBox.width >
            rectangle2.border3.position.x &&
            rectangle1.attackBox.position.x <
            rectangle2.border3.position.x + rectangle2.border3.width &&
            rectangle1.attackBox.position.y + rectangle1.attackBox.height >
            rectangle2.border3.position.y &&
            rectangle1.attackBox.position.y < rectangle2.border3.position.y + rectangle2.border3.height)
    );
};

function killBoxCollision({ rectangle1, rectangle2 }) {
    return (
        (rectangle1.attackBox.position.x + rectangle1.attackBox.width >
            rectangle2.killBox.position.x &&
            rectangle1.attackBox.position.x <
            rectangle2.killBox.position.x + rectangle2.killBox.width &&
            rectangle1.attackBox.position.y + rectangle1.attackBox.height >
            rectangle2.killBox.position.y &&
            rectangle1.attackBox.position.y < rectangle2.killBox.position.y + rectangle2.killBox.height)
    );
};

function capturePoint1Collision({ rectangle1, rectangle2 }) {
    return (
        (rectangle1.attackBox.position.x + rectangle1.attackBox.width >
            rectangle2.capturePoint1.position.x &&
            rectangle1.attackBox.position.x <
            rectangle2.capturePoint1.position.x + rectangle2.capturePoint1.width &&
            rectangle1.attackBox.position.y + rectangle1.attackBox.height >
            rectangle2.capturePoint1.position.y &&
            rectangle1.attackBox.position.y < rectangle2.capturePoint1.position.y + rectangle2.capturePoint1.height)
    );
};

function capturePoint2Collision({ rectangle1, rectangle2 }) {
    return (
        (rectangle1.attackBox.position.x + rectangle1.attackBox.width >
            rectangle2.capturePoint2.position.x &&
            rectangle1.attackBox.position.x <
            rectangle2.capturePoint2.position.x + rectangle2.capturePoint2.width &&
            rectangle1.attackBox.position.y + rectangle1.attackBox.height >
            rectangle2.capturePoint2.position.y &&
            rectangle1.attackBox.position.y < rectangle2.capturePoint2.position.y + rectangle2.capturePoint2.height)
    );
};

function capturePoint3Collision({ rectangle1, rectangle2 }) {
    return (
        (rectangle1.attackBox.position.x + rectangle1.attackBox.width >
            rectangle2.capturePoint3.position.x &&
            rectangle1.attackBox.position.x <
            rectangle2.capturePoint3.position.x + rectangle2.capturePoint3.width &&
            rectangle1.attackBox.position.y + rectangle1.attackBox.height >
            rectangle2.capturePoint3.position.y &&
            rectangle1.attackBox.position.y < rectangle2.capturePoint3.position.y + rectangle2.capturePoint3.height)
    );
};



function victoryConditions({ player, enemy }) {
    document.querySelector('#displayText').style.display = 'Flex';
    if ((player.health + playerPawn1.health + playerPawn2.health) > (enemy.health + enemyPawn1.health + enemyPawn2.health) || enemyFlag.position.y >= 455) {
        document.querySelector('#displayText').innerHTML = 'Player 1 Wins';
    } else if ((player.health + playerPawn1.health + playerPawn2.health) < (enemy.health + enemyPawn1.health + enemyPawn2.health) || playerFlag.position.y >= 455) {
        document.querySelector('#displayText').innerHTML = 'Player 2 Wins';
    } else {
        document.querySelector('#displayText').innerHTML = 'Tie';
    };
};



function startCountdown(durationInMinutes) {
    let timer = durationInMinutes * 60;

    let countdownInterval = setInterval(function () {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;

        const display = document.getElementById('timer');

        const formattedMinutes = minutes.toString();
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

        display.textContent = `${formattedMinutes}:${formattedSeconds}`;

        if (--timer < 0 || ((enemy.health <= 0 && enemyPawn1.health <= 0 && enemyPawn2.health <= 0) ||
            (player.health <= 0 && playerPawn1.health <= 0 && playerPawn2.health <= 0) ||
            playerFlag.position.y >= 455 ||
            enemyFlag.position.y >= 455)) {
            clearInterval(countdownInterval);
            victoryConditions({ player, enemy });
        };
    }, 1000);
};



// Update Health Bars
const healthBarInnerPlayer = document.getElementById('healthBarInnerPlayer');
const healthTextPlayer = document.getElementById('healthTextPlayer');
const healthBarInnerPlayerPawn1 = document.getElementById('healthBarInnerPlayerPawn1');
const healthTextPlayerPawn1 = document.getElementById('healthTextPlayerPawn1');
const healthBarInnerPlayerPawn2 = document.getElementById('healthBarInnerPlayerPawn2');
const healthTextPlayerPawn2 = document.getElementById('healthTextPlayerPawn2');

const healthBarInnerEnemy = document.getElementById('healthBarInnerEnemy');
const healthTextEnemy = document.getElementById('healthTextEnemy');
const healthBarInnerEnemyPawn1 = document.getElementById('healthBarInnerEnemyPawn1');
const healthTextEnemyPawn1 = document.getElementById('healthTextEnemyPawn1');
const healthBarInnerEnemyPawn2 = document.getElementById('healthBarInnerEnemyPawn2');
const healthTextEnemyPawn2 = document.getElementById('healthTextEnemyPawn2');

function updateHealthBars() {
    healthBarInnerPlayer.style.width = player.health + '%';
    healthTextPlayer.textContent = Math.floor(player.health) + '%';
    healthBarInnerPlayerPawn1.style.width = playerPawn1.health + '%';
    healthTextPlayerPawn1.textContent = Math.floor(playerPawn1.health) + '%';
    healthBarInnerPlayerPawn2.style.width = playerPawn2.health + '%';
    healthTextPlayerPawn2.textContent = Math.floor(playerPawn2.health) + '%';

    healthBarInnerEnemy.style.width = enemy.health + '%';
    healthTextEnemy.textContent = Math.floor(enemy.health) + '%';
    healthBarInnerEnemyPawn1.style.width = enemyPawn1.health + '%';
    healthTextEnemyPawn1.textContent = Math.floor(enemyPawn1.health) + '%';
    healthBarInnerEnemyPawn2.style.width = enemyPawn2.health + '%';
    healthTextEnemyPawn2.textContent = Math.floor(enemyPawn2.health) + '%';
};



// Update Stamina Bars
const staminaBarInnerPlayer = document.getElementById('staminaBarInnerPlayer');
const staminaTextPlayer = document.getElementById('staminaTextPlayer');
const staminaBarInnerPlayerPawn1 = document.getElementById('staminaBarInnerPlayerPawn1');
const staminaTextPlayerPawn1 = document.getElementById('staminaTextPlayerPawn1');
const staminaBarInnerPlayerPawn2 = document.getElementById('staminaBarInnerPlayerPawn2');
const staminaTextPlayerPawn2 = document.getElementById('staminaTextPlayerPawn2');

const staminaBarInnerEnemy = document.getElementById('staminaBarInnerEnemy');
const staminaTextEnemy = document.getElementById('staminaTextEnemy');
const staminaBarInnerEnemyPawn1 = document.getElementById('staminaBarInnerEnemyPawn1');
const staminaTextEnemyPawn1 = document.getElementById('staminaTextEnemyPawn1');
const staminaBarInnerEnemyPawn2 = document.getElementById('staminaBarInnerEnemyPawn2');
const staminaTextEnemyPawn2 = document.getElementById('staminaTextEnemyPawn2');

function updateStaminaBars() {
    staminaBarInnerPlayer.style.width = player.stamina + '%';
    staminaTextPlayer.textContent = Math.floor(player.stamina) + '%';
    staminaBarInnerPlayerPawn1.style.width = playerPawn1.stamina + '%';
    staminaTextPlayerPawn1.textContent = Math.floor(playerPawn1.stamina) + '%';
    staminaBarInnerPlayerPawn2.style.width = playerPawn2.stamina + '%';
    staminaTextPlayerPawn2.textContent = Math.floor(playerPawn2.stamina) + '%';

    staminaBarInnerEnemy.style.width = enemy.stamina + '%';
    staminaTextEnemy.textContent = Math.floor(enemy.stamina) + '%';
    staminaBarInnerEnemyPawn1.style.width = enemyPawn1.stamina + '%';
    staminaTextEnemyPawn1.textContent = Math.floor(enemyPawn1.stamina) + '%';
    staminaBarInnerEnemyPawn2.style.width = enemyPawn2.stamina + '%';
    staminaTextEnemyPawn2.textContent = Math.floor(enemyPawn2.stamina) + '%';
};

// Update Strike Bars
const strikeBarInnerPlayer = document.getElementById('strikeBarInnerPlayer');
const strikeTextPlayer = document.getElementById('strikeTextPlayer');
const strikeBarInnerPlayerPawn1 = document.getElementById('strikeBarInnerPlayerPawn1');
const strikeTextPlayerPawn1 = document.getElementById('strikeTextPlayerPawn1');
const strikeBarInnerPlayerPawn2 = document.getElementById('strikeBarInnerPlayerPawn2');
const strikeTextPlayerPawn2 = document.getElementById('strikeTextPlayerPawn2');

const strikeBarInnerEnemy = document.getElementById('strikeBarInnerEnemy');
const strikeTextEnemy = document.getElementById('strikeTextEnemy');
const strikeBarInnerEnemyPawn1 = document.getElementById('strikeBarInnerEnemyPawn1');
const strikeTextEnemyPawn1 = document.getElementById('strikeTextEnemyPawn1');
const strikeBarInnerEnemyPawn2 = document.getElementById('strikeBarInnerEnemyPawn2');
const strikeTextEnemyPawn2 = document.getElementById('strikeTextEnemyPawn2');

function updateStrikeBars() {
    strikeBarInnerPlayer.style.width = player.strike + '%';
    strikeTextPlayer.textContent = Math.floor(player.strike) + '%';
    strikeBarInnerPlayerPawn1.style.width = playerPawn1.strike + '%';
    strikeTextPlayerPawn1.textContent = Math.floor(playerPawn1.strike) + '%';
    strikeBarInnerPlayerPawn2.style.width = playerPawn2.strike + '%';
    strikeTextPlayerPawn2.textContent = Math.floor(playerPawn2.strike) + '%';

    strikeBarInnerEnemy.style.width = enemy.strike + '%';
    strikeTextEnemy.textContent = Math.floor(enemy.strike) + '%';
    strikeBarInnerEnemyPawn1.style.width = enemyPawn1.strike + '%';
    strikeTextEnemyPawn1.textContent = Math.floor(enemyPawn1.strike) + '%';
    strikeBarInnerEnemyPawn2.style.width = enemyPawn2.strike + '%';
    strikeTextEnemyPawn2.textContent = Math.floor(enemyPawn2.strike) + '%';
};
// Utilities End

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1280;
canvas.height = 768;

c.fillRect(0, 0, canvas.width, canvas.height);

const background = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: './img/map01.png'
});

const player = new Pawn({
    rotation: 0,
    position: {
        x: 25,
        y: 285
    },
    velocity: {
        x: 0,
        y: 0
    },
    offset: {
        x: 0,
        y: 0
    },
    imageSrc: './img/playerOne/Idle.png',
    framesMax: 4,
    scale: 0.75,
    offset: {
        x: 10,
        y: 20
    },
    sprites: {
        idle: {
            imageSrc: './img/playerOne/Idle.png',
            framesMax: 4
        },
        run: {
            imageSrc: './img/playerOne/Run.png',
            framesMax: 4
        },
        phalanxIdle: {
            imageSrc: './img/playerOne/PhalanxIdle.png',
            framesMax: 4
        },
        phalanxMarch: {
            imageSrc: './img/playerOne/PhalanxMarch.png',
            framesMax: 4
        },
        phalanxPush: {
            imageSrc: './img/playerOne/PhalanxPush.png',
            framesMax: 4
        },
        turtleIdle: {
            imageSrc: './img/playerOne/TurtleIdle.png',
            framesMax: 4
        },
        attackRam: {
            imageSrc: './img/playerOne/AttackRam.png',
            framesMax: 6
        },
        attackFight: {
            imageSrc: './img/playerOne/AttackFight.png',
            framesMax: 4
        },
        takeHit: {
            imageSrc: './img/playerOne/TakeHit.png',
            framesMax: 4
        },
        death: {
            imageSrc: './img/playerOne/Death.png',
            framesMax: 6
        }
    },
    attackBox: {
        offset: {
            x: 45,
            y: 0
        },
        width: 25,
        height: 125
    },
    hitBox: {
        offset: {
            x: 0,
            y: 0
        },
        width: 90,
        height: 190
    }
});

const playerPawn1 = new Pawn({
    position: {
        x: 25,
        y: 100
    },
    velocity: {
        x: 0,
        y: 0
    },
    offset: {
        x: 0,
        y: 0
    },
    imageSrc: './img/playerOne/Idle.png',
    framesMax: 4,
    scale: 0.75,
    offset: {
        x: 10,
        y: 20
    },
    sprites: {
        idle: {
            imageSrc: './img/playerOne/Idle.png',
            framesMax: 4
        },
        run: {
            imageSrc: './img/playerOne/Run.png',
            framesMax: 4
        },
        phalanxIdle: {
            imageSrc: './img/playerOne/PhalanxIdle.png',
            framesMax: 4
        },
        phalanxMarch: {
            imageSrc: './img/playerOne/PhalanxMarch.png',
            framesMax: 4
        },
        phalanxPush: {
            imageSrc: './img/playerOne/PhalanxPush.png',
            framesMax: 4
        },
        turtleIdle: {
            imageSrc: './img/playerOne/TurtleIdle.png',
            framesMax: 4
        },
        attackRam: {
            imageSrc: './img/playerOne/AttackRam.png',
            framesMax: 6
        },
        attackFight: {
            imageSrc: './img/playerOne/AttackFight.png',
            framesMax: 4
        },
        takeHit: {
            imageSrc: './img/playerOne/TakeHit.png',
            framesMax: 4
        },
        death: {
            imageSrc: './img/playerOne/Death.png',
            framesMax: 6
        }
    },
    attackBox: {
        offset: {
            x: 45,
            y: 0
        },
        width: 24,
        height: 125
    },
    hitBox: {
        offset: {
            x: 0,
            y: 0
        },
        width: 90,
        height: 190
    }
});

const playerPawn2 = new Pawn({
    position: {
        x: 25,
        y: 475
    },
    velocity: {
        x: 0,
        y: 0
    },
    offset: {
        x: 0,
        y: 0
    },
    imageSrc: './img/playerOne/Idle.png',
    framesMax: 4,
    scale: 0.75,
    offset: {
        x: 10,
        y: 20
    },
    sprites: {
        idle: {
            imageSrc: './img/playerOne/Idle.png',
            framesMax: 4
        },
        run: {
            imageSrc: './img/playerOne/Run.png',
            framesMax: 4
        },
        phalanxIdle: {
            imageSrc: './img/playerOne/PhalanxIdle.png',
            framesMax: 4
        },
        phalanxMarch: {
            imageSrc: './img/playerOne/PhalanxMarch.png',
            framesMax: 4
        },
        phalanxPush: {
            imageSrc: './img/playerOne/PhalanxPush.png',
            framesMax: 4
        },
        turtleIdle: {
            imageSrc: './img/playerOne/TurtleIdle.png',
            framesMax: 4
        },
        attackRam: {
            imageSrc: './img/playerOne/AttackRam.png',
            framesMax: 6
        },
        attackFight: {
            imageSrc: './img/playerOne/AttackFight.png',
            framesMax: 4
        },
        takeHit: {
            imageSrc: './img/playerOne/TakeHit.png',
            framesMax: 4
        },
        death: {
            imageSrc: './img/playerOne/Death.png',
            framesMax: 6
        }
    },
    attackBox: {
        offset: {
            x: 45,
            y: 0
        },
        width: 25,
        height: 125
    },
    hitBox: {
        offset: {
            x: 0,
            y: 0
        },
        width: 90,
        height: 190
    }
});

const enemy = new Pawn({
    position: {
        x: 1210,
        y: 285
    },
    velocity: {
        x: 0,
        y: 0
    },
    color: 'blue',
    offset: {
        x: 0,
        y: 0
    },
    imageSrc: './img/playerTwo/Idle.png',
    framesMax: 4,
    scale: 0.75,
    offset: {
        x: 90,
        y: 20
    },
    sprites: {
        idle: {
            imageSrc: './img/playerTwo/Idle.png',
            framesMax: 4
        },
        run: {
            imageSrc: './img/playerTwo/Run.png',
            framesMax: 4
        },
        phalanxForm: {
            imageSrc: './img/playerTwo/PhalanxForm.png',
            framesMax: 7
        },
        phalanxIdle: {
            imageSrc: './img/playerTwo/PhalanxIdle.png',
            framesMax: 4
        },
        phalanxMarch: {
            imageSrc: './img/playerTwo/PhalanxMarch.png',
            framesMax: 4
        },
        phalanxPush: {
            imageSrc: './img/playerTwo/PhalanxPush.png',
            framesMax: 4
        },
        turtleIdle: {
            imageSrc: './img/playerTwo/TurtleIdle.png',
            framesMax: 4
        },
        attackRam: {
            imageSrc: './img/playerTwo/AttackRam.png',
            framesMax: 8
        },
        attackFight: {
            imageSrc: './img/playerTwo/AttackFight.png',
            framesMax: 4
        },
        takeHit: {
            imageSrc: './img/playerTwo/TakeHit.png',
            framesMax: 4
        },
        death: {
            imageSrc: './img/playerTwo/Death.png',
            framesMax: 7
        }
    },
    attackBox: {
        offset: {
            x: -28,
            y: 0
        },
        width: 25,
        height: 125
    },
    hitBox: {
        offset: {
            x: 0,
            y: 0
        },
        width: 90,
        height: 190
    }
});

const enemyPawn1 = new Pawn({
    position: {
        x: 1210,
        y: 100
    },
    velocity: {
        x: 0,
        y: 0
    },
    color: 'blue',
    offset: {
        x: 0,
        y: 0
    },
    imageSrc: './img/playerTwo/Idle.png',
    framesMax: 4,
    scale: 0.75,
    offset: {
        x: 90,
        y: 20
    },
    sprites: {
        idle: {
            imageSrc: './img/playerTwo/Idle.png',
            framesMax: 4
        },
        run: {
            imageSrc: './img/playerTwo/Run.png',
            framesMax: 4
        },
        phalanxForm: {
            imageSrc: './img/playerTwo/PhalanxForm.png',
            framesMax: 7
        },
        phalanxIdle: {
            imageSrc: './img/playerTwo/PhalanxIdle.png',
            framesMax: 4
        },
        phalanxMarch: {
            imageSrc: './img/playerTwo/PhalanxMarch.png',
            framesMax: 4
        },
        phalanxPush: {
            imageSrc: './img/playerTwo/PhalanxPush.png',
            framesMax: 4
        },
        turtleIdle: {
            imageSrc: './img/playerTwo/TurtleIdle.png',
            framesMax: 4
        },
        attackRam: {
            imageSrc: './img/playerTwo/AttackRam.png',
            framesMax: 8
        },
        attackFight: {
            imageSrc: './img/playerTwo/AttackFight.png',
            framesMax: 4
        },
        takeHit: {
            imageSrc: './img/playerTwo/TakeHit.png',
            framesMax: 4
        },
        death: {
            imageSrc: './img/playerTwo/Death.png',
            framesMax: 7
        }
    },
    attackBox: {
        offset: {
            x: -28,
            y: 0
        },
        width: 25,
        height: 125
    },
    hitBox: {
        offset: {
            x: 0,
            y: 0
        },
        width: 90,
        height: 190
    }
});

const enemyPawn2 = new Pawn({
    position: {
        x: 1210,
        y: 475
    },
    velocity: {
        x: 0,
        y: 0
    },
    color: 'blue',
    offset: {
        x: 0,
        y: 0
    },
    imageSrc: './img/playerTwo/Idle.png',
    framesMax: 4,
    scale: 0.75,
    offset: {
        x: 90,
        y: 20
    },
    sprites: {
        idle: {
            imageSrc: './img/playerTwo/Idle.png',
            framesMax: 4
        },
        run: {
            imageSrc: './img/playerTwo/Run.png',
            framesMax: 4
        },
        phalanxForm: {
            imageSrc: './img/playerTwo/PhalanxForm.png',
            framesMax: 7
        },
        phalanxIdle: {
            imageSrc: './img/playerTwo/PhalanxIdle.png',
            framesMax: 4
        },
        phalanxMarch: {
            imageSrc: './img/playerTwo/PhalanxMarch.png',
            framesMax: 4
        },
        phalanxPush: {
            imageSrc: './img/playerTwo/PhalanxPush.png',
            framesMax: 4
        },
        turtleIdle: {
            imageSrc: './img/playerTwo/TurtleIdle.png',
            framesMax: 4
        },
        attackRam: {
            imageSrc: './img/playerTwo/AttackRam.png',
            framesMax: 8
        },
        attackFight: {
            imageSrc: './img/playerTwo/AttackFight.png',
            framesMax: 4
        },
        takeHit: {
            imageSrc: './img/playerTwo/TakeHit.png',
            framesMax: 4
        },
        death: {
            imageSrc: './img/playerTwo/Death.png',
            framesMax: 7
        }
    },
    attackBox: {
        offset: {
            x: -28,
            y: 0
        },
        width: 25,
        height: 125
    },
    hitBox: {
        offset: {
            x: 0,
            y: 0
        },
        width: 90,
        height: 190
    }
});

const selectStats1 = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    offset: {
        x: 10,
        y: 5
    },
    imageSrc: './img/statsPlayer.png',
    scale: .8,
});

const selectStats2 = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    offset: {
        x: 10,
        y: 5
    },
    imageSrc: './img/statsEnemy.png',
    scale: .8,
});

const highlightPlayer = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    offset: {
        x: 20,
        y: 30
    },
    imageSrc: './img/playerOne/HighlightPlayer.png',
    scale: 1,
});

const highlightEnemy = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    offset: {
        x: 30,
        y: 30
    },
    imageSrc: './img/playerTwo/HighlightEnemy.png',
    scale: 1,
});

const displayDamage1 = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    offset: {
        x: 10,
        y: 5
    },
    imageSrc: './img/playerOne/Damage2.png',
    scale: 0.75,
});

const displayDamage2 = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    offset: {
        x: 20,
        y: 5
    },
    imageSrc: './img/playerTwo/Damage2.png',
    scale: 0.75,
});

const arrows = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    offset: {
        x: 20,
        y: 75
    },
    imageSrc: './img/archers/Arrows.png',
    scale: 0.65,
    framesMax: 4
});

const arrows2 = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    offset: {
        x: 20,
        y: 75
    },
    imageSrc: './img/archers/Arrows2.png',
    scale: 0.65,
    framesMax: 4
});

const terrain = new Pawn({
    rotation: 0,
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    },
    offset: {
        x: 0,
        y: 0
    },
    imageSrc: './img/mapObjects.png',
    scale: 1,
    offset: {
        x: 0,
        y: 0
    },
    border1: {
        offset: {
            x: 155,
            y: 445
        },
        width: 360,
        height: 75
    },
    border2: {
        offset: {
            x: 725,
            y: 445
        },
        width: 400,
        height: 75
    },
    border3: {
        offset: {
            x: 465,
            y: 0
        },
        width: 345,
        height: 155
    }
});

const shadows = new Pawn({
    rotation: 0,
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    },
    offset: {
        x: 0,
        y: 0
    },
    imageSrc: './img/mapShadows.png',
    scale: 1,
    offset: {
        x: 0,
        y: 0
    }
});

const killBox = new Pawn({
    rotation: 0,
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    },
    offset: {
        x: 0,
        y: 0
    },
    imageSrc: './img/mapRocks.png',
    scale: 1,
    offset: {
        x: 0,
        y: 0
    },
    killBox: {
        offset: {
            x: 250,
            y: 0
        },
        width: 780,
        height: 450
    }
});

const capturePoints = new Pawn({
    rotation: 0,
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    },
    offset: {
        x: 0,
        y: 0
    },
    imageSrc: './img/blank.png',
    scale: 1,
    offset: {
        x: 0,
        y: 0
    },
    capturePoint1: {
        offset: {
            x: 0,
            y: 300
        },
        width: 140,
        height: 200
    },
    capturePoint2: {
        offset: {
            x: 425,
            y: 0
        },
        width: 425,
        height: 200
    },
    capturePoint3: {
        offset: {
            x: 1140,
            y: 300
        },
        width: 140,
        height: 200
    },
});

const archers1 = new Pawn({
    rotation: 0,
    position: {
        x: 500,
        y: -50
    },
    velocity: {
        x: 0,
        y: 0
    },
    offset: {
        x: 0,
        y: 0
    },
    imageSrc: './img/archers/ArchersIdle.png',
    framesMax: 4,
    scale: 0.75,
    offset: {
        x: 0,
        y: 0
    },
    sprites: {
        archersIdle: {
            imageSrc: './img/archers/ArchersIdle.png',
            framesMax: 4
        },
        archersAttack: {
            imageSrc: './img/archers/ArchersAttack.png',
            framesMax: 4
        },
        phalanxIdle: {
            imageSrc: './img/playerOne/PhalanxIdle.png',
            framesMax: 4
        },
        phalanxMarch: {
            imageSrc: './img/playerOne/PhalanxMarch.png',
            framesMax: 4
        },
        turtleIdle: {
            imageSrc: './img/playerOne/TurtleIdle.png',
            framesMax: 4
        },
        attackRam: {
            imageSrc: './img/playerOne/AttackRam.png',
            framesMax: 6
        },
        attackFight: {
            imageSrc: './img/playerOne/AttackFight.png',
            framesMax: 4
        },
        takeHit: {
            imageSrc: './img/playerOne/TakeHit.png',
            framesMax: 4
        },
        death: {
            imageSrc: './img/playerOne/Death.png',
            framesMax: 6
        }
    },
});

const archers2 = new Pawn({
    rotation: 0,
    position: {
        x: 655,
        y: -50
    },
    velocity: {
        x: 0,
        y: 0
    },
    offset: {
        x: 0,
        y: 0
    },
    imageSrc: './img/archers/ArchersIdle.png',
    framesMax: 4,
    scale: 0.75,
    offset: {
        x: 0,
        y: 0
    },
    sprites: {
        archersIdle: {
            imageSrc: './img/archers/ArchersIdle.png',
            framesMax: 4
        },
        archersAttack: {
            imageSrc: './img/archers/ArchersAttack.png',
            framesMax: 4
        },
        phalanxIdle: {
            imageSrc: './img/playerOne/PhalanxIdle.png',
            framesMax: 4
        },
        phalanxMarch: {
            imageSrc: './img/playerOne/PhalanxMarch.png',
            framesMax: 4
        },
        turtleIdle: {
            imageSrc: './img/playerOne/TurtleIdle.png',
            framesMax: 4
        },
        attackRam: {
            imageSrc: './img/playerOne/AttackRam.png',
            framesMax: 6
        },
        attackFight: {
            imageSrc: './img/playerOne/AttackFight.png',
            framesMax: 4
        },
        takeHit: {
            imageSrc: './img/playerOne/TakeHit.png',
            framesMax: 4
        },
        death: {
            imageSrc: './img/playerOne/Death.png',
            framesMax: 6
        }
    },
});

const archersFlag = new Pawn({
    rotation: 0,
    position: {
        x: 543,
        y: 68
    },
    velocity: {
        x: 0,
        y: 0
    },
    offset: {
        x: 0,
        y: 0
    },
    imageSrc: './img/archers/ArchersFlag.png',
    framesMax: 4,
    scale: 1,
    offset: {
        x: 0,
        y: 0
    },
    sprites: {
        archersFlag: {
            imageSrc: './img/archers/ArchersFlag.png',
            framesMax: 4
        }
    }
});

const playerFlag = new Pawn({
    rotation: 0,
    position: {
        x: 20,
        y: 355
    },
    velocity: {
        x: 0,
        y: 0
    },
    offset: {
        x: 0,
        y: 0
    },
    imageSrc: './img/playerOne/PlayerFlag.png',
    framesMax: 4,
    scale: 1,
    offset: {
        x: 0,
        y: 0
    },
    sprites: {
        playerFlag: {
            imageSrc: './img/playerOne/PlayerFlag.png',
            framesMax: 4
        }
    },
});

const enemyFlag = new Pawn({
    rotation: 0,
    position: {
        x: 1067,
        y: 355
    },
    velocity: {
        x: 0,
        y: 0
    },
    offset: {
        x: 0,
        y: 0
    },
    imageSrc: './img/playerTwo/EnemyFlag.png',
    framesMax: 4,
    scale: 1,
    offset: {
        x: 0,
        y: 0
    },
    sprites: {
        enemyFlag: {
            imageSrc: './img/playerTwo/EnemyFlag.png',
            framesMax: 4
        }
    },
});

const keys = {
    // player keys
    a: {
        pressed: false
    },
    w: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    },
    q: {
        pressed: false
    },
    e: {
        pressed: false
    },
    c: {
        pressed: false
    },
    v: {
        pressed: false
    },
    f: {
        pressed: false
    },
    r: {
        pressed: false
    },
    z: {
        pressed: false
    },
    x: {
        pressed: false
    },
    t: {
        pressed: false
    },
    // enemy keys
    j: {
        pressed: false
    },
    i: {
        pressed: false
    },
    k: {
        pressed: false
    },
    l: {
        pressed: false
    },
    u: {
        pressed: false
    },
    o: {
        pressed: false
    },
    n: {
        pressed: false
    },
    b: {
        pressed: false
    },
    h: {
        pressed: false
    },
    y: {
        pressed: false
    },
    p: {
        pressed: false
    },
    m: {
        pressed: false
    },
    g: {
        pressed: false
    },
};

// Player Select
const players = [player, playerPawn1, playerPawn2];

let currentPlayerIndex = 0;

function selectNextPlayer() {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
};

// Enemy Select
const enemies = [enemy, enemyPawn1, enemyPawn2];

let currentEnemyIndex = 0;

function selectNextEnemy() {
    currentEnemyIndex = (currentEnemyIndex + 1) % enemies.length;
};

startCountdown(5);

function animate() {
    window.requestAnimationFrame(animate);
    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);
    background.update();
    // body.update();
    c.fillStyle = 'rgba(255, 255, 255, 0.15)';
    c.fillRect(0, 0, canvas.width, canvas.height);
    capturePoints.update();
    shadows.update();

    // Highlight Unit
    if (currentPlayerIndex === 0) {
        highlightPlayer.position.x = player.position.x;
        highlightPlayer.position.y = player.position.y;
        highlightPlayer.update();
    };
    if (currentPlayerIndex === 1) {
        highlightPlayer.position.x = playerPawn1.position.x;
        highlightPlayer.position.y = playerPawn1.position.y;
        highlightPlayer.update();
    };
    if (currentPlayerIndex === 2) {
        highlightPlayer.position.x = playerPawn2.position.x;
        highlightPlayer.position.y = playerPawn2.position.y;
        highlightPlayer.update();
    };
    if (currentEnemyIndex === 0) {
        highlightEnemy.position.x = enemy.position.x;
        highlightEnemy.position.y = enemy.position.y;
        highlightEnemy.update();
    };
    if (currentEnemyIndex === 1) {
        highlightEnemy.position.x = enemyPawn1.position.x;
        highlightEnemy.position.y = enemyPawn1.position.y;
        highlightEnemy.update();
    };
    if (currentEnemyIndex === 2) {
        highlightEnemy.position.x = enemyPawn2.position.x;
        highlightEnemy.position.y = enemyPawn2.position.y;
        highlightEnemy.update();
    };

    // update order
    archers1.update();
    archers2.update();
    playerPawn1.update();
    player.update();
    playerPawn2.update();
    enemyPawn1.update();
    enemy.update();
    enemyPawn2.update();

    // player velocity
    player.velocity.x = 0;
    player.velocity.y = 0;
    playerPawn1.velocity.x = 0;
    playerPawn1.velocity.y = 0;
    playerPawn2.velocity.x = 0;
    playerPawn2.velocity.y = 0;

    // enemy velocity
    enemy.velocity.x = 0;
    enemy.velocity.y = 0;
    enemyPawn1.velocity.x = 0;
    enemyPawn1.velocity.y = 0;
    enemyPawn2.velocity.x = 0;
    enemyPawn2.velocity.y = 0;

    // Highlight Stats
    if (currentPlayerIndex === 0) {
        selectStats1.position.x = 413;
        selectStats1.position.y = -3.7;
        selectStats1.update();
    };
    if (currentPlayerIndex === 1) {
        selectStats1.position.x = 63;
        selectStats1.position.y = -3.7;
        selectStats1.update();
    };
    if (currentPlayerIndex === 2) {
        selectStats1.position.x = 238;
        selectStats1.position.y = -3.7;
        selectStats1.update();
    };
    if (currentEnemyIndex === 0) {
        selectStats2.position.x = 658;
        selectStats2.position.y = -3.7;
        selectStats2.update();
    };
    if (currentEnemyIndex === 1) {
        selectStats2.position.x = 833;
        selectStats2.position.y = -3.7;
        selectStats2.update();
    };
    if (currentEnemyIndex === 2) {
        selectStats2.position.x = 1007;
        selectStats2.position.y = -3.7;
        selectStats2.update();
    };

    // Show Damage
    if (player.health <= 85) {
        displayDamage1.position.x = player.position.x;
        displayDamage1.position.y = player.position.y;
        displayDamage1.update();
    };
    if (playerPawn1.health <= 85) {
        displayDamage1.position.x = playerPawn1.position.x;
        displayDamage1.position.y = playerPawn1.position.y;
        displayDamage1.update();
    };
    if (playerPawn2.health <= 85) {
        displayDamage1.position.x = playerPawn2.position.x;
        displayDamage1.position.y = playerPawn2.position.y;
        displayDamage1.update();
    };
    if (enemy.health <= 85) {
        displayDamage2.position.x = enemy.position.x;
        displayDamage2.position.y = enemy.position.y;
        displayDamage2.update();
    };
    if (enemyPawn1.health <= 85) {
        displayDamage2.position.x = enemyPawn1.position.x;
        displayDamage2.position.y = enemyPawn1.position.y;
        displayDamage2.update();
    };
    if (enemyPawn2.health <= 85) {
        displayDamage2.position.x = enemyPawn2.position.x;
        displayDamage2.position.y = enemyPawn2.position.y;
        displayDamage2.update();
    };

    killBox.update();

    // // Archers Attack Player
    // if (!capturePoint2Collision({ rectangle1: player, rectangle2: capturePoints }) &&
    //     !capturePoint2Collision({ rectangle1: playerPawn1, rectangle2: capturePoints }) &&
    //     !capturePoint2Collision({ rectangle1: playerPawn2, rectangle2: capturePoints }) &&
    //     killBoxCollision({ rectangle1: player, rectangle2: killBox }) && player.isTurtle === false && archers1.isArchers === false && player.dead === false) {
    //     archers1.archers1ON();
    //     player.takeDamageMed();
    //     arrows.position.x = player.position.x;
    //     arrows.position.y = player.position.y;
    //     arrows.update();
    // } else if (!capturePoint2Collision({ rectangle1: player, rectangle2: capturePoints }) &&
    //     !capturePoint2Collision({ rectangle1: playerPawn1, rectangle2: capturePoints }) &&
    //     !capturePoint2Collision({ rectangle1: playerPawn2, rectangle2: capturePoints }) &&
    //     killBoxCollision({ rectangle1: player, rectangle2: killBox }) && player.isTurtle === true && archers1.isArchers === false && player.dead === false) {
    //     archers1.archers1ON();
    //     arrows.position.x = player.position.x;
    //     arrows.position.y = player.position.y;
    //     arrows.update();
    // } else if (!capturePoint2Collision({ rectangle1: player, rectangle2: capturePoints }) &&
    //     !capturePoint2Collision({ rectangle1: playerPawn1, rectangle2: capturePoints }) &&
    //     !capturePoint2Collision({ rectangle1: playerPawn2, rectangle2: capturePoints }) &&
    //     killBoxCollision({ rectangle1: playerPawn1, rectangle2: killBox }) && playerPawn1.isTurtle === false && archers1.isArchers === false && playerPawn1.dead === false) {
    //     archers1.archers1ON();
    //     playerPawn1.takeDamageMed();
    //     arrows.position.x = playerPawn1.position.x;
    //     arrows.position.y = playerPawn1.position.y;
    //     arrows.update();
    // } else if (!capturePoint2Collision({ rectangle1: player, rectangle2: capturePoints }) &&
    //     !capturePoint2Collision({ rectangle1: playerPawn1, rectangle2: capturePoints }) &&
    //     !capturePoint2Collision({ rectangle1: playerPawn2, rectangle2: capturePoints }) &&
    //     killBoxCollision({ rectangle1: playerPawn1, rectangle2: killBox }) && playerPawn1.isTurtle === true && archers1.isArchers === false && playerPawn1.dead === false) {
    //     archers1.archers1ON();
    //     arrows.position.x = playerPawn1.position.x;
    //     arrows.position.y = playerPawn1.position.y;
    //     arrows.update();
    // } else if (!capturePoint2Collision({ rectangle1: player, rectangle2: capturePoints }) &&
    //     !capturePoint2Collision({ rectangle1: playerPawn1, rectangle2: capturePoints }) &&
    //     !capturePoint2Collision({ rectangle1: playerPawn2, rectangle2: capturePoints }) &&
    //     killBoxCollision({ rectangle1: playerPawn2, rectangle2: killBox }) && playerPawn2.isTurtle === false && archers1.isArchers === false && playerPawn2.dead === false) {
    //     archers1.archers1ON();
    //     playerPawn2.takeDamageMed();
    //     arrows.position.x = playerPawn2.position.x;
    //     arrows.position.y = playerPawn2.position.y;
    //     arrows.update();
    // } else if (!capturePoint2Collision({ rectangle1: player, rectangle2: capturePoints }) &&
    //     !capturePoint2Collision({ rectangle1: playerPawn1, rectangle2: capturePoints }) &&
    //     !capturePoint2Collision({ rectangle1: playerPawn2, rectangle2: capturePoints }) &&
    //     killBoxCollision({ rectangle1: playerPawn2, rectangle2: killBox }) && playerPawn2.isTurtle === true && archers1.isArchers === false && playerPawn2.dead === false) {
    //     archers1.archers1ON();
    //     arrows.position.x = playerPawn2.position.x;
    //     arrows.position.y = playerPawn2.position.y;
    //     arrows.update();
    // } else {
    //     archers1.archers1OFF();
    // };

    // // Archers Attack Enemy
    // if (!capturePoint2Collision({ rectangle1: enemy, rectangle2: capturePoints }) &&
    //     !capturePoint2Collision({ rectangle1: enemyPawn1, rectangle2: capturePoints }) &&
    //     !capturePoint2Collision({ rectangle1: enemyPawn2, rectangle2: capturePoints }) &&
    //     killBoxCollision({ rectangle1: enemy, rectangle2: killBox }) && enemy.isTurtle === false && archers2.isArchers === false && enemy.dead === false) {
    //     archers2.archers1ON();
    //     enemy.takeDamageMed();
    //     arrows2.position.x = enemy.position.x;
    //     arrows2.position.y = enemy.position.y;
    //     arrows2.update();
    // } else if (!capturePoint2Collision({ rectangle1: enemy, rectangle2: capturePoints }) &&
    //     !capturePoint2Collision({ rectangle1: enemyPawn1, rectangle2: capturePoints }) &&
    //     !capturePoint2Collision({ rectangle1: enemyPawn2, rectangle2: capturePoints }) &&
    //     killBoxCollision({ rectangle1: enemy, rectangle2: killBox }) && enemy.isTurtle === true && archers2.isArchers === false && enemy.dead === false) {
    //     archers2.archers1ON();
    //     arrows2.position.x = enemy.position.x;
    //     arrows2.position.y = enemy.position.y;
    //     arrows2.update();
    // } else if (!capturePoint2Collision({ rectangle1: enemy, rectangle2: capturePoints }) &&
    //     !capturePoint2Collision({ rectangle1: enemyPawn1, rectangle2: capturePoints }) &&
    //     !capturePoint2Collision({ rectangle1: enemyPawn2, rectangle2: capturePoints }) &&
    //     killBoxCollision({ rectangle1: enemyPawn1, rectangle2: killBox }) && enemyPawn1.isTurtle === false && archers2.isArchers === false && enemyPawn1.dead === false) {
    //     archers2.archers1ON();
    //     enemyPawn1.takeDamageMed();
    //     arrows2.position.x = enemyPawn1.position.x;
    //     arrows2.position.y = enemyPawn1.position.y;
    //     arrows2.update();
    // } else if (!capturePoint2Collision({ rectangle1: enemy, rectangle2: capturePoints }) &&
    //     !capturePoint2Collision({ rectangle1: enemyPawn1, rectangle2: capturePoints }) &&
    //     !capturePoint2Collision({ rectangle1: enemyPawn2, rectangle2: capturePoints }) &&
    //     killBoxCollision({ rectangle1: enemyPawn1, rectangle2: killBox }) && enemyPawn1.isTurtle === true && archers2.isArchers === false && enemyPawn1.dead === false) {
    //     archers2.archers1ON();
    //     arrows2.position.x = enemyPawn1.position.x;
    //     arrows2.position.y = enemyPawn1.position.y;
    //     arrows2.update();
    // } else if (!capturePoint2Collision({ rectangle1: enemy, rectangle2: capturePoints }) &&
    //     !capturePoint2Collision({ rectangle1: enemyPawn1, rectangle2: capturePoints }) &&
    //     !capturePoint2Collision({ rectangle1: enemyPawn2, rectangle2: capturePoints }) &&
    //     killBoxCollision({ rectangle1: enemyPawn2, rectangle2: killBox }) && enemyPawn2.isTurtle === false && archers2.isArchers === false && enemyPawn2.dead === false) {
    //     archers2.archers1ON();
    //     enemyPawn2.takeDamageMed();
    //     arrows2.position.x = enemyPawn2.position.x;
    //     arrows2.position.y = enemyPawn2.position.y;
    //     arrows2.update();
    // } else if (!capturePoint2Collision({ rectangle1: enemy, rectangle2: capturePoints }) &&
    //     !capturePoint2Collision({ rectangle1: enemyPawn1, rectangle2: capturePoints }) &&
    //     !capturePoint2Collision({ rectangle1: enemyPawn2, rectangle2: capturePoints }) &&
    //     killBoxCollision({ rectangle1: enemyPawn2, rectangle2: killBox }) && enemyPawn2.isTurtle === true && archers2.isArchers === false && enemyPawn2.dead === false) {
    //     archers2.archers1ON();
    //     arrows2.position.x = enemyPawn2.position.x;
    //     arrows2.position.y = enemyPawn2.position.y;
    //     arrows2.update();
    // } else {
    //     archers2.archers1OFF();
    // };

    terrain.update();
    archersFlag.update();
    playerFlag.update();
    enemyFlag.update();

    // Capture Flag
    if ((capturePoint1Collision({ rectangle1: enemy, rectangle2: capturePoints }) ||
        capturePoint1Collision({ rectangle1: enemyPawn1, rectangle2: capturePoints }) ||
        capturePoint1Collision({ rectangle1: enemyPawn2, rectangle2: capturePoints })) &&
        playerFlag.position.y <= 455) {
        playerFlag.position.y += 0.05;
    };
    if ((capturePoint3Collision({ rectangle1: player, rectangle2: capturePoints }) ||
        capturePoint3Collision({ rectangle1: playerPawn1, rectangle2: capturePoints }) ||
        capturePoint3Collision({ rectangle1: playerPawn2, rectangle2: capturePoints })) &&
        enemyFlag.position.y <= 455) {
        enemyFlag.position.y += 0.05;
    };

    // Collision Movement
    if (rectangularCollision({ rectangle1: player, rectangle2: enemy })) {
        if (keys.d.pressed && player.lastKey === 'd' && player.idleState === false &&
            enemy.idleState === false &&
            currentPlayerIndex === 0 && player.position.x < 1220 &&
            !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
            player.velocity.x = 0.1;
            enemy.velocity.x = 0.1;
            player.velocity.y = 0;
            enemy.velocity.y = 0;
            player.isFighting = false;
            enemy.isFighting = false;
        } else if (keys.j.pressed && enemy.lastKey === 'j' && enemy.idleState === false &&
            player.idleState === false &&
            currentEnemyIndex === 0 && enemy.position.x < 1220 &&
            !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
            enemy.velocity.x = -0.1;
            player.velocity.x = -0.1;
            player.velocity.y = 0;
            enemy.velocity.y = 0;
            player.isFighting = false;
            enemy.isFighting = false;
        } else if (keys.c.pressed && player.lastKey === 'c' && player.isFighting === false && currentPlayerIndex === 0) {
            player.fightON();
        } else if (keys.n.pressed && enemy.lastKey === 'n' && enemy.isFighting === false && currentEnemyIndex === 0) {
            enemy.fightON();
        } else if (player.isFighting === true) {
            player.fightOFF();
        } else if (enemy.isFighting === true) {
            enemy.fightOFF();
        };
    };

    if (rectangularCollision({ rectangle1: player, rectangle2: enemyPawn1 })) {
        if (keys.d.pressed && player.lastKey === 'd' && player.idleState === false &&
            enemyPawn1.idleState === false &&
            currentPlayerIndex === 0 && player.position.x < 1220 &&
            !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
            player.velocity.x = 0.1;
            enemyPawn1.velocity.x = 0.1;
            player.velocity.y = 0;
            enemyPawn1.velocity.y = 0;
            player.isFighting = false;
            enemyPawn1.isFighting = false;
        } else if (keys.j.pressed && enemyPawn1.lastKey === 'j' && enemyPawn1.idleState === false &&
            player.idleState === false &&
            currentEnemyIndex === 1 && enemyPawn1.position.x < 1220 &&
            !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
            enemyPawn1.velocity.x = -0.1;
            player.velocity.x = -0.1;
            player.velocity.y = 0;
            enemyPawn1.velocity.y = 0;
            player.isFighting = false;
            enemyPawn1.isFighting = false;
        } else if (keys.c.pressed && player.lastKey === 'c' && player.isFighting === false && currentPlayerIndex === 0) {
            player.fightON();
        } else if (keys.n.pressed && enemyPawn1.lastKey === 'n' && enemyPawn1.isFighting === false && currentEnemyIndex === 1) {
            enemyPawn1.fightON();
        } else if (player.isFighting === true) {
            player.fightOFF();
        } else if (enemyPawn1.isFighting === true) {
            enemyPawn1.fightOFF();
        };
    };

    if (rectangularCollision({ rectangle1: player, rectangle2: enemyPawn2 })) {
        if (keys.d.pressed && player.lastKey === 'd' && player.idleState === false &&
            enemyPawn2.idleState === false &&
            currentPlayerIndex === 0 && player.position.x < 1220 &&
            !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
            player.velocity.x = 0.1;
            enemyPawn2.velocity.x = 0.1;
            player.velocity.y = 0;
            enemyPawn2.velocity.y = 0;
            player.isFighting = false;
            enemyPawn2.isFighting = false;
        } else if (keys.j.pressed && enemyPawn2.lastKey === 'j' && enemyPawn2.idleState === false &&
            player.idleState === false &&
            currentEnemyIndex === 2 && enemyPawn2.position.x < 1220 &&
            !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
            enemyPawn2.velocity.x = -0.1;
            player.velocity.x = -0.1;
            player.velocity.y = 0;
            enemyPawn2.velocity.y = 0;
            player.isFighting = false;
            enemyPawn2.isFighting = false;
        } else if (keys.c.pressed && player.lastKey === 'c' && player.isFighting === false && currentPlayerIndex === 0) {
            player.fightON();
        } else if (keys.n.pressed && enemyPawn2.lastKey === 'n' && enemyPawn2.isFighting === false && currentEnemyIndex === 2) {
            enemyPawn2.fightON();
        } else if (player.isFighting === true) {
            player.fightOFF();
        } else if (enemyPawn2.isFighting === true) {
            enemyPawn2.fightOFF();
        };
    };

    if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemy })) {
        if (keys.d.pressed && playerPawn1.lastKey === 'd' && playerPawn1.idleState === false &&
            enemy.idleState === false &&
            currentPlayerIndex === 1 && playerPawn1.position.x < 1220 &&
            !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
            playerPawn1.velocity.x = 0.1;
            enemy.velocity.x = 0.1;
            playerPawn1.velocity.y = 0;
            enemy.velocity.y = 0;
            playerPawn1.isFighting = false;
            enemy.isFighting = false;
        } else if (keys.j.pressed && enemy.lastKey === 'j' && enemy.idleState === false &&
            playerPawn1.idleState === false &&
            currentEnemyIndex === 0 && enemy.position.x < 1220 &&
            !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
            enemy.velocity.x = -0.1;
            playerPawn1.velocity.x = -0.1;
            playerPawn1.velocity.y = 0;
            enemy.velocity.y = 0;
            playerPawn1.isFighting = false;
            enemy.isFighting = false;
        } else if (keys.c.pressed && playerPawn1.lastKey === 'c' && playerPawn1.isFighting === false && currentPlayerIndex === 1) {
            playerPawn1.fightON();
        } else if (keys.n.pressed && enemy.lastKey === 'n' && enemy.isFighting === false && currentEnemyIndex === 0) {
            enemy.fightON();
        } else if (playerPawn1.isFighting === true) {
            playerPawn1.fightOFF();
        } else if (enemy.isFighting === true) {
            enemy.fightOFF();
        };
    };

    if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn1 })) {
        if (keys.d.pressed && playerPawn1.lastKey === 'd' && playerPawn1.idleState === false &&
            enemyPawn1.idleState === false &&
            currentPlayerIndex === 1 && playerPawn1.position.x < 1220 &&
            !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
            playerPawn1.velocity.x = 0.1;
            enemyPawn1.velocity.x = 0.1;
            playerPawn1.velocity.y = 0;
            enemyPawn1.velocity.y = 0;
            playerPawn1.isFighting = false;
            enemyPawn1.isFighting = false;
        } else if (keys.j.pressed && enemyPawn1.lastKey === 'j' && enemyPawn1.idleState === false &&
            playerPawn1.idleState === false &&
            currentEnemyIndex === 1 && enemyPawn1.position.x < 1220 &&
            !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
            enemyPawn1.velocity.x = -0.1;
            playerPawn1.velocity.x = -0.1;
            playerPawn1.velocity.y = 0;
            enemyPawn1.velocity.y = 0;
            playerPawn1.isFighting = false;
            enemyPawn1.isFighting = false;
        } else if (keys.c.pressed && playerPawn1.lastKey === 'c' && playerPawn1.isFighting === false && currentPlayerIndex === 1) {
            playerPawn1.fightON();
        } else if (keys.n.pressed && enemyPawn1.lastKey === 'n' && enemyPawn1.isFighting === false && currentEnemyIndex === 1) {
            enemyPawn1.fightON();
        } else if (playerPawn1.isFighting === true) {
            playerPawn1.fightOFF();
        } else if (enemyPawn1.isFighting === true) {
            enemyPawn1.fightOFF();
        };
    };

    if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn2 })) {
        if (keys.d.pressed && playerPawn1.lastKey === 'd' && playerPawn1.idleState === false &&
            enemyPawn2.idleState === false &&
            currentPlayerIndex === 1 && playerPawn1.position.x < 1220 &&
            !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
            playerPawn1.velocity.x = 0.1;
            enemyPawn2.velocity.x = 0.1;
            playerPawn1.velocity.y = 0;
            enemyPawn2.velocity.y = 0;
            playerPawn1.isFighting = false;
            enemyPawn2.isFighting = false;
        } else if (keys.j.pressed && enemyPawn2.lastKey === 'j' && enemyPawn2.idleState === false &&
            playerPawn1.idleState === false &&
            currentEnemyIndex === 2 && enemyPawn2.position.x < 1220 &&
            !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
            enemyPawn2.velocity.x = -0.1;
            playerPawn1.velocity.x = -0.1;
            playerPawn1.velocity.y = 0;
            enemyPawn2.velocity.y = 0;
            playerPawn1.isFighting = false;
            enemyPawn2.isFighting = false;
        } else if (keys.c.pressed && playerPawn1.lastKey === 'c' && playerPawn1.isFighting === false && currentPlayerIndex === 1) {
            playerPawn1.fightON();
        } else if (keys.n.pressed && enemyPawn2.lastKey === 'n' && enemyPawn2.isFighting === false && currentEnemyIndex === 2) {
            enemyPawn2.fightON();
        } else if (playerPawn1.isFighting === true) {
            playerPawn1.fightOFF();
        } else if (enemyPawn2.isFighting === true) {
            enemyPawn2.fightOFF();
        };
    };

    if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemy })) {
        if (keys.d.pressed && playerPawn2.lastKey === 'd' && playerPawn2.idleState === false &&
            enemy.idleState === false &&
            currentPlayerIndex === 2 && playerPawn2.position.x < 1220 &&
            !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
            playerPawn2.velocity.x = 0.1;
            enemy.velocity.x = 0.1;
            playerPawn2.velocity.y = 0;
            enemy.velocity.y = 0;
            playerPawn2.isFighting = false;
            enemy.isFighting = false;
        } else if (keys.j.pressed && enemy.lastKey === 'j' && enemy.idleState === false &&
            playerPawn2.idleState === false &&
            currentEnemyIndex === 0 && enemy.position.x < 1220 &&
            !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
            enemy.velocity.x = -0.1;
            playerPawn2.velocity.x = -0.1;
            playerPawn2.velocity.y = 0;
            enemy.velocity.y = 0;
            playerPawn2.isFighting = false;
            enemy.isFighting = false;
        } else if (keys.c.pressed && playerPawn2.lastKey === 'c' && playerPawn2.isFighting === false && currentPlayerIndex === 2) {
            playerPawn2.fightON();
        } else if (keys.n.pressed && enemy.lastKey === 'n' && enemy.isFighting === false && currentEnemyIndex === 0) {
            enemy.fightON();
        } else if (playerPawn2.isFighting === true) {
            playerPawn2.fightOFF();
        } else if (enemy.isFighting === true) {
            enemy.fightOFF();
        };
    };

    if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn1 })) {
        if (keys.d.pressed && playerPawn2.lastKey === 'd' && playerPawn2.idleState === false &&
            enemyPawn1.idleState === false &&
            currentPlayerIndex === 2 && playerPawn2.position.x < 1220 &&
            !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
            playerPawn2.velocity.x = 0.1;
            enemyPawn1.velocity.x = 0.1;
            playerPawn2.velocity.y = 0;
            enemyPawn1.velocity.y = 0;
            playerPawn2.isFighting = false;
            enemyPawn1.isFighting = false;
        } else if (keys.j.pressed && enemyPawn1.lastKey === 'j' && enemyPawn1.idleState === false &&
            playerPawn2.idleState === false &&
            currentEnemyIndex === 1 && enemyPawn1.position.x < 1220 &&
            !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
            enemyPawn1.velocity.x = -0.1;
            playerPawn2.velocity.x = -0.1;
            playerPawn2.velocity.y = 0;
            enemyPawn1.velocity.y = 0;
            playerPawn2.isFighting = false;
            enemyPawn1.isFighting = false;
        } else if (keys.c.pressed && playerPawn2.lastKey === 'c' && playerPawn2.isFighting === false && currentPlayerIndex === 2) {
            playerPawn2.fightON();
        } else if (keys.n.pressed && enemyPawn1.lastKey === 'n' && enemyPawn1.isFighting === false && currentEnemyIndex === 1) {
            enemyPawn1.fightON();
        } else if (playerPawn2.isFighting === true) {
            playerPawn2.fightOFF();
        } else if (enemyPawn1.isFighting === true) {
            enemyPawn1.fightOFF();
        };
    };

    if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn2 })) {
        if (keys.d.pressed && playerPawn2.lastKey === 'd' && playerPawn2.idleState === false &&
            enemyPawn2.idleState === false &&
            currentPlayerIndex === 2 && playerPawn2.position.x < 1220 &&
            !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
            playerPawn2.velocity.x = 0.1;
            enemyPawn2.velocity.x = 0.1;
            playerPawn2.velocity.y = 0;
            enemyPawn2.velocity.y = 0;
            playerPawn2.isFighting = false;
            enemyPawn2.isFighting = false;
        } else if (keys.j.pressed && enemyPawn2.lastKey === 'j' && enemyPawn2.idleState === false &&
            playerPawn2.idleState === false &&
            currentEnemyIndex === 2 && enemyPawn2.position.x < 1220 &&
            !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
            enemyPawn2.velocity.x = -0.1;
            playerPawn2.velocity.x = -0.1;
            playerPawn2.velocity.y = 0;
            enemyPawn2.velocity.y = 0;
            playerPawn2.isFighting = false;
            enemyPawn2.isFighting = false;
        } else if (keys.c.pressed && playerPawn2.lastKey === 'c' && playerPawn2.isFighting === false && currentPlayerIndex === 2) {
            playerPawn2.fightON();
        } else if (keys.n.pressed && enemyPawn2.lastKey === 'n' && enemyPawn2.isFighting === false && currentEnemyIndex === 2) {
            enemyPawn2.fightON();
        } else if (playerPawn2.isFighting === true) {
            playerPawn2.fightOFF();
        } else if (enemyPawn2.isFighting === true) {
            enemyPawn2.fightOFF();
        };
    };




    // // Rotation (Work in progress......)
    // function drawPlayer() {
    //   c.save();

    //   c.rotate(player.rotation);
    //   player.update()
    //   c.restore();
    // }

    // if (keys.e.pressed && player.lastKey === 'e') {
    //   player.rotation += Math.PI / 180;
    // }

    // drawPlayer();




    // *** Player CONTROLS ***
    if (!player.dead) {
        // Player Phalanx ON/OFF
        if (keys.r.pressed && player.lastKey === 'r' && player.idleState === true && currentPlayerIndex === 0) {
            player.phalanxON();
        } else if ((keys.z.pressed && player.lastKey === 'z' && player.idleState === false && currentPlayerIndex === 0) || player.stamina <= 10) {
            player.phalanxOFF();
        };

        // Player Turtle ON/OFF
        if (keys.t.pressed && player.lastKey === 't' && currentPlayerIndex === 0) {
            player.turtleON();
        } else if (keys.z.pressed && player.lastKey === 'z' && player.isTurtle === true && currentPlayerIndex === 0) {
            player.turtleOFF();
        } else if (keys.a.pressed && player.lastKey === 'a' && player.isTurtle === true && currentPlayerIndex === 0 &&
            player.position.x > 0 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
            player.velocity.x = -0.1;
            player.takeStaminaMin();
            player.switchSprite('turtleIdle');
        } else if (keys.d.pressed && player.lastKey === 'd' && player.isTurtle === true && currentPlayerIndex === 0 &&
            player.position.x < 1220 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
            player.velocity.x = 0.1;
            player.takeStaminaMin();
            player.switchSprite('turtleIdle');
        } else if (keys.w.pressed && player.lastKey === 'w' && player.isTurtle === true && currentPlayerIndex === 0 &&
            player.position.y > 0 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
            player.velocity.y = -0.1;
            player.takeStaminaMin();
            player.switchSprite('turtleIdle');
        } else if (keys.s.pressed && player.lastKey === 's' && player.isTurtle === true && currentPlayerIndex === 0 &&
            player.position.y < 550 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
            player.velocity.y = 0.1;
            player.takeStaminaMin();
            player.switchSprite('turtleIdle');
            // Player Idle Movement
        } else if (keys.a.pressed && player.lastKey === 'a' && player.idleState === true && currentPlayerIndex === 0 &&
            player.position.x > 0 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
            player.velocity.x = -0.5;
            player.takeStaminaMin();
            player.switchSprite('run');
        } else if (keys.a.pressed && player.lastKey === 'a' && player.idleState === true && currentPlayerIndex === 0 &&
            terrainCollision({ rectangle1: player, rectangle2: terrain })) {
            player.velocity.x = 5;
        } else if (keys.d.pressed && player.lastKey === 'd' && player.idleState === true && currentPlayerIndex === 0 &&
            player.position.x < 1220 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
            player.velocity.x = 0.5;
            player.takeStaminaMin();
            player.switchSprite('run');
        } else if (keys.d.pressed && player.lastKey === 'd' && player.idleState === true && currentPlayerIndex === 0 &&
            terrainCollision({ rectangle1: player, rectangle2: terrain })) {
            player.velocity.x = -5;
        } else if (keys.w.pressed && player.lastKey === 'w' && player.idleState === true && currentPlayerIndex === 0 &&
            player.position.y > 0 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
            player.velocity.y = -0.5;
            player.takeStaminaMin();
            player.switchSprite('run');
        } else if (keys.w.pressed && player.lastKey === 'w' && player.idleState === true && currentPlayerIndex === 0 &&
            terrainCollision({ rectangle1: player, rectangle2: terrain })) {
            player.velocity.y = 5;
        } else if (keys.s.pressed && player.lastKey === 's' && player.idleState === true && currentPlayerIndex === 0 &&
            player.position.y < 550 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
            player.velocity.y = 0.5;
            player.takeStaminaMin();
            player.switchSprite('run');
        } else if (keys.s.pressed && player.lastKey === 's' && player.idleState === true && currentPlayerIndex === 0 &&
            terrainCollision({ rectangle1: player, rectangle2: terrain })) {
            player.velocity.y = -5;
        } else if (player.idleState === true && player.isTurtle === false && currentPlayerIndex === 0) {
            player.regenStaminaMax();
            player.regenStrikeMax();
            player.switchSprite('idle');
        };

        // Player Phalanx Movement
        if (keys.a.pressed && player.lastKey === 'a' && player.idleState === false && currentPlayerIndex === 0 &&
            player.position.x > 0 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
            player.velocity.x = -0.1;
            player.takeStaminaMin();
            player.regenStrikeMin();
            player.switchSprite('phalanxMarch');
        } else if (keys.a.pressed && player.lastKey === 'a' && player.idleState === false && currentPlayerIndex === 0 &&
            terrainCollision({ rectangle1: player, rectangle2: terrain })) {
            player.velocity.x = 1;
        } else if (keys.d.pressed && player.lastKey === 'd' && player.idleState === false && currentPlayerIndex === 0 &&
            player.position.x < 1220 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
            player.velocity.x = 0.1;
            player.takeStaminaMin();
            player.regenStrikeMin();
            player.switchSprite('phalanxMarch');
        } else if (keys.d.pressed && player.lastKey === 'd' && player.idleState === false && currentPlayerIndex === 0 &&
            terrainCollision({ rectangle1: player, rectangle2: terrain })) {
            player.velocity.x = -1;
        } else if (keys.w.pressed && player.lastKey === 'w' && player.idleState === false && currentPlayerIndex === 0 &&
            player.position.y > 0 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
            player.velocity.y = -0.1;
            player.takeStaminaMin();
            player.regenStrikeMin();
            player.switchSprite('phalanxMarch');
        } else if (keys.w.pressed && player.lastKey === 'w' && player.idleState === false && currentPlayerIndex === 0 &&
            terrainCollision({ rectangle1: player, rectangle2: terrain })) {
            player.velocity.y = 1;
        } else if (keys.s.pressed && player.lastKey === 's' && player.idleState === false && currentPlayerIndex === 0 &&
            player.position.y < 550 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
            player.velocity.y = 0.1;
            player.takeStaminaMin();
            player.regenStrikeMin();
            player.switchSprite('phalanxMarch');
        } else if (keys.s.pressed && player.lastKey === 's' && player.idleState === false && currentPlayerIndex === 0 &&
            terrainCollision({ rectangle1: player, rectangle2: terrain })) {
            player.velocity.y = -1;
        } else if (player.isFighting === false && player.idleState === false && currentPlayerIndex === 0) {
            player.regenStaminaMed();
            player.regenStrikeMed();
            player.switchSprite('phalanxIdle');
        };

        // Player Idle Movement during Collision with Enemy
        if ((rectangularCollision({ rectangle1: player, rectangle2: enemy }) ||
            rectangularCollision({ rectangle1: player, rectangle2: enemyPawn1 }) ||
            rectangularCollision({ rectangle1: player, rectangle2: enemyPawn2 }))) {
            if (keys.a.pressed && player.lastKey === 'a' && player.idleState === true && currentPlayerIndex === 0 &&
                player.position.x > 0 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
                player.velocity.x = -0.1;
                player.takeDamageMin();
                player.takeStaminaMed();
                player.switchSprite('run');
            } else if (keys.d.pressed && player.lastKey === 'd' && player.idleState === true && currentPlayerIndex === 0 &&
                player.position.x < 1220 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
                player.velocity.x = 0.1;
                player.takeDamageMin();
                player.takeStaminaMed();
                player.switchSprite('run');
            } else if (keys.w.pressed && player.lastKey === 'w' && player.idleState === true && currentPlayerIndex === 0 &&
                player.position.y > 0 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
                player.velocity.y = -0.1;
                player.takeDamageMin();
                player.takeStaminaMed();
                player.switchSprite('run');
            } else if (keys.s.pressed && player.lastKey === 's' && player.idleState === true && currentPlayerIndex === 0 &&
                player.position.y < 550 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
                player.velocity.y = 0.1;
                player.takeDamageMin();
                player.takeStaminaMed();
                player.switchSprite('run');
            } else if (player.idleState === true && currentPlayerIndex === 0) {
                player.takeStaminaMed();
                player.switchSprite('idle');
            };
        };

        // Player Movement during Collision with Player
        if ((rectangularCollision({ rectangle1: player, rectangle2: playerPawn1 }) ||
            rectangularCollision({ rectangle1: player, rectangle2: playerPawn2 }))) {
            if (keys.a.pressed && player.lastKey === 'a' && currentPlayerIndex === 0 &&
                player.position.x > 0 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
                player.velocity.x = -0.1;
                player.switchSprite('run');
            } else if (keys.d.pressed && player.lastKey === 'd' && currentPlayerIndex === 0 &&
                player.position.x < 1220 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
                player.velocity.x = 0.1;
                player.switchSprite('run');
            } else if (keys.w.pressed && player.lastKey === 'w' && currentPlayerIndex === 0 &&
                player.position.y > 0 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
                player.velocity.y = -0.1;
                player.switchSprite('run');
            } else if (keys.s.pressed && player.lastKey === 's' && currentPlayerIndex === 0 &&
                player.position.y < 550 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
                player.velocity.y = 0.1;
                player.switchSprite('run');
            } else if (player.idleState === true && currentPlayerIndex === 0) {
                player.switchSprite('idle');
            };
        };

        // Player Ram Hits Enemy
        if (rectangularCollision({ rectangle1: player, rectangle2: enemy }) &&
            player.isRamming &&
            currentPlayerIndex === 0
        ) {
            enemy.takeDamageRam();
            enemy.takeStaminaMax();
            player.takeStaminaRam();
            player.isRamming = false;

            gsap.to('#enemyHealth', {
                width: enemy.health + '%'
            });
        };

        // Player Ram Hits EnemyPawn1
        if (rectangularCollision({ rectangle1: player, rectangle2: enemyPawn1 }) &&
            player.isRamming &&
            currentPlayerIndex === 0
        ) {
            enemyPawn1.takeDamageRam();
            enemyPawn1.takeStaminaMax();
            player.takeStaminaRam();
            player.isRamming = false;

            gsap.to('#enemyPawn1Health', {
                width: enemyPawn1.health + '%'
            });
        };

        // Player Ram Hits EnemyPawn2
        if (rectangularCollision({ rectangle1: player, rectangle2: enemyPawn2 }) &&
            player.isRamming &&
            currentPlayerIndex === 0
        ) {
            enemyPawn2.takeDamageRam();
            enemyPawn2.takeStaminaMax();
            player.takeStaminaRam();
            player.isRamming = false;

            gsap.to('#enemyPawn2Health', {
                width: enemyPawn2.health + '%'
            });
        };

        // Player Ram Attack misses
        if (player.isRamming && player.framesCurrent === 4 && currentPlayerIndex === 0) {
            player.takeStaminaRam();
            player.isRamming = false;
        };

        // Player Fight Hits Idle Enemy
        if (rectangularCollision({ rectangle1: player, rectangle2: enemy }) &&
            player.isFighting &&
            enemy.idleState === true
        ) {
            enemy.takeDamageMax();
            player.takeStaminaMin();

            gsap.to('#enemyHealth', {
                width: enemy.health + '%'
            });
        };

        // Player Fight Hits Idle EnemyPawn1
        if (rectangularCollision({ rectangle1: player, rectangle2: enemyPawn1 }) &&
            player.isFighting &&
            enemyPawn1.idleState === true
        ) {
            enemyPawn1.takeDamageMax();
            player.takeStaminaMin();

            gsap.to('#enemyPawn1Health', {
                width: enemyPawn1.health + '%'
            });
        };

        // Player Fight Hits Idle EnemyPawn2
        if (rectangularCollision({ rectangle1: player, rectangle2: enemyPawn2 }) &&
            player.isFighting &&
            enemyPawn2.idleState === true
        ) {
            enemyPawn2.takeDamageMax();
            player.takeStaminaMin();

            gsap.to('#enemyPawn2Health', {
                width: enemyPawn2.health + '%'
            });
        };

        // Player Fight Hits Phalanx Enemy
        if (rectangularCollision({ rectangle1: player, rectangle2: enemy }) &&
            player.isFighting &&
            player.stamina >= 1 &&
            enemy.idleState === false
        ) {
            enemy.takeDamageMin();
            player.takeStaminaMin();

            gsap.to('#enemyHealth', {
                width: enemy.health + '%'
            });
        };

        // Player Fight Hits Phalanx EnemyPawn1
        if (rectangularCollision({ rectangle1: player, rectangle2: enemyPawn1 }) &&
            player.isFighting &&
            enemyPawn1.idleState === false
        ) {
            enemyPawn1.takeDamageMin();
            player.takeStaminaMin();

            gsap.to('#enemyPawn1Health', {
                width: enemyPawn1.health + '%'
            });
        };

        // Player Fight Hits Phalanx EnemyPawn2
        if (rectangularCollision({ rectangle1: player, rectangle2: enemyPawn2 }) &&
            player.isFighting &&
            enemyPawn2.idleState === false
        ) {
            enemyPawn2.takeDamageMin();
            player.takeStaminaMin();

            gsap.to('#enemyPawn2Health', {
                width: enemyPawn2.health + '%'
            });
        };

        // Player Regen Stamina
        if (player.idleState === true && currentPlayerIndex != 0) {
            player.regenStaminaMax();
            player.regenStrikeMax();
        } else if (player.idleState === false && currentPlayerIndex != 0) {
            player.regenStaminaMed();
            player.regenStrikeMed();
        };
    };



    // *** PlayerPawn1 CONTROLS ***
    if (!playerPawn1.dead) {
        // PlayerPawn1 Phalanx ON/OFF
        if (keys.r.pressed && playerPawn1.lastKey === 'r' && playerPawn1.idleState === true && currentPlayerIndex === 1) {
            playerPawn1.phalanxON();
        } else if (keys.z.pressed && playerPawn1.lastKey === 'z' && playerPawn1.idleState === false && currentPlayerIndex === 1 || playerPawn1.stamina <= 10) {
            playerPawn1.phalanxOFF();
        };

        // PlayerPawn1 Turtle ON/OFF
        if (keys.t.pressed && playerPawn1.lastKey === 't' && currentPlayerIndex === 1) {
            playerPawn1.turtleON();
        } else if (keys.z.pressed && playerPawn1.lastKey === 'z' && playerPawn1.isTurtle === true && currentPlayerIndex === 1) {
            playerPawn1.turtleOFF();
        } else if (keys.a.pressed && playerPawn1.lastKey === 'a' && playerPawn1.isTurtle === true && currentPlayerIndex === 1 &&
            playerPawn1.position.x > 0 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
            playerPawn1.velocity.x = -0.1;
            playerPawn1.takeStaminaMin();
            playerPawn1.switchSprite('turtleIdle');
        } else if (keys.d.pressed && playerPawn1.lastKey === 'd' && playerPawn1.isTurtle === true && currentPlayerIndex === 1 &&
            playerPawn1.position.x < 1220 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
            playerPawn1.velocity.x = 0.1;
            playerPawn1.takeStaminaMin();
            playerPawn1.switchSprite('turtleIdle');
        } else if (keys.w.pressed && playerPawn1.lastKey === 'w' && playerPawn1.isTurtle === true && currentPlayerIndex === 1 &&
            playerPawn1.position.y > 0 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
            playerPawn1.velocity.y = -0.1;
            playerPawn1.takeStaminaMin();
            playerPawn1.switchSprite('turtleIdle');
        } else if (keys.s.pressed && playerPawn1.lastKey === 's' && playerPawn1.isTurtle === true && currentPlayerIndex === 1 &&
            playerPawn1.position.y < 550 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
            playerPawn1.velocity.y = 0.1;
            playerPawn1.takeStaminaMin();
            playerPawn1.switchSprite('turtleIdle');
            // PlayerPawn1 Idle Movement
        } else if (keys.a.pressed && playerPawn1.lastKey === 'a' && playerPawn1.idleState === true && currentPlayerIndex === 1 &&
            playerPawn1.position.x > 0 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
            playerPawn1.velocity.x = -0.5;
            playerPawn1.takeStaminaMin();
            playerPawn1.switchSprite('run');
        } else if (keys.a.pressed && playerPawn1.lastKey === 'a' && playerPawn1.idleState === true && currentPlayerIndex === 1 &&
            terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
            playerPawn1.velocity.x = 5;
        } else if (keys.d.pressed && playerPawn1.lastKey === 'd' && playerPawn1.idleState === true && currentPlayerIndex === 1 &&
            playerPawn1.position.x < 1220 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
            playerPawn1.velocity.x = 0.5;
            playerPawn1.takeStaminaMin();
            playerPawn1.switchSprite('run');
        } else if (keys.d.pressed && playerPawn1.lastKey === 'd' && playerPawn1.idleState === true && currentPlayerIndex === 1 &&
            terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
            playerPawn1.velocity.x = -5;
        } else if (keys.w.pressed && playerPawn1.lastKey === 'w' && playerPawn1.idleState === true && currentPlayerIndex === 1 &&
            playerPawn1.position.y > 0 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
            playerPawn1.velocity.y = -0.5;
            playerPawn1.takeStaminaMin();
            playerPawn1.switchSprite('run');
        } else if (keys.w.pressed && playerPawn1.lastKey === 'w' && playerPawn1.idleState === true && currentPlayerIndex === 1 &&
            terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
            playerPawn1.velocity.y = 5;
        } else if (keys.s.pressed && playerPawn1.lastKey === 's' && playerPawn1.idleState === true && currentPlayerIndex === 1 &&
            playerPawn1.position.y < 550 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
            playerPawn1.velocity.y = 0.5;
            playerPawn1.takeStaminaMin();
            playerPawn1.switchSprite('run');
        } else if (keys.s.pressed && playerPawn1.lastKey === 's' && playerPawn1.idleState === true && currentPlayerIndex === 1 &&
            terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
            playerPawn1.velocity.y = -5;
        } else if (playerPawn1.idleState === true && playerPawn1.isTurtle === false && currentPlayerIndex === 1) {
            playerPawn1.regenStaminaMax();
            playerPawn1.regenStrikeMax();
            playerPawn1.switchSprite('idle');
        };

        // PlayerPawn1 Phalanx Movement
        if (keys.a.pressed && playerPawn1.lastKey === 'a' && playerPawn1.idleState === false && currentPlayerIndex === 1 &&
            playerPawn1.position.x > 0 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
            playerPawn1.velocity.x = -0.1;
            playerPawn1.takeStaminaMin();
            playerPawn1.regenStrikeMin();
            playerPawn1.switchSprite('phalanxMarch');
        } else if (keys.a.pressed && playerPawn1.lastKey === 'a' && playerPawn1.idleState === false && currentPlayerIndex === 1 &&
            terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
            playerPawn1.velocity.x = 1;
        } else if (keys.d.pressed && playerPawn1.lastKey === 'd' && playerPawn1.idleState === false && currentPlayerIndex === 1 &&
            playerPawn1.position.x < 1220 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
            playerPawn1.velocity.x = 0.1;
            playerPawn1.takeStaminaMin();
            playerPawn1.regenStrikeMin();
            playerPawn1.switchSprite('phalanxMarch');
        } else if (keys.d.pressed && playerPawn1.lastKey === 'd' && playerPawn1.idleState === false && currentPlayerIndex === 1 &&
            terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
            playerPawn1.velocity.x = -1;
        } else if (keys.w.pressed && playerPawn1.lastKey === 'w' && playerPawn1.idleState === false && currentPlayerIndex === 1 &&
            playerPawn1.position.y > 0 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
            playerPawn1.velocity.y = -0.1;
            playerPawn1.takeStaminaMin();
            playerPawn1.regenStrikeMin();
            playerPawn1.switchSprite('phalanxMarch');
        } else if (keys.w.pressed && playerPawn1.lastKey === 'w' && playerPawn1.idleState === false && currentPlayerIndex === 1 &&
            terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
            playerPawn1.velocity.y = 1;
        } else if (keys.s.pressed && playerPawn1.lastKey === 's' && playerPawn1.idleState === false && currentPlayerIndex === 1 &&
            playerPawn1.position.y < 550 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
            playerPawn1.velocity.y = 0.1;
            playerPawn1.takeStaminaMin();
            playerPawn1.regenStrikeMin();
            playerPawn1.switchSprite('phalanxMarch');
        } else if (keys.s.pressed && playerPawn1.lastKey === 's' && playerPawn1.idleState === false && currentPlayerIndex === 1 &&
            terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
            playerPawn1.velocity.y = -1;
        } else if (playerPawn1.isFighting === false && playerPawn1.idleState === false && currentPlayerIndex === 1) {
            playerPawn1.regenStaminaMed();
            playerPawn1.regenStrikeMed();
            playerPawn1.switchSprite('phalanxIdle');
        };

        // PlayerPawn1 Idle Movement during Collision with Enemy
        if ((rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemy }) ||
            rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn1 }) ||
            rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn2 }))) {
            if (keys.a.pressed && playerPawn1.lastKey === 'a' && playerPawn1.idleState === true && currentPlayerIndex === 1 &&
                playerPawn1.position.x > 0 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
                playerPawn1.velocity.x = -0.1;
                playerPawn1.takeDamageMin();
                playerPawn1.takeStaminaMed();
                playerPawn1.switchSprite('run');
            } else if (keys.d.pressed && playerPawn1.lastKey === 'd' && playerPawn1.idleState === true && currentPlayerIndex === 1 &&
                playerPawn1.position.x < 1220 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
                playerPawn1.velocity.x = 0.1;
                playerPawn1.takeDamageMin();
                playerPawn1.takeStaminaMed();
                playerPawn1.switchSprite('run');
            } else if (keys.w.pressed && playerPawn1.lastKey === 'w' && playerPawn1.idleState === true && currentPlayerIndex === 1 &&
                playerPawn1.position.y > 0 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
                playerPawn1.velocity.y = -0.1;
                playerPawn1.takeDamageMin();
                playerPawn1.takeStaminaMed();
                playerPawn1.switchSprite('run');
            } else if (keys.s.pressed && playerPawn1.lastKey === 's' && playerPawn1.idleState === true && currentPlayerIndex === 1 &&
                playerPawn1.position.y < 550 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
                playerPawn1.velocity.y = 0.1;
                playerPawn1.takeDamageMin();
                playerPawn1.takeStaminaMed();
                playerPawn1.switchSprite('run');
            } else if (playerPawn1.idleState === true && currentPlayerIndex === 1) {
                playerPawn1.takeStaminaMed();
                playerPawn1.switchSprite('idle');
            };
        };

        // PlayerPawn1 Movement during Collision with Player
        if ((rectangularCollision({ rectangle1: playerPawn1, rectangle2: player }) ||
            rectangularCollision({ rectangle1: playerPawn1, rectangle2: playerPawn2 }))) {
            if (keys.a.pressed && playerPawn1.lastKey === 'a' && currentPlayerIndex === 1 &&
                playerPawn1.position.x > 0 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
                playerPawn1.velocity.x = -0.1;
                playerPawn1.switchSprite('run');
            } else if (keys.d.pressed && playerPawn1.lastKey === 'd' && currentPlayerIndex === 1 &&
                playerPawn1.position.x < 1220 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
                playerPawn1.velocity.x = 0.1;
                playerPawn1.switchSprite('run');
            } else if (keys.w.pressed && playerPawn1.lastKey === 'w' && currentPlayerIndex === 1 &&
                playerPawn1.position.y > 0 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
                playerPawn1.velocity.y = -0.1;
                playerPawn1.switchSprite('run');
            } else if (keys.s.pressed && playerPawn1.lastKey === 's' && currentPlayerIndex === 1 &&
                playerPawn1.position.y < 550 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
                playerPawn1.velocity.y = 0.1;
                playerPawn1.switchSprite('run');
            } else if (playerPawn1.idleState === true && currentPlayerIndex === 1) {
                playerPawn1.switchSprite('idle');
            };
        };

        // PlayerPawn1 Ram Hits Enemy
        if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemy }) &&
            playerPawn1.isRamming &&
            currentPlayerIndex === 1
        ) {
            enemy.takeDamageRam();
            enemy.takeStaminaMax();
            playerPawn1.takeStaminaRam();
            playerPawn1.isRamming = false;

            gsap.to('#enemyHealth', {
                width: enemy.health + '%'
            });
        };

        // PlayerPawn1 Ram Hits EnemyPawn1
        if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn1 }) &&
            playerPawn1.isRamming &&
            currentPlayerIndex === 1
        ) {
            enemyPawn1.takeDamageRam();
            enemyPawn1.takeStaminaMax();
            playerPawn1.takeStaminaRam();
            playerPawn1.isRamming = false;

            gsap.to('#enemyPawn1Health', {
                width: enemyPawn1.health + '%'
            });
        };

        // PlayerPawn1 Ram Hits EnemyPawn2
        if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn2 }) &&
            playerPawn1.isRamming &&
            currentPlayerIndex === 1
        ) {
            enemyPawn2.takeDamageRam();
            enemyPawn2.takeStaminaMax();
            playerPawn1.takeStaminaRam();
            playerPawn1.isRamming = false;

            gsap.to('#enemyPawn2Health', {
                width: enemyPawn2.health + '%'
            });
        };

        // PlayerPawn1 Ram Attack misses
        if (playerPawn1.isRamming && playerPawn1.framesCurrent === 4 && currentPlayerIndex === 1) {
            playerPawn1.takeStaminaRam();
            playerPawn1.isRamming = false;
        };

        // PlayerPawn1 Fight Hits Idle Enemy
        if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemy }) &&
            playerPawn1.isFighting &&
            enemy.idleState === true
        ) {
            enemy.takeDamageMax();
            playerPawn1.takeStaminaMin();

            gsap.to('#enemyHealth', {
                width: enemy.health + '%'
            });
        };

        // PlayerPawn1 Fight Hits Idle EnemyPawn1
        if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn1 }) &&
            playerPawn1.isFighting &&
            enemyPawn1.idleState === true
        ) {
            enemyPawn1.takeDamageMax();
            playerPawn1.takeStaminaMin();

            gsap.to('#enemyPawn1Health', {
                width: enemyPawn1.health + '%'
            });
        };

        // PlayerPawn1 Fight Hits Idle EnemyPawn2
        if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn2 }) &&
            playerPawn1.isFighting &&
            enemyPawn2.idleState === true
        ) {
            enemyPawn2.takeDamageMax();
            playerPawn1.takeStaminaMin();

            gsap.to('#enemyPawn2Health', {
                width: enemyPawn2.health + '%'
            });
        };

        // PlayerPawn1 Fight Hits Phalanx Enemy
        if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemy }) &&
            playerPawn1.isFighting &&
            playerPawn1.stamina >= 1 &&
            enemy.idleState === false
        ) {
            enemy.takeDamageMin();
            playerPawn1.takeStaminaMin();

            gsap.to('#enemyHealth', {
                width: enemy.health + '%'
            });
        };

        // PlayerPawn1 Fight Hits Phalanx EnemyPawn1
        if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn1 }) &&
            playerPawn1.isFighting &&
            enemyPawn1.idleState === false
        ) {
            enemyPawn1.takeDamageMin();
            playerPawn1.takeStaminaMin();

            gsap.to('#enemyPawn1Health', {
                width: enemyPawn1.health + '%'
            });
        };

        // PlayerPawn1 Fight Hits Phalanx EnemyPawn2
        if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn2 }) &&
            playerPawn1.isFighting &&
            enemyPawn2.idleState === false
        ) {
            enemyPawn2.takeDamageMin();
            playerPawn1.takeStaminaMin();

            gsap.to('#enemyPawn2Health', {
                width: enemyPawn2.health + '%'
            });
        };

        // PlayerPawn1 Regen Stamina
        if (playerPawn1.idleState === true && currentPlayerIndex != 1) {
            playerPawn1.regenStaminaMax();
            playerPawn1.regenStrikeMax();
        } else if (playerPawn1.idleState === false && currentPlayerIndex != 1) {
            playerPawn1.regenStaminaMed();
            playerPawn1.regenStrikeMed();
        };
    };


    // *** PlayerPawn2 CONTROLS ***
    if (!playerPawn2.dead) {
        // PlayerPawn2 Phalanx ON/OFF
        if (keys.r.pressed && playerPawn2.lastKey === 'r' && playerPawn2.idleState === true && currentPlayerIndex === 2) {
            playerPawn2.phalanxON();
        } else if (keys.z.pressed && playerPawn2.lastKey === 'z' && playerPawn2.idleState === false && currentPlayerIndex === 2 || playerPawn2.stamina <= 10) {
            playerPawn2.phalanxOFF();
        };

        // PlayerPawn2 Turtle ON/OFF
        if (keys.t.pressed && playerPawn2.lastKey === 't' && currentPlayerIndex === 2) {
            playerPawn2.turtleON();
        } else if (keys.z.pressed && playerPawn2.lastKey === 'z' && playerPawn2.isTurtle === true && currentPlayerIndex === 2) {
            playerPawn2.turtleOFF();
        } else if (keys.a.pressed && playerPawn2.lastKey === 'a' && playerPawn2.isTurtle === true && currentPlayerIndex === 2 &&
            playerPawn2.position.x > 0 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
            playerPawn2.velocity.x = -0.1;
            playerPawn2.takeStaminaMin();
            playerPawn2.switchSprite('turtleIdle');
        } else if (keys.d.pressed && playerPawn2.lastKey === 'd' && playerPawn2.isTurtle === true && currentPlayerIndex === 2 &&
            playerPawn2.position.x < 1220 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
            playerPawn2.velocity.x = 0.1;
            playerPawn2.takeStaminaMin();
            playerPawn2.switchSprite('turtleIdle');
        } else if (keys.w.pressed && playerPawn2.lastKey === 'w' && playerPawn2.isTurtle === true && currentPlayerIndex === 2 &&
            playerPawn2.position.y > 0 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
            playerPawn2.velocity.y = -0.1;
            playerPawn2.takeStaminaMin();
            playerPawn2.switchSprite('turtleIdle');
        } else if (keys.s.pressed && playerPawn2.lastKey === 's' && playerPawn2.isTurtle === true && currentPlayerIndex === 2 &&
            playerPawn2.position.y < 550 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
            playerPawn2.velocity.y = 0.1;
            playerPawn2.takeStaminaMin();
            playerPawn2.switchSprite('turtleIdle');
            // PlayerPawn2 Idle Movement
        } else if (keys.a.pressed && playerPawn2.lastKey === 'a' && playerPawn2.idleState === true && currentPlayerIndex === 2 &&
            playerPawn2.position.x > 0 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
            playerPawn2.velocity.x = -0.5;
            playerPawn2.takeStaminaMin();
            playerPawn2.switchSprite('run');
        } else if (keys.a.pressed && playerPawn2.lastKey === 'a' && playerPawn2.idleState === true && currentPlayerIndex === 2 &&
            terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
            playerPawn2.velocity.x = 5;
        } else if (keys.d.pressed && playerPawn2.lastKey === 'd' && playerPawn2.idleState === true && currentPlayerIndex === 2 &&
            playerPawn2.position.x < 1220 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
            playerPawn2.velocity.x = 0.5;
            playerPawn2.takeStaminaMin();
            playerPawn2.switchSprite('run');
        } else if (keys.d.pressed && playerPawn2.lastKey === 'd' && playerPawn2.idleState === true && currentPlayerIndex === 2 &&
            terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
            playerPawn2.velocity.x = -5;
        } else if (keys.w.pressed && playerPawn2.lastKey === 'w' && playerPawn2.idleState === true && currentPlayerIndex === 2 &&
            playerPawn2.position.y > 0 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
            playerPawn2.velocity.y = -0.5;
            playerPawn2.takeStaminaMin();
            playerPawn2.switchSprite('run');
        } else if (keys.w.pressed && playerPawn2.lastKey === 'w' && playerPawn2.idleState === true && currentPlayerIndex === 2 &&
            terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
            playerPawn2.velocity.y = 5;
        } else if (keys.s.pressed && playerPawn2.lastKey === 's' && playerPawn2.idleState === true && currentPlayerIndex === 2 &&
            playerPawn2.position.y < 550 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
            playerPawn2.velocity.y = 0.5;
            playerPawn2.takeStaminaMin();
            playerPawn2.switchSprite('run');
        } else if (keys.s.pressed && playerPawn2.lastKey === 's' && playerPawn2.idleState === true && currentPlayerIndex === 2 &&
            terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
            playerPawn2.velocity.y = -5;
        } else if (playerPawn2.idleState === true && playerPawn2.isTurtle === false && currentPlayerIndex === 2) {
            playerPawn2.regenStaminaMax();
            playerPawn2.regenStrikeMax();
            playerPawn2.switchSprite('idle');
        };

        // PlayerPawn2 Phalanx Movement
        if (keys.a.pressed && playerPawn2.lastKey === 'a' && playerPawn2.idleState === false && currentPlayerIndex === 2 &&
            playerPawn2.position.x > 0 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
            playerPawn2.velocity.x = -0.1;
            playerPawn2.takeStaminaMin();
            playerPawn2.regenStrikeMin();
            playerPawn2.switchSprite('phalanxMarch');
        } else if (keys.a.pressed && playerPawn2.lastKey === 'a' && playerPawn2.idleState === false && currentPlayerIndex === 2 &&
            terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
            playerPawn2.velocity.x = 1;
        } else if (keys.d.pressed && playerPawn2.lastKey === 'd' && playerPawn2.idleState === false && currentPlayerIndex === 2 &&
            playerPawn2.position.x < 1220 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
            playerPawn2.velocity.x = 0.1;
            playerPawn2.takeStaminaMin();
            playerPawn2.regenStrikeMin();
            playerPawn2.switchSprite('phalanxMarch');
        } else if (keys.d.pressed && playerPawn2.lastKey === 'd' && playerPawn2.idleState === false && currentPlayerIndex === 2 &&
            terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
            playerPawn2.velocity.x = -1;
        } else if (keys.w.pressed && playerPawn2.lastKey === 'w' && playerPawn2.idleState === false && currentPlayerIndex === 2 &&
            playerPawn2.position.y > 0 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
            playerPawn2.velocity.y = -0.1;
            playerPawn2.takeStaminaMin();
            playerPawn2.regenStrikeMin();
            playerPawn2.switchSprite('phalanxMarch');
        } else if (keys.w.pressed && playerPawn2.lastKey === 'w' && playerPawn2.idleState === false && currentPlayerIndex === 2 &&
            terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
            playerPawn2.velocity.y = 1;
        } else if (keys.s.pressed && playerPawn2.lastKey === 's' && playerPawn2.idleState === false && currentPlayerIndex === 2 &&
            playerPawn2.position.y < 550 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
            playerPawn2.velocity.y = 0.1;
            playerPawn2.takeStaminaMin();
            playerPawn2.regenStrikeMin();
            playerPawn2.switchSprite('phalanxMarch');
        } else if (keys.s.pressed && playerPawn2.lastKey === 's' && playerPawn2.idleState === false && currentPlayerIndex === 2 &&
            terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
            playerPawn2.velocity.y = -1;
        } else if (playerPawn2.isFighting === false && playerPawn2.idleState === false && currentPlayerIndex === 2) {
            playerPawn2.regenStaminaMed();
            playerPawn2.regenStrikeMed();
            playerPawn2.switchSprite('phalanxIdle');
        };

        // PlayerPawn2 Idle Movement during Collision with Enemy
        if ((rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemy }) ||
            rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn1 }) ||
            rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn2 }))) {
            if (keys.a.pressed && playerPawn2.lastKey === 'a' && playerPawn2.idleState === true && currentPlayerIndex === 2 &&
                playerPawn2.position.x > 0 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
                playerPawn2.velocity.x = -0.1;
                playerPawn2.takeDamageMin();
                playerPawn2.takeStaminaMed();
                playerPawn2.switchSprite('run');
            } else if (keys.d.pressed && playerPawn2.lastKey === 'd' && playerPawn2.idleState === true && currentPlayerIndex === 2 &&
                playerPawn2.position.x < 1220 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
                playerPawn2.velocity.x = 0.1;
                playerPawn2.takeDamageMin();
                playerPawn2.takeStaminaMed();
                playerPawn2.switchSprite('run');
            } else if (keys.w.pressed && playerPawn2.lastKey === 'w' && playerPawn2.idleState === true && currentPlayerIndex === 2 &&
                playerPawn2.position.y > 0 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
                playerPawn2.velocity.y = -0.1;
                playerPawn2.takeDamageMin();
                playerPawn2.takeStaminaMed();
                playerPawn2.switchSprite('run');
            } else if (keys.s.pressed && playerPawn2.lastKey === 's' && playerPawn2.idleState === true && currentPlayerIndex === 2 &&
                playerPawn2.position.y < 550 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
                playerPawn2.velocity.y = 0.1;
                playerPawn2.takeDamageMin();
                playerPawn2.takeStaminaMed();
                playerPawn2.switchSprite('run');
            } else if (playerPawn2.idleState === true && currentPlayerIndex === 2) {
                playerPawn2.takeStaminaMed();
                playerPawn2.switchSprite('idle');
            };
        };

        // PlayerPawn2 Movement during Collision with Player
        if ((rectangularCollision({ rectangle1: playerPawn2, rectangle2: player }) ||
            rectangularCollision({ rectangle1: playerPawn2, rectangle2: playerPawn1 }))) {
            if (keys.a.pressed && playerPawn2.lastKey === 'a' && currentPlayerIndex === 2 &&
                playerPawn2.position.x > 0 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
                playerPawn2.velocity.x = -0.1;
                playerPawn2.switchSprite('run');
            } else if (keys.d.pressed && playerPawn2.lastKey === 'd' && currentPlayerIndex === 2 &&
                playerPawn2.position.x < 1220 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
                playerPawn2.velocity.x = 0.1;
                playerPawn2.switchSprite('run');
            } else if (keys.w.pressed && playerPawn2.lastKey === 'w' && currentPlayerIndex === 2 &&
                playerPawn2.position.y > 0 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
                playerPawn2.velocity.y = -0.1;
                playerPawn2.switchSprite('run');
            } else if (keys.s.pressed && playerPawn2.lastKey === 's' && currentPlayerIndex === 2 &&
                playerPawn2.position.y < 550 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
                playerPawn2.velocity.y = 0.1;
                playerPawn2.switchSprite('run');
            } else if (playerPawn2.idleState === true && currentPlayerIndex === 2) {
                playerPawn2.switchSprite('idle');
            };
        };

        // PlayerPawn2 Ram Hits Enemy
        if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemy }) &&
            playerPawn2.isRamming &&
            currentPlayerIndex === 2
        ) {
            enemy.takeDamageRam();
            enemy.takeStaminaMax();
            playerPawn2.takeStaminaRam();
            playerPawn2.isRamming = false;

            gsap.to('#enemyHealth', {
                width: enemy.health + '%'
            });
        };

        // PlayerPawn2 Ram Hits EnemyPawn1
        if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn1 }) &&
            playerPawn2.isRamming &&
            currentPlayerIndex === 2
        ) {
            enemyPawn1.takeDamageRam();
            enemyPawn1.takeStaminaMax();
            playerPawn2.takeStaminaRam();
            playerPawn2.isRamming = false;

            gsap.to('#enemyPawn1Health', {
                width: enemyPawn1.health + '%'
            });
        };

        // PlayerPawn2 Ram Hits EnemyPawn2
        if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn2 }) &&
            playerPawn2.isRamming &&
            currentPlayerIndex === 2
        ) {
            enemyPawn2.takeDamageRam();
            enemyPawn2.takeStaminaMax();
            playerPawn2.takeStaminaRam();
            playerPawn2.isRamming = false;

            gsap.to('#enemyPawn2Health', {
                width: enemyPawn2.health + '%'
            });
        };

        // PlayerPawn2 Ram Attack misses
        if (playerPawn2.isRamming && playerPawn2.framesCurrent === 4 && currentPlayerIndex === 2) {
            playerPawn2.takeStaminaRam();
            playerPawn2.isRamming = false;
        };

        // PlayerPawn2 Fight Hits Idle Enemy
        if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemy }) &&
            playerPawn2.isFighting &&
            enemy.idleState === true
        ) {
            enemy.takeDamageMax();
            playerPawn2.takeStaminaMin();

            gsap.to('#enemyHealth', {
                width: enemy.health + '%'
            });
        };

        // PlayerPawn2 Fight Hits Idle EnemyPawn1
        if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn1 }) &&
            playerPawn2.isFighting &&
            enemyPawn1.idleState === true
        ) {
            enemyPawn1.takeDamageMax();
            playerPawn2.takeStaminaMin();

            gsap.to('#enemyPawn1Health', {
                width: enemyPawn1.health + '%'
            });
        };

        // PlayerPawn2 Fight Hits Idle EnemyPawn2
        if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn2 }) &&
            playerPawn2.isFighting &&
            enemyPawn2.idleState === true
        ) {
            enemyPawn2.takeDamageMax();
            playerPawn2.takeStaminaMin();

            gsap.to('#enemyPawn2Health', {
                width: enemyPawn2.health + '%'
            });
        };

        // PlayerPawn2 Fight Hits Phalanx Enemy
        if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemy }) &&
            playerPawn2.isFighting &&
            playerPawn2.stamina >= 1 &&
            enemy.idleState === false
        ) {
            enemy.takeDamageMin();
            playerPawn2.takeStaminaMin();

            gsap.to('#enemyHealth', {
                width: enemy.health + '%'
            });
        };

        // PlayerPawn2 Fight Hits Phalanx EnemyPawn1
        if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn1 }) &&
            playerPawn2.isFighting &&
            enemyPawn1.idleState === false
        ) {
            enemyPawn1.takeDamageMin();
            playerPawn2.takeStaminaMin();

            gsap.to('#enemyPawn1Health', {
                width: enemyPawn1.health + '%'
            });
        };

        // PlayerPawn2 Fight Hits Phalanx EnemyPawn2
        if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn2 }) &&
            playerPawn2.isFighting &&
            enemyPawn2.idleState === false
        ) {
            enemyPawn2.takeDamageMin();
            playerPawn2.takeStaminaMin();

            gsap.to('#enemyPawn2Health', {
                width: enemyPawn2.health + '%'
            });
        };

        // PlayerPawn2 Regen Stamina
        if (playerPawn2.idleState === true && currentPlayerIndex != 2) {
            playerPawn2.regenStaminaMax();
            playerPawn2.regenStrikeMax();
        } else if (playerPawn2.idleState === false && currentPlayerIndex != 2) {
            playerPawn2.regenStaminaMed();
            playerPawn2.regenStrikeMed();
        };
    };



    // // *** Enemy CONTROLS ***
    // if (!enemy.dead) {
    //     // Enemy Phalanx ON/OFF
    //     if (keys.y.pressed && enemy.lastKey === 'y' && enemy.idleState === true && currentEnemyIndex === 0) {
    //         enemy.phalanxON();
    //     } else if (keys.p.pressed && enemy.lastKey === 'p' && enemy.idleState === false && currentEnemyIndex === 0 || enemy.stamina <= 10) {
    //         enemy.phalanxOFF();
    //     };

    //     if (keys.y.pressed && enemyPawn1.lastKey === 'y' && enemyPawn1.idleState === true && currentEnemyIndex === 1) {
    //         enemyPawn1.phalanxON();
    //     } else if (keys.p.pressed && enemyPawn1.lastKey === 'p' && enemyPawn1.idleState === false && currentEnemyIndex === 1 || enemyPawn1.stamina <= 10) {
    //         enemyPawn1.phalanxOFF();
    //     };

    //     if (keys.y.pressed && enemyPawn2.lastKey === 'y' && enemyPawn2.idleState === true && currentEnemyIndex === 2) {
    //         enemyPawn2.phalanxON();
    //     } else if (keys.p.pressed && enemyPawn2.lastKey === 'p' && enemyPawn2.idleState === false && currentEnemyIndex === 2 || enemyPawn2.stamina <= 10) {
    //         enemyPawn2.phalanxOFF();
    //     };

    //     // Enemy Turtle ON/OFF
    //     if (keys.g.pressed && enemy.lastKey === 'g' && currentEnemyIndex === 0) {
    //         enemy.turtleON();
    //     } else if (keys.p.pressed && enemy.lastKey === 'p' && enemy.isTurtle === true && currentEnemyIndex === 0) {
    //         enemy.turtleOFF();
    //     } else if (keys.j.pressed && enemy.lastKey === 'j' && enemy.isTurtle === true && currentEnemyIndex === 0 &&
    //         enemy.position.x > 0 && !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
    //         enemy.velocity.x = -0.1;
    //         enemy.takeStaminaMin();
    //         enemy.switchSprite('turtleIdle');
    //     } else if (keys.l.pressed && enemy.lastKey === 'l' && enemy.isTurtle === true && currentEnemyIndex === 0 &&
    //         enemy.position.x < 1220 && !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
    //         enemy.velocity.x = 0.1;
    //         enemy.takeStaminaMin();
    //         enemy.switchSprite('turtleIdle');
    //     } else if (keys.i.pressed && enemy.lastKey === 'i' && enemy.isTurtle === true && currentEnemyIndex === 0 &&
    //         enemy.position.y > 0 && !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
    //         enemy.velocity.y = -0.1;
    //         enemy.takeStaminaMin();
    //         enemy.switchSprite('turtleIdle');
    //     } else if (keys.k.pressed && enemy.lastKey === 'k' && enemy.isTurtle === true && currentEnemyIndex === 0 &&
    //         enemy.position.y < 550 && !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
    //         enemy.velocity.y = 0.1;
    //         enemy.takeStaminaMin();
    //         enemy.switchSprite('turtleIdle');
    //         // Enemy Idle Movement
    //     } else if (keys.j.pressed && enemy.lastKey === 'j' && enemy.idleState === true && currentEnemyIndex === 0 &&
    //         enemy.position.x > 0 && !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
    //         enemy.velocity.x = -0.5;
    //         enemy.takeStaminaMin();
    //         enemy.switchSprite('run');
    //     } else if (keys.j.pressed && enemy.lastKey === 'j' && enemy.idleState === true && currentEnemyIndex === 0 &&
    //         terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
    //         enemy.velocity.x = 5;
    //     } else if (keys.l.pressed && enemy.lastKey === 'l' && enemy.idleState === true && currentEnemyIndex === 0 &&
    //         enemy.position.x < 1220 && !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
    //         enemy.velocity.x = 0.5;
    //         enemy.takeStaminaMin();
    //         enemy.switchSprite('run');
    //     } else if (keys.l.pressed && enemy.lastKey === 'l' && enemy.idleState === true && currentEnemyIndex === 0 &&
    //         terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
    //         enemy.velocity.x = -5;
    //     } else if (keys.i.pressed && enemy.lastKey === 'i' && enemy.idleState === true && currentEnemyIndex === 0 &&
    //         enemy.position.y > 0 && !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
    //         enemy.velocity.y = -0.5;
    //         enemy.takeStaminaMin();
    //         enemy.switchSprite('run');
    //     } else if (keys.i.pressed && enemy.lastKey === 'i' && enemy.idleState === true && currentEnemyIndex === 0 &&
    //         terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
    //         enemy.velocity.y = 5;
    //     } else if (keys.k.pressed && enemy.lastKey === 'k' && enemy.idleState === true && currentEnemyIndex === 0 &&
    //         enemy.position.y < 550 && !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
    //         enemy.velocity.y = 0.5;
    //         enemy.takeStaminaMin();
    //         enemy.switchSprite('run');
    //     } else if (keys.k.pressed && enemy.lastKey === 'k' && enemy.idleState === true && currentEnemyIndex === 0 &&
    //         terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
    //         enemy.velocity.y = -5;
    //     } else if (enemy.idleState === true && enemy.isTurtle === false && currentEnemyIndex === 0) {
    //         enemy.regenStaminaMax();
    //         enemy.regenStrikeMax();
    //         enemy.switchSprite('idle');
    //     };

    //     // Enemy Phalanx Movement
    //     if (keys.j.pressed && enemy.lastKey === 'j' && enemy.idleState === false && currentEnemyIndex === 0 &&
    //         enemy.position.x > 0 && !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
    //         enemy.velocity.x = -0.1;
    //         enemy.takeStaminaMin();
    //         enemy.regenStrikeMin();
    //         enemy.switchSprite('phalanxMarch');
    //     } else if (keys.j.pressed && enemy.lastKey === 'j' && enemy.idleState === false && currentEnemyIndex === 0 &&
    //         terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
    //         enemy.velocity.x = 1;
    //     } else if (keys.l.pressed && enemy.lastKey === 'l' && enemy.idleState === false && currentEnemyIndex === 0 &&
    //         enemy.position.x < 1220 && !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
    //         enemy.velocity.x = 0.1;
    //         enemy.takeStaminaMin();
    //         enemy.regenStrikeMin();
    //         enemy.switchSprite('phalanxMarch');
    //     } else if (keys.l.pressed && enemy.lastKey === 'l' && enemy.idleState === false && currentEnemyIndex === 0 &&
    //         terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
    //         enemy.velocity.x = -1;
    //     } else if (keys.i.pressed && enemy.lastKey === 'i' && enemy.idleState === false && currentEnemyIndex === 0 &&
    //         enemy.position.y > 0 && !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
    //         enemy.velocity.y = -0.1;
    //         enemy.takeStaminaMin();
    //         enemy.regenStrikeMin();
    //         enemy.switchSprite('phalanxMarch');
    //     } else if (keys.i.pressed && enemy.lastKey === 'i' && enemy.idleState === false && currentEnemyIndex === 0 &&
    //         terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
    //         enemy.velocity.y = 1;
    //     } else if (keys.k.pressed && enemy.lastKey === 'k' && enemy.idleState === false && currentEnemyIndex === 0 &&
    //         enemy.position.y < 550 && !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
    //         enemy.velocity.y = 0.1;
    //         enemy.takeStaminaMin();
    //         enemy.regenStrikeMin();
    //         enemy.switchSprite('phalanxMarch');
    //     } else if (keys.k.pressed && enemy.lastKey === 'k' && enemy.idleState === false && currentEnemyIndex === 0 &&
    //         terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
    //         enemy.velocity.y = -1;
    //     } else if (enemy.isFighting === false && enemy.idleState === false && currentEnemyIndex === 0) {
    //         enemy.regenStaminaMed();
    //         enemy.regenStrikeMed();
    //         enemy.switchSprite('phalanxIdle');
    //     };

    //     // Enemy Idle Movement during Collision with Player
    //     if ((rectangularCollision({ rectangle1: player, rectangle2: enemy }) ||
    //         rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemy }) ||
    //         rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemy }))) {
    //         if (keys.j.pressed && enemy.lastKey === 'j' && enemy.idleState === true && currentEnemyIndex === 0 &&
    //             enemy.position.x > 0 && !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
    //             enemy.velocity.x = -0.1;
    //             enemy.takeDamageMin();
    //             enemy.takeStaminaMed();
    //             enemy.switchSprite('run');
    //         } else if (keys.l.pressed && enemy.lastKey === 'l' && enemy.idleState === true && currentEnemyIndex === 0 &&
    //             enemy.position.x < 1220 && !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
    //             enemy.velocity.x = 0.1;
    //             enemy.takeDamageMin();
    //             enemy.takeStaminaMed();
    //             enemy.switchSprite('run');
    //         } else if (keys.i.pressed && enemy.lastKey === 'i' && enemy.idleState === true && currentEnemyIndex === 0 &&
    //             enemy.position.y > 0 && !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
    //             enemy.velocity.y = -0.1;
    //             enemy.takeDamageMin();
    //             enemy.takeStaminaMed();
    //             enemy.switchSprite('run');
    //         } else if (keys.k.pressed && enemy.lastKey === 'k' && enemy.idleState === true && currentEnemyIndex === 0 &&
    //             enemy.position.y < 550 && !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
    //             enemy.velocity.y = 0.1;
    //             enemy.takeDamageMin();
    //             enemy.takeStaminaMed();
    //             enemy.switchSprite('run');
    //         } else if (enemy.idleState === true && currentEnemyIndex === 0) {
    //             enemy.takeStaminaMed();
    //             enemy.switchSprite('idle');
    //         };
    //     };

    //     // Enemy Movement during Collision with Enemy
    //     if ((rectangularCollision({ rectangle1: enemyPawn1, rectangle2: enemy }) ||
    //         rectangularCollision({ rectangle1: enemyPawn2, rectangle2: enemy }))) {
    //         if (keys.j.pressed && enemy.lastKey === 'j' && currentEnemyIndex === 0 &&
    //             player.position.x > 0 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
    //             enemy.velocity.x = -0.1;
    //             enemy.switchSprite('run');
    //         } else if (keys.l.pressed && enemy.lastKey === 'l' && currentEnemyIndex === 0 &&
    //             player.position.x < 1220 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
    //             enemy.velocity.x = 0.1;
    //             enemy.switchSprite('run');
    //         } else if (keys.i.pressed && enemy.lastKey === 'i' && currentEnemyIndex === 0 &&
    //             player.position.y > 0 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
    //             enemy.velocity.y = -0.1;
    //             enemy.switchSprite('run');
    //         } else if (keys.k.pressed && enemy.lastKey === 'k' && currentEnemyIndex === 0 &&
    //             player.position.y < 550 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
    //             enemy.velocity.y = 0.1;
    //             enemy.switchSprite('run');
    //         } else if (enemy.idleState === true && currentEnemyIndex === 0) {
    //             enemy.switchSprite('idle');
    //         };
    //     };

    //     // Enemy Ram Hits Player
    //     if (rectangularCollision({ rectangle1: player, rectangle2: enemy }) &&
    //         enemy.isRamming &&
    //         currentEnemyIndex === 0
    //     ) {
    //         player.takeDamageRam();
    //         player.takeStaminaMax();
    //         enemy.takeStaminaRam();
    //         enemy.isRamming = false;

    //         gsap.to('#playerHealth', {
    //             width: player.health + '%'
    //         });
    //     };

    //     // Enemy Ram Hits PlayerPawn1
    //     if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemy }) &&
    //         enemy.isRamming &&
    //         currentEnemyIndex === 0
    //     ) {
    //         playerPawn1.takeDamageRam();
    //         playerPawn1.takeStaminaMax();
    //         enemy.takeStaminaRam();
    //         enemy.isRamming = false;

    //         gsap.to('#playerPawn1Health', {
    //             width: playerPawn1.health + '%'
    //         });
    //     };

    //     // Enemy Ram Hits PlayerPawn2
    //     if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemy }) &&
    //         enemy.isRamming &&
    //         currentEnemyIndex === 0
    //     ) {
    //         playerPawn2.takeDamageRam();
    //         playerPawn2.takeStaminaMax();
    //         enemy.takeStaminaRam();
    //         enemy.isRamming = false;

    //         gsap.to('#playerPawn2Health', {
    //             width: playerPawn2.health + '%'
    //         });
    //     };

    //     // Enemy Ram misses
    //     if (enemy.isRamming && enemy.framesCurrent === 4 &&
    //         currentEnemyIndex === 0) {
    //         enemy.takeStaminaRam();
    //         enemy.isRamming = false;
    //     };

    //     // Enemy Fight Hits Idle Player
    //     if (rectangularCollision({ rectangle1: player, rectangle2: enemy }) &&
    //         enemy.isFighting &&
    //         player.idleState === true
    //     ) {
    //         player.takeDamageMax();
    //         enemy.takeStaminaMin();

    //         gsap.to('#playerHealth', {
    //             width: player.health + '%'
    //         });
    //     };

    //     // Enemy Fight Hits Idle PlayerPawn1
    //     if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemy }) &&
    //         enemy.isFighting &&
    //         playerPawn1.idleState === true
    //     ) {
    //         playerPawn1.takeDamageMax();
    //         enemy.takeStaminaMin();

    //         gsap.to('#playerPawn1Health', {
    //             width: playerPawn1.health + '%'
    //         });
    //     };

    //     // Enemy Fight Hits Idle PlayerPawn2
    //     if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemy }) &&
    //         enemy.isFighting &&
    //         playerPawn2.idleState === true
    //     ) {
    //         playerPawn2.takeDamageMax();
    //         enemy.takeStaminaMin();

    //         gsap.to('#playerPawn2Pawn1Health', {
    //             width: playerPawn2.health + '%'
    //         });
    //     };

    //     // Enemy Fight hits Phalanx Player
    //     if (rectangularCollision({ rectangle1: player, rectangle2: enemy }) &&
    //         enemy.isFighting &&
    //         enemy.stamina >= 1 &&
    //         player.idleState === false
    //     ) {
    //         player.takeDamageMin();
    //         enemy.takeStaminaMin();

    //         gsap.to('#playerHealth', {
    //             width: player.health + '%'
    //         });
    //     };

    //     // Enemy Fight hits Phalanx PlayerPawn1
    //     if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemy }) &&
    //         enemy.isFighting &&
    //         enemy.stamina >= 1 &&
    //         playerPawn1.idleState === false
    //     ) {
    //         playerPawn1.takeDamageMin();
    //         enemy.takeStaminaMin();

    //         gsap.to('#playerPawn1Health', {
    //             width: playerPawn1.health + '%'
    //         });
    //     };

    //     // Enemy Fight hits Phalanx PlayerPawn2
    //     if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemy }) &&
    //         enemy.isFighting &&
    //         enemy.stamina >= 1 &&
    //         playerPawn2.idleState === false
    //     ) {
    //         playerPawn2.takeDamageMin();
    //         enemy.takeStaminaMin();

    //         gsap.to('#playerPawn2Health', {
    //             width: playerPawn2.health + '%'
    //         });
    //     };

    //     // Enemy Regen Stamina
    //     if (enemy.idleState === true && currentEnemyIndex != 0) {
    //         enemy.regenStaminaMax();
    //         enemy.regenStrikeMax();
    //     } else if (enemy.idleState === false && currentEnemyIndex != 0) {
    //         enemy.regenStaminaMed();
    //         enemy.regenStrikeMed();
    //     };
    // };



    // // *** EnemyPawn1 CONTROLS ***
    // if (!enemyPawn1.dead) {
    //     // EnemyPawn1 Phalanx ON/OFF
    //     if (keys.y.pressed && enemyPawn1.lastKey === 'y' && enemyPawn1.idleState === true && currentEnemyIndex === 1) {
    //         enemyPawn1.phalanxON();
    //     } else if (keys.p.pressed && enemyPawn1.lastKey === 'p' && enemyPawn1.idleState === false && currentEnemyIndex === 1 || enemyPawn1.stamina <= 10) {
    //         enemyPawn1.phalanxOFF();
    //     };

    //     // EnemyPawn1 Turtle ON/OFF
    //     if (keys.g.pressed && enemyPawn1.lastKey === 'g' && currentEnemyIndex === 1) {
    //         enemyPawn1.turtleON();
    //     } else if (keys.p.pressed && enemyPawn1.lastKey === 'p' && enemyPawn1.isTurtle === true && currentEnemyIndex === 1) {
    //         enemyPawn1.turtleOFF();
    //     } else if (keys.j.pressed && enemyPawn1.lastKey === 'j' && enemyPawn1.isTurtle === true && currentEnemyIndex === 1 &&
    //         enemyPawn1.position.x > 0 && !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
    //         enemyPawn1.velocity.x = -0.1;
    //         enemyPawn1.takeStaminaMin();
    //         enemyPawn1.switchSprite('turtleIdle');
    //     } else if (keys.l.pressed && enemyPawn1.lastKey === 'l' && enemyPawn1.isTurtle === true && currentEnemyIndex === 1 &&
    //         enemyPawn1.position.x < 1220 && !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
    //         enemyPawn1.velocity.x = 0.1;
    //         enemyPawn1.takeStaminaMin();
    //         enemyPawn1.switchSprite('turtleIdle');
    //     } else if (keys.i.pressed && enemyPawn1.lastKey === 'i' && enemyPawn1.isTurtle === true && currentEnemyIndex === 1 &&
    //         enemyPawn1.position.y > 0 && !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
    //         enemyPawn1.velocity.y = -0.1;
    //         enemyPawn1.takeStaminaMin();
    //         enemyPawn1.switchSprite('turtleIdle');
    //     } else if (keys.k.pressed && enemyPawn1.lastKey === 'k' && enemyPawn1.isTurtle === true && currentEnemyIndex === 1 &&
    //         enemyPawn1.position.y < 550 && !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
    //         enemyPawn1.velocity.y = 0.1;
    //         enemyPawn1.takeStaminaMin();
    //         enemyPawn1.switchSprite('turtleIdle');
    //         // EnemyPawn1 Idle Movement
    //     } else if (keys.j.pressed && enemyPawn1.lastKey === 'j' && enemyPawn1.idleState === true && currentEnemyIndex === 1 &&
    //         enemyPawn1.position.x > 0 && !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
    //         enemyPawn1.velocity.x = -0.5;
    //         enemyPawn1.takeStaminaMin();
    //         enemyPawn1.switchSprite('run');
    //     } else if (keys.j.pressed && enemyPawn1.lastKey === 'j' && enemyPawn1.idleState === true && currentEnemyIndex === 1 &&
    //         terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
    //         enemyPawn1.velocity.x = 5;
    //     } else if (keys.l.pressed && enemyPawn1.lastKey === 'l' && enemyPawn1.idleState === true && currentEnemyIndex === 1 &&
    //         enemyPawn1.position.x < 1220 && !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
    //         enemyPawn1.velocity.x = 0.5;
    //         enemyPawn1.takeStaminaMin();
    //         enemyPawn1.switchSprite('run');
    //     } else if (keys.l.pressed && enemyPawn1.lastKey === 'l' && enemyPawn1.idleState === true && currentEnemyIndex === 1 &&
    //         terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
    //         enemyPawn1.velocity.x = -5;
    //     } else if (keys.i.pressed && enemyPawn1.lastKey === 'i' && enemyPawn1.idleState === true && currentEnemyIndex === 1 &&
    //         enemyPawn1.position.y > 0 && !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
    //         enemyPawn1.velocity.y = -0.5;
    //         enemyPawn1.takeStaminaMin();
    //         enemyPawn1.switchSprite('run');
    //     } else if (keys.i.pressed && enemyPawn1.lastKey === 'i' && enemyPawn1.idleState === true && currentEnemyIndex === 1 &&
    //         terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
    //         enemyPawn1.velocity.y = 5;
    //     } else if (keys.k.pressed && enemyPawn1.lastKey === 'k' && enemyPawn1.idleState === true && currentEnemyIndex === 1 &&
    //         enemyPawn1.position.y < 550 && !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
    //         enemyPawn1.velocity.y = 0.5;
    //         enemyPawn1.takeStaminaMin();
    //         enemyPawn1.switchSprite('run');
    //     } else if (keys.k.pressed && enemyPawn1.lastKey === 'k' && enemyPawn1.idleState === true && currentEnemyIndex === 1 &&
    //         terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
    //         enemyPawn1.velocity.y = -5;
    //     } else if (enemyPawn1.idleState === true && enemyPawn1.isTurtle === false && currentEnemyIndex === 1) {
    //         enemyPawn1.regenStaminaMax();
    //         enemyPawn1.regenStrikeMax();
    //         enemyPawn1.switchSprite('idle');
    //     };

    //     // EnemyPawn1 Phalanx Movement
    //     if (keys.j.pressed && enemyPawn1.lastKey === 'j' && enemyPawn1.idleState === false && currentEnemyIndex === 1 &&
    //         enemyPawn1.position.x > 0 && !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
    //         enemyPawn1.velocity.x = -0.1;
    //         enemyPawn1.takeStaminaMin();
    //         enemyPawn1.regenStrikeMin();
    //         enemyPawn1.switchSprite('phalanxMarch');
    //     } else if (keys.j.pressed && enemyPawn1.lastKey === 'j' && enemyPawn1.idleState === false && currentEnemyIndex === 1 &&
    //         terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
    //         enemyPawn1.velocity.x = 1;
    //     } else if (keys.l.pressed && enemyPawn1.lastKey === 'l' && enemyPawn1.idleState === false && currentEnemyIndex === 1 &&
    //         enemyPawn1.position.x < 1220 && !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
    //         enemyPawn1.velocity.x = 0.1;
    //         enemyPawn1.takeStaminaMin();
    //         enemyPawn1.regenStrikeMin();
    //         enemyPawn1.switchSprite('phalanxMarch');
    //     } else if (keys.l.pressed && enemyPawn1.lastKey === 'l' && enemyPawn1.idleState === false && currentEnemyIndex === 1 &&
    //         terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
    //         enemyPawn1.velocity.x = -1;
    //     } else if (keys.i.pressed && enemyPawn1.lastKey === 'i' && enemyPawn1.idleState === false && currentEnemyIndex === 1 &&
    //         enemyPawn1.position.y > 0 && !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
    //         enemyPawn1.velocity.y = -0.1;
    //         enemyPawn1.takeStaminaMin();
    //         enemyPawn1.regenStrikeMin();
    //         enemyPawn1.switchSprite('phalanxMarch');
    //     } else if (keys.i.pressed && enemyPawn1.lastKey === 'i' && enemyPawn1.idleState === false && currentEnemyIndex === 1 &&
    //         terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
    //         enemyPawn1.velocity.y = 1;
    //     } else if (keys.k.pressed && enemyPawn1.lastKey === 'k' && enemyPawn1.idleState === false && currentEnemyIndex === 1 &&
    //         enemyPawn1.position.y < 550 && !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
    //         enemyPawn1.velocity.y = 0.1;
    //         enemyPawn1.takeStaminaMin();
    //         enemyPawn1.regenStrikeMin();
    //         enemyPawn1.switchSprite('phalanxMarch');
    //     } else if (keys.k.pressed && enemyPawn1.lastKey === 'k' && enemyPawn1.idleState === false && currentEnemyIndex === 1 &&
    //         terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
    //         enemyPawn1.velocity.y = -1;
    //     } else if (enemyPawn1.isFighting === false && enemyPawn1.idleState === false && currentEnemyIndex === 1) {
    //         enemyPawn1.regenStaminaMed();
    //         enemyPawn1.regenStrikeMed();
    //         enemyPawn1.switchSprite('phalanxIdle');
    //     };

    //     // EnemyPawn1 Idle Movement during Collision with Player
    //     if ((rectangularCollision({ rectangle1: player, rectangle2: enemyPawn1 }) ||
    //         rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn1 }) ||
    //         rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn1 }))) {
    //         if (keys.j.pressed && enemyPawn1.lastKey === 'j' && enemyPawn1.idleState === true && currentEnemyIndex === 1 &&
    //             enemyPawn1.position.x > 0 && !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
    //             enemyPawn1.velocity.x = -0.1;
    //             enemyPawn1.takeDamageMin();
    //             enemyPawn1.takeStaminaMed();
    //             enemyPawn1.switchSprite('run');
    //         } else if (keys.l.pressed && enemyPawn1.lastKey === 'l' && enemyPawn1.idleState === true && currentEnemyIndex === 1 &&
    //             enemyPawn1.position.x < 1220 && !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
    //             enemyPawn1.velocity.x = 0.1;
    //             enemyPawn1.takeDamageMin();
    //             enemyPawn1.takeStaminaMed();
    //             enemyPawn1.switchSprite('run');
    //         } else if (keys.i.pressed && enemyPawn1.lastKey === 'i' && enemyPawn1.idleState === true && currentEnemyIndex === 1 &&
    //             enemyPawn1.position.y > 0 && !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
    //             enemyPawn1.velocity.y = -0.1;
    //             enemyPawn1.takeDamageMin();
    //             enemyPawn1.takeStaminaMed();
    //             enemyPawn1.switchSprite('run');
    //         } else if (keys.k.pressed && enemyPawn1.lastKey === 'k' && enemyPawn1.idleState === true && currentEnemyIndex === 1 &&
    //             enemyPawn1.position.y < 550 && !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
    //             enemyPawn1.velocity.y = 0.1;
    //             enemyPawn1.takeDamageMin();
    //             enemyPawn1.takeStaminaMed();
    //             enemyPawn1.switchSprite('run');
    //         } else if (enemyPawn1.idleState === true && currentEnemyIndex === 1) {
    //             enemyPawn1.takeStaminaMed();
    //             enemyPawn1.switchSprite('idle');
    //         };
    //     };

    //     // EnemyPawn1 Movement during Collision with Enemy
    //     if ((rectangularCollision({ rectangle1: enemy, rectangle2: enemyPawn1 }) ||
    //         rectangularCollision({ rectangle1: enemyPawn2, rectangle2: enemyPawn1 }))) {
    //         if (keys.j.pressed && enemyPawn1.lastKey === 'j' && currentEnemyIndex === 1 &&
    //             player.position.x > 0 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
    //             enemyPawn1.velocity.x = -0.1;
    //             enemyPawn1.switchSprite('run');
    //         } else if (keys.l.pressed && enemyPawn1.lastKey === 'l' && currentEnemyIndex === 1 &&
    //             player.position.x < 1220 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
    //             enemyPawn1.velocity.x = 0.1;
    //             enemyPawn1.switchSprite('run');
    //         } else if (keys.i.pressed && enemyPawn1.lastKey === 'i' && currentEnemyIndex === 1 &&
    //             player.position.y > 0 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
    //             enemyPawn1.velocity.y = -0.1;
    //             enemyPawn1.switchSprite('run');
    //         } else if (keys.k.pressed && enemyPawn1.lastKey === 'k' && currentEnemyIndex === 1 &&
    //             player.position.y < 550 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
    //             enemyPawn1.velocity.y = 0.1;
    //             enemyPawn1.switchSprite('run');
    //         } else if (enemyPawn1.idleState === true && currentEnemyIndex === 1) {
    //             enemyPawn1.switchSprite('idle');
    //         };
    //     };

    //     // EnemyPawn1 Ram Hits Player
    //     if (rectangularCollision({ rectangle1: player, rectangle2: enemyPawn1 }) &&
    //         enemyPawn1.isRamming &&
    //         currentEnemyIndex === 1
    //     ) {
    //         player.takeDamageRam();
    //         player.takeStaminaMax();
    //         enemyPawn1.takeStaminaRam();
    //         enemyPawn1.isRamming = false;

    //         gsap.to('#playerHealth', {
    //             width: player.health + '%'
    //         });
    //     };

    //     // EnemyPawn1 Ram Hits PlayerPawn1
    //     if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn1 }) &&
    //         enemyPawn1.isRamming &&
    //         currentEnemyIndex === 1
    //     ) {
    //         playerPawn1.takeDamageRam();
    //         playerPawn1.takeStaminaMax();
    //         enemyPawn1.takeStaminaRam();
    //         enemyPawn1.isRamming = false;

    //         gsap.to('#playerPawn1Health', {
    //             width: playerPawn1.health + '%'
    //         });
    //     };

    //     // EnemyPawn1 Ram Hits PlayerPawn2
    //     if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn1 }) &&
    //         enemyPawn1.isRamming &&
    //         currentEnemyIndex === 1
    //     ) {
    //         playerPawn2.takeDamageRam();
    //         playerPawn2.takeStaminaMax();
    //         enemyPawn1.takeStaminaRam();
    //         enemyPawn1.isRamming = false;

    //         gsap.to('#playerPawn2Health', {
    //             width: playerPawn2.health + '%'
    //         });
    //     };

    //     // EnemyPawn1 Ram misses
    //     if (enemyPawn1.isRamming && enemyPawn1.framesCurrent === 4 &&
    //         currentEnemyIndex === 1) {
    //         enemyPawn1.takeStaminaRam();
    //         enemyPawn1.isRamming = false;
    //     };

    //     // EnemyPawn1 Fight Hits Idle Player
    //     if (rectangularCollision({ rectangle1: player, rectangle2: enemyPawn1 }) &&
    //         enemyPawn1.isFighting &&
    //         player.idleState === true
    //     ) {
    //         player.takeDamageMax();
    //         enemyPawn1.takeStaminaMin();

    //         gsap.to('#playerHealth', {
    //             width: player.health + '%'
    //         });
    //     };

    //     // EnemyPawn1 Fight Hits Idle PlayerPawn1
    //     if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn1 }) &&
    //         enemyPawn1.isFighting &&
    //         playerPawn1.idleState === true
    //     ) {
    //         playerPawn1.takeDamageMax();
    //         enemyPawn1.takeStaminaMin();

    //         gsap.to('#playerPawn1Health', {
    //             width: playerPawn1.health + '%'
    //         });
    //     };

    //     // EnemyPawn1 Fight Hits Idle PlayerPawn2
    //     if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn1 }) &&
    //         enemyPawn1.isFighting &&
    //         playerPawn2.idleState === true
    //     ) {
    //         playerPawn2.takeDamageMax();
    //         enemyPawn1.takeStaminaMin();

    //         gsap.to('#playerPawn2Pawn1Health', {
    //             width: playerPawn2.health + '%'
    //         });
    //     };

    //     // EnemyPawn1 Fight hits Phalanx Player
    //     if (rectangularCollision({ rectangle1: player, rectangle2: enemyPawn1 }) &&
    //         enemyPawn1.isFighting &&
    //         enemyPawn1.stamina >= 1 &&
    //         player.idleState === false
    //     ) {
    //         player.takeDamageMin();
    //         enemyPawn1.takeStaminaMin();

    //         gsap.to('#playerHealth', {
    //             width: player.health + '%'
    //         });
    //     };

    //     // EnemyPawn1 Fight hits Phalanx PlayerPawn1
    //     if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn1 }) &&
    //         enemyPawn1.isFighting &&
    //         enemyPawn1.stamina >= 1 &&
    //         playerPawn1.idleState === false
    //     ) {
    //         playerPawn1.takeDamageMin();
    //         enemyPawn1.takeStaminaMin();

    //         gsap.to('#playerPawn1Health', {
    //             width: playerPawn1.health + '%'
    //         });
    //     };

    //     // EnemyPawn1 Fight hits Phalanx PlayerPawn2
    //     if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn1 }) &&
    //         enemyPawn1.isFighting &&
    //         enemyPawn1.stamina >= 1 &&
    //         playerPawn2.idleState === false
    //     ) {
    //         playerPawn2.takeDamageMin();
    //         enemyPawn1.takeStaminaMin();

    //         gsap.to('#playerPawn2Health', {
    //             width: playerPawn2.health + '%'
    //         });
    //     };

    //     // EnemyPawn1 Regen Stamina
    //     if (enemyPawn1.idleState === true && currentEnemyIndex != 1) {
    //         enemyPawn1.regenStaminaMax();
    //         enemyPawn1.regenStrikeMax();
    //     } else if (enemyPawn1.idleState === false && currentEnemyIndex != 1) {
    //         enemyPawn1.regenStaminaMed();
    //         enemyPawn1.regenStrikeMed();
    //     };
    // };



    // // *** EnemyPawn2 CONTROLS ***
    // if (!enemyPawn2.dead) {
    //     // EnemyPawn2 Phalanx ON/OFF
    //     if (keys.y.pressed && enemyPawn2.lastKey === 'y' && enemyPawn2.idleState === true && currentEnemyIndex === 2) {
    //         enemyPawn2.phalanxON();
    //     } else if (keys.p.pressed && enemyPawn2.lastKey === 'p' && enemyPawn2.idleState === false && currentEnemyIndex === 2 || enemyPawn2.stamina <= 10) {
    //         enemyPawn2.phalanxOFF();
    //     };

    //     // EnemyPawn2 Turtle ON/OFF
    //     if (keys.g.pressed && enemyPawn2.lastKey === 'g' && currentEnemyIndex === 2) {
    //         enemyPawn2.turtleON();
    //     } else if (keys.p.pressed && enemyPawn2.lastKey === 'p' && enemyPawn2.isTurtle === true && currentEnemyIndex === 2) {
    //         enemyPawn2.turtleOFF();
    //     } else if (keys.j.pressed && enemyPawn2.lastKey === 'j' && enemyPawn2.isTurtle === true && currentEnemyIndex === 2 &&
    //         enemyPawn2.position.x > 0 && !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
    //         enemyPawn2.velocity.x = -0.1;
    //         enemyPawn2.takeStaminaMin();
    //         enemyPawn2.switchSprite('turtleIdle');
    //     } else if (keys.l.pressed && enemyPawn2.lastKey === 'l' && enemyPawn2.isTurtle === true && currentEnemyIndex === 2 &&
    //         enemyPawn2.position.x < 1220 && !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
    //         enemyPawn2.velocity.x = 0.1;
    //         enemyPawn2.takeStaminaMin();
    //         enemyPawn2.switchSprite('turtleIdle');
    //     } else if (keys.i.pressed && enemyPawn2.lastKey === 'i' && enemyPawn2.isTurtle === true && currentEnemyIndex === 2 &&
    //         enemyPawn2.position.y > 0 && !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
    //         enemyPawn2.velocity.y = -0.1;
    //         enemyPawn2.takeStaminaMin();
    //         enemyPawn2.switchSprite('turtleIdle');
    //     } else if (keys.k.pressed && enemyPawn2.lastKey === 'k' && enemyPawn2.isTurtle === true && currentEnemyIndex === 2 &&
    //         enemyPawn2.position.y < 550 && !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
    //         enemyPawn2.velocity.y = 0.1;
    //         enemyPawn2.takeStaminaMin();
    //         enemyPawn2.switchSprite('turtleIdle');
    //         // EnemyPawn2 Idle Movement
    //     } else if (keys.j.pressed && enemyPawn2.lastKey === 'j' && enemyPawn2.idleState === true && currentEnemyIndex === 2 &&
    //         enemyPawn2.position.x > 0 && !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
    //         enemyPawn2.velocity.x = -0.5;
    //         enemyPawn2.takeStaminaMin();
    //         enemyPawn2.switchSprite('run');
    //     } else if (keys.j.pressed && enemyPawn2.lastKey === 'j' && enemyPawn2.idleState === true && currentEnemyIndex === 2 &&
    //         terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
    //         enemyPawn2.velocity.x = 5;
    //     } else if (keys.l.pressed && enemyPawn2.lastKey === 'l' && enemyPawn2.idleState === true && currentEnemyIndex === 2 &&
    //         enemyPawn2.position.x < 1220 && !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
    //         enemyPawn2.velocity.x = 0.5;
    //         enemyPawn2.takeStaminaMin();
    //         enemyPawn2.switchSprite('run');
    //     } else if (keys.l.pressed && enemyPawn2.lastKey === 'l' && enemyPawn2.idleState === true && currentEnemyIndex === 2 &&
    //         terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
    //         enemyPawn2.velocity.x = -5;
    //     } else if (keys.i.pressed && enemyPawn2.lastKey === 'i' && enemyPawn2.idleState === true && currentEnemyIndex === 2 &&
    //         enemyPawn2.position.y > 0 && !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
    //         enemyPawn2.velocity.y = -0.5;
    //         enemyPawn2.takeStaminaMin();
    //         enemyPawn2.switchSprite('run');
    //     } else if (keys.i.pressed && enemyPawn2.lastKey === 'i' && enemyPawn2.idleState === true && currentEnemyIndex === 2 &&
    //         terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
    //         enemyPawn2.velocity.y = 5;
    //     } else if (keys.k.pressed && enemyPawn2.lastKey === 'k' && enemyPawn2.idleState === true && currentEnemyIndex === 2 &&
    //         enemyPawn2.position.y < 550 && !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
    //         enemyPawn2.velocity.y = 0.5;
    //         enemyPawn2.takeStaminaMin();
    //         enemyPawn2.switchSprite('run');
    //     } else if (keys.k.pressed && enemyPawn2.lastKey === 'k' && enemyPawn2.idleState === true && currentEnemyIndex === 2 &&
    //         terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
    //         enemyPawn2.velocity.y = -5;
    //     } else if (enemyPawn2.idleState === true && enemyPawn2.isTurtle === false && currentEnemyIndex === 2) {
    //         enemyPawn2.regenStaminaMax();
    //         enemyPawn2.regenStrikeMax();
    //         enemyPawn2.switchSprite('idle');
    //     };

    //     // EnemyPawn2 Phalanx Movement
    //     if (keys.j.pressed && enemyPawn2.lastKey === 'j' && enemyPawn2.idleState === false && currentEnemyIndex === 2 &&
    //         enemyPawn2.position.x > 0 && !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
    //         enemyPawn2.velocity.x = -0.1;
    //         enemyPawn2.takeStaminaMin();
    //         enemyPawn2.regenStrikeMin();
    //         enemyPawn2.switchSprite('phalanxMarch');
    //     } else if (keys.j.pressed && enemyPawn2.lastKey === 'j' && enemyPawn2.idleState === false && currentEnemyIndex === 2 &&
    //         terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
    //         enemyPawn2.velocity.x = 1;
    //     } else if (keys.l.pressed && enemyPawn2.lastKey === 'l' && enemyPawn2.idleState === false && currentEnemyIndex === 2 &&
    //         enemyPawn2.position.x < 1220 && !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
    //         enemyPawn2.velocity.x = 0.1;
    //         enemyPawn2.takeStaminaMin();
    //         enemyPawn2.regenStrikeMin();
    //         enemyPawn2.switchSprite('phalanxMarch');
    //     } else if (keys.l.pressed && enemyPawn2.lastKey === 'l' && enemyPawn2.idleState === false && currentEnemyIndex === 2 &&
    //         terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
    //         enemyPawn2.velocity.x = -1;
    //     } else if (keys.i.pressed && enemyPawn2.lastKey === 'i' && enemyPawn2.idleState === false && currentEnemyIndex === 2 &&
    //         enemyPawn2.position.y > 0 && !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
    //         enemyPawn2.velocity.y = -0.1;
    //         enemyPawn2.takeStaminaMin();
    //         enemyPawn2.regenStrikeMin();
    //         enemyPawn2.switchSprite('phalanxMarch');
    //     } else if (keys.i.pressed && enemyPawn2.lastKey === 'i' && enemyPawn2.idleState === false && currentEnemyIndex === 2 &&
    //         terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
    //         enemyPawn2.velocity.y = 1;
    //     } else if (keys.k.pressed && enemyPawn2.lastKey === 'k' && enemyPawn2.idleState === false && currentEnemyIndex === 2 &&
    //         enemyPawn2.position.y < 550 && !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
    //         enemyPawn2.velocity.y = 0.1;
    //         enemyPawn2.takeStaminaMin();
    //         enemyPawn2.regenStrikeMin();
    //         enemyPawn2.switchSprite('phalanxMarch');
    //     } else if (keys.k.pressed && enemyPawn2.lastKey === 'k' && enemyPawn2.idleState === false && currentEnemyIndex === 2 &&
    //         terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
    //         enemyPawn2.velocity.y = -1;
    //     } else if (enemyPawn2.isFighting === false && enemyPawn2.idleState === false && currentEnemyIndex === 2) {
    //         enemyPawn2.regenStaminaMed();
    //         enemyPawn2.regenStrikeMed();
    //         enemyPawn2.switchSprite('phalanxIdle');
    //     };

    //     // EnemyPawn2 Idle Movement during Collision with Player
    //     if ((rectangularCollision({ rectangle1: player, rectangle2: enemyPawn2 }) ||
    //         rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn2 }) ||
    //         rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn2 }))) {
    //         if (keys.j.pressed && enemyPawn2.lastKey === 'j' && enemyPawn2.idleState === true && currentEnemyIndex === 2 &&
    //             enemyPawn2.position.x > 0 && !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
    //             enemyPawn2.velocity.x = -0.1;
    //             enemyPawn2.takeDamageMin();
    //             enemyPawn2.takeStaminaMed();
    //             enemyPawn2.switchSprite('run');
    //         } else if (keys.l.pressed && enemyPawn2.lastKey === 'l' && enemyPawn2.idleState === true && currentEnemyIndex === 2 &&
    //             enemyPawn2.position.x < 1220 && !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
    //             enemyPawn2.velocity.x = 0.1;
    //             enemyPawn2.takeDamageMin();
    //             enemyPawn2.takeStaminaMed();
    //             enemyPawn2.switchSprite('run');
    //         } else if (keys.i.pressed && enemyPawn2.lastKey === 'i' && enemyPawn2.idleState === true && currentEnemyIndex === 2 &&
    //             enemyPawn2.position.y > 0 && !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
    //             enemyPawn2.velocity.y = -0.1;
    //             enemyPawn2.takeDamageMin();
    //             enemyPawn2.takeStaminaMed();
    //             enemyPawn2.switchSprite('run');
    //         } else if (keys.k.pressed && enemyPawn2.lastKey === 'k' && enemyPawn2.idleState === true && currentEnemyIndex === 2 &&
    //             enemyPawn2.position.y < 550 && !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
    //             enemyPawn2.velocity.y = 0.1;
    //             enemyPawn2.takeDamageMin();
    //             enemyPawn2.takeStaminaMed();
    //             enemyPawn2.switchSprite('run');
    //         } else if (enemyPawn2.idleState === true && currentEnemyIndex === 2) {
    //             enemyPawn2.takeStaminaMed();
    //             enemyPawn2.switchSprite('idle');
    //         };
    //     };

    //     // EnemyPawn2 Movement during Collision with Enemy
    //     if ((rectangularCollision({ rectangle1: enemy, rectangle2: enemyPawn2 }) ||
    //         rectangularCollision({ rectangle1: enemyPawn1, rectangle2: enemyPawn2 }))) {
    //         if (keys.j.pressed && enemyPawn2.lastKey === 'j' && currentEnemyIndex === 2 &&
    //             player.position.x > 0 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
    //             enemyPawn2.velocity.x = -0.1;
    //             enemyPawn2.switchSprite('run');
    //         } else if (keys.l.pressed && enemyPawn2.lastKey === 'l' && currentEnemyIndex === 2 &&
    //             player.position.x < 1220 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
    //             enemyPawn2.velocity.x = 0.1;
    //             enemyPawn2.switchSprite('run');
    //         } else if (keys.i.pressed && enemyPawn2.lastKey === 'i' && currentEnemyIndex === 2 &&
    //             player.position.y > 0 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
    //             enemyPawn2.velocity.y = -0.1;
    //             enemyPawn2.switchSprite('run');
    //         } else if (keys.k.pressed && enemyPawn2.lastKey === 'k' && currentEnemyIndex === 2 &&
    //             player.position.y < 550 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
    //             enemyPawn2.velocity.y = 0.1;
    //             enemyPawn2.switchSprite('run');
    //         } else if (enemyPawn2.idleState === true && currentEnemyIndex === 2) {
    //             enemyPawn2.switchSprite('idle');
    //         };
    //     };

    //     // EnemyPawn2 Ram Hits Player
    //     if (rectangularCollision({ rectangle1: player, rectangle2: enemyPawn2 }) &&
    //         enemyPawn2.isRamming &&
    //         currentEnemyIndex === 2
    //     ) {
    //         player.takeDamageRam();
    //         player.takeStaminaMax();
    //         enemyPawn2.takeStaminaRam();
    //         enemyPawn2.isRamming = false;

    //         gsap.to('#playerHealth', {
    //             width: player.health + '%'
    //         });
    //     };

    //     // EnemyPawn2 Ram Hits PlayerPawn1
    //     if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn2 }) &&
    //         enemyPawn2.isRamming &&
    //         currentEnemyIndex === 2
    //     ) {
    //         playerPawn1.takeDamageRam();
    //         playerPawn1.takeStaminaMax();
    //         enemyPawn2.takeStaminaRam();
    //         enemyPawn2.isRamming = false;

    //         gsap.to('#playerPawn1Health', {
    //             width: playerPawn1.health + '%'
    //         });
    //     };

    //     // EnemyPawn2 Ram Hits PlayerPawn2
    //     if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn2 }) &&
    //         enemyPawn2.isRamming &&
    //         currentEnemyIndex === 2
    //     ) {
    //         playerPawn2.takeDamageRam();
    //         playerPawn2.takeStaminaMax();
    //         enemyPawn2.takeStaminaRam();
    //         enemyPawn2.isRamming = false;

    //         gsap.to('#playerPawn2Health', {
    //             width: playerPawn2.health + '%'
    //         });
    //     };

    //     // EnemyPawn2 Ram misses
    //     if (enemyPawn2.isRamming && enemyPawn2.framesCurrent === 4 &&
    //         currentEnemyIndex === 2) {
    //         enemyPawn2.takeStaminaRam();
    //         enemyPawn2.isRamming = false;
    //     };

    //     // EnemyPawn2 Fight Hits Idle Player
    //     if (rectangularCollision({ rectangle1: player, rectangle2: enemyPawn2 }) &&
    //         enemyPawn2.isFighting &&
    //         player.idleState === true
    //     ) {
    //         player.takeDamageMax();
    //         enemyPawn2.takeStaminaMin();

    //         gsap.to('#playerHealth', {
    //             width: player.health + '%'
    //         });
    //     };

    //     // EnemyPawn2 Fight Hits Idle PlayerPawn1
    //     if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn2 }) &&
    //         enemyPawn2.isFighting &&
    //         playerPawn1.idleState === true
    //     ) {
    //         playerPawn1.takeDamageMax();
    //         enemyPawn2.takeStaminaMin();

    //         gsap.to('#playerPawn1Health', {
    //             width: playerPawn1.health + '%'
    //         });
    //     };

    //     // EnemyPawn2 Fight Hits Idle PlayerPawn2
    //     if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn2 }) &&
    //         enemyPawn2.isFighting &&
    //         playerPawn2.idleState === true
    //     ) {
    //         playerPawn2.takeDamageMax();
    //         enemyPawn2.takeStaminaMin();

    //         gsap.to('#playerPawn2Pawn1Health', {
    //             width: playerPawn2.health + '%'
    //         });
    //     };

    //     // EnemyPawn2 Fight hits Phalanx Player
    //     if (rectangularCollision({ rectangle1: player, rectangle2: enemyPawn2 }) &&
    //         enemyPawn2.isFighting &&
    //         enemyPawn2.stamina >= 1 &&
    //         player.idleState === false
    //     ) {
    //         player.takeDamageMin();
    //         enemyPawn2.takeStaminaMin();

    //         gsap.to('#playerHealth', {
    //             width: player.health + '%'
    //         });
    //     };

    //     // EnemyPawn2 Fight hits Phalanx PlayerPawn1
    //     if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn2 }) &&
    //         enemyPawn2.isFighting &&
    //         enemyPawn2.stamina >= 1 &&
    //         playerPawn1.idleState === false
    //     ) {
    //         playerPawn1.takeDamageMin();
    //         enemyPawn2.takeStaminaMin();

    //         gsap.to('#playerPawn1Health', {
    //             width: playerPawn1.health + '%'
    //         });
    //     };

    //     // EnemyPawn2 Fight hits Phalanx PlayerPawn2
    //     if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn2 }) &&
    //         enemyPawn2.isFighting &&
    //         enemyPawn2.stamina >= 1 &&
    //         playerPawn2.idleState === false
    //     ) {
    //         playerPawn2.takeDamageMin();
    //         enemyPawn2.takeStaminaMin();

    //         gsap.to('#playerPawn2Health', {
    //             width: playerPawn2.health + '%'
    //         });
    //     };

    //     // EnemyPawn2 Regen Stamina
    //     if (enemyPawn2.idleState === true && currentEnemyIndex != 2) {
    //         enemyPawn2.regenStaminaMax();
    //         enemyPawn2.regenStrikeMax();
    //     } else if (enemyPawn2.idleState === false && currentEnemyIndex != 2) {
    //         enemyPawn2.regenStaminaMed();
    //         enemyPawn2.regenStrikeMed();
    //     };
    // };



    // AI Opponent
    if (!enemy.dead &&
        (playerFlag.position.y <= 455 && enemyFlag.position.y <= 455)) {

        // AI Enemy
        if (enemy.stamina <= 1 || enemy.velocity.x > 0) {
            enemy.idle();
        } else if ((enemy.stamina >= 20 &&
            !capturePoint1Collision({ rectangle1: enemy, rectangle2: capturePoints }) &&
            !rectangularCollision({ rectangle1: player, rectangle2: enemy })) ||
            (rectangularCollision({ rectangle1: player, rectangle2: enemy }) &&
                player.dead)) {
            enemy.move();
        } else if (enemy.stamina <= 5 && rectangularCollision({ rectangle1: player, rectangle2: enemy }) &&
            player.velocity.x !== 0.1 &&
            !player.dead) {
            enemy.phalanx();
        } else if (rectangularCollision({ rectangle1: player, rectangle2: enemy }) &&
            player.velocity.x === 0 &&
            !player.dead) {
            enemy.fight();
            if (player.idleState === true) {
                player.takeDamageAi();
            } else {
                player.takeDamageMax();
            };
        } else if (rectangularCollision({ rectangle1: player, rectangle2: enemy }) &&
            player.velocity.x > 0) {
            enemy.push();
        } else if (enemy.health <= 0) {
            enemy.health = 0;
            enemy.switchSprite('death');
        };

        if (enemy.stamina <= 1 || enemy.velocity.x > 0) {
            enemy.idle();
        } else if ((enemy.stamina >= 20 &&
            !capturePoint1Collision({ rectangle1: enemy, rectangle2: capturePoints }) &&
            !rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemy })) ||
            (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemy }) &&
                playerPawn1.dead)) {
            enemy.move();
        } else if (enemy.stamina <= 5 && rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemy }) &&
            playerPawn1.velocity.x !== 0.1 &&
            !playerPawn1.dead) {
            enemy.phalanx();
        } else if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemy }) &&
            playerPawn1.velocity.x === 0 &&
            !playerPawn1.dead) {
            enemy.fight();
            if (playerPawn1.idleState === true) {
                playerPawn1.takeDamageAi();
            } else {
                playerPawn1.takeDamageMax();
            };
        } else if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemy }) &&
            playerPawn1.velocity.x > 0) {
            enemy.push();
        } else if (enemy.health <= 0) {
            enemy.health = 0;
            enemy.switchSprite('death');
        };

        if (enemy.stamina <= 1 || enemy.velocity.x > 0) {
            enemy.idle();
        } else if ((enemy.stamina >= 20 &&
            !capturePoint1Collision({ rectangle1: enemy, rectangle2: capturePoints }) &&
            !rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemy })) ||
            (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemy }) &&
                playerPawn2.dead)) {
            enemy.move();
        } else if (enemy.stamina <= 5 && rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemy }) &&
            playerPawn2.velocity.x !== 0.1 &&
            !playerPawn2.dead) {
            enemy.phalanx();
        } else if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemy }) &&
            playerPawn2.velocity.x === 0 &&
            !playerPawn2.dead) {
            enemy.fight();
            if (playerPawn2.idleState === true) {
                playerPawn2.takeDamageAi();
            } else {
                playerPawn2.takeDamageMax();
            };
        } else if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemy }) &&
            playerPawn2.velocity.x > 0) {
            enemy.push();
        } else if (enemy.health <= 0) {
            enemy.health = 0;
            enemy.switchSprite('death');
        };

        // AI Enemy Pawn1
        if (enemyPawn1.stamina <= 10 || enemyPawn1.velocity.x > 0) {
            enemyPawn1.idle();
        } else if ((enemyPawn1.stamina >= 25 &&
            !capturePoint1Collision({ rectangle1: enemyPawn1, rectangle2: capturePoints }) &&
            !capturePoint2Collision({ rectangle1: enemyPawn1, rectangle2: capturePoints }) &&
            !rectangularCollision({ rectangle1: player, rectangle2: enemyPawn1 })) ||
            (rectangularCollision({ rectangle1: player, rectangle2: enemyPawn1 }) &&
                player.dead)) {
            enemyPawn1.move();
        } else if (capturePoint2Collision({ rectangle1: enemyPawn1, rectangle2: capturePoints })) {
            enemyPawn1.moveAround();
        } else if (enemyPawn1.stamina <= 5 && rectangularCollision({ rectangle1: player, rectangle2: enemyPawn1 }) &&
            player.velocity.x !== 0.1 &&
            !player.dead) {
            enemyPawn1.phalanx();
        } else if (rectangularCollision({ rectangle1: player, rectangle2: enemyPawn1 }) &&
            player.velocity.x === 0 &&
            !player.dead) {
            enemyPawn1.fight();
            if (player.idleState === true) {
                player.takeDamageAi();
            } else {
                player.takeDamageMax();
            };
        } else if (rectangularCollision({ rectangle1: player, rectangle2: enemyPawn1 }) &&
            player.velocity.x > 0) {
            enemyPawn1.push();
        } else if (enemyPawn1.health <= 0) {
            enemyPawn1.health = 0;
            enemyPawn1.switchSprite('death');
        };

        if (enemyPawn1.stamina <= 10 || enemyPawn1.velocity.x > 0) {
            enemyPawn1.idle();
        } else if ((enemyPawn1.stamina >= 25 &&
            !capturePoint1Collision({ rectangle1: enemyPawn1, rectangle2: capturePoints }) &&
            !capturePoint2Collision({ rectangle1: enemyPawn1, rectangle2: capturePoints }) &&
            !rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn1 })) ||
            (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn1 }) &&
                playerPawn1.dead)) {
            enemyPawn1.move();
        } else if (capturePoint2Collision({ rectangle1: enemyPawn1, rectangle2: capturePoints })) {
            enemyPawn1.moveAround();
        } else if (enemyPawn1.stamina <= 5 && rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn1 }) &&
            playerPawn1.velocity.x !== 0.1 &&
            !playerPawn1.dead) {
            enemyPawn1.phalanx();
        } else if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn1 }) &&
            playerPawn1.velocity.x === 0 &&
            !playerPawn1.dead) {
            enemyPawn1.fight();
            if (playerPawn1.idleState === true) {
                playerPawn1.takeDamageAi();
            } else {
                playerPawn1.takeDamageMax();
            };
        } else if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn1 }) &&
            playerPawn1.velocity.x > 0) {
            enemyPawn1.push();
        } else if (enemyPawn1.health <= 0) {
            enemyPawn1.health = 0;
            enemyPawn1.switchSprite('death');
        };

        if (enemyPawn1.stamina <= 10 || enemyPawn1.velocity.x > 0) {
            enemyPawn1.idle();
        } else if ((enemyPawn1.stamina >= 25 &&
            !capturePoint1Collision({ rectangle1: enemyPawn1, rectangle2: capturePoints }) &&
            !capturePoint2Collision({ rectangle1: enemyPawn1, rectangle2: capturePoints }) &&
            !rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn1 })) ||
            (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn1 }) &&
                playerPawn2.dead)) {
            enemyPawn1.move();
        } else if (capturePoint2Collision({ rectangle1: enemyPawn1, rectangle2: capturePoints })) {
            enemyPawn1.moveAround();
        } else if (enemyPawn1.stamina <= 5 && rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn1 }) &&
            playerPawn2.velocity.x !== 0.1 &&
            !playerPawn2.dead) {
            enemyPawn1.phalanx();
        } else if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn1 }) &&
            playerPawn2.velocity.x === 0 &&
            !playerPawn2.dead) {
            enemyPawn1.fight();
            if (playerPawn2.idleState === true) {
                playerPawn2.takeDamageAi();
            } else {
                playerPawn2.takeDamageMax();
            };
        } else if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn1 }) &&
            playerPawn2.velocity.x > 0) {
            playerPawn2.push();
        } else if (enemyPawn1.health <= 0) {
            enemyPawn1.health = 0;
            enemyPawn1.switchSprite('death');
        };

        // AI Enemy Pawn2
        if (enemyPawn2.stamina <= 5 || enemyPawn2.velocity.x > 0) {
            enemyPawn2.idle();
        } else if ((enemyPawn2.position.x >= 1000 &&
            enemyPawn2.stamina >= 30 &&
            !capturePoint1Collision({ rectangle1: enemyPawn2, rectangle2: capturePoints }) &&
            !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain }) &&
            !rectangularCollision({ rectangle1: player, rectangle2: enemyPawn2 })) ||
            (rectangularCollision({ rectangle1: player, rectangle2: enemyPawn2 }) &&
                player.dead)) {
            enemyPawn2.move();
        } else if (terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
            enemyPawn2.moveAround();
        } else if (enemyPawn2.stamina <= 5 && rectangularCollision({ rectangle1: player, rectangle2: enemyPawn2 }) &&
            player.velocity.x !== 0.1 &&
            !player.dead) {
            enemyPawn2.phalanx();
        } else if (rectangularCollision({ rectangle1: player, rectangle2: enemyPawn2 }) &&
            player.velocity.x === 0 &&
            !player.dead) {
            enemyPawn2.fight();
            if (player.idleState === true) {
                player.takeDamageAi();
            } else {
                player.takeDamageMax();
            };
        } else if (rectangularCollision({ rectangle1: player, rectangle2: enemyPawn2 }) &&
            player.velocity.x > 0) {
            enemyPawn2.push();
        } else if (enemyPawn2.health <= 0) {
            enemyPawn2.health = 0;
            enemyPawn2.switchSprite('death');
        };

        if (enemyPawn2.stamina <= 5 || enemyPawn2.velocity.x > 0) {
            enemyPawn2.idle();
        } else if ((enemyPawn2.position.x >= 1000 &&
            enemyPawn2.stamina >= 30 &&
            !capturePoint1Collision({ rectangle1: enemyPawn2, rectangle2: capturePoints }) &&
            !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain }) &&
            !rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn2 })) ||
            (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn2 }) &&
                playerPawn1.dead)) {
            enemyPawn2.move();
        } else if (terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
            enemyPawn2.moveAround();
        } else if (enemyPawn2.stamina <= 5 && rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn2 }) &&
            playerPawn1.velocity.x !== 0.1 &&
            !playerPawn1.dead) {
            enemyPawn2.phalanx();
        } else if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn2 }) &&
            playerPawn1.velocity.x === 0 &&
            !playerPawn1.dead) {
            enemyPawn2.fight();
            if (playerPawn1.idleState === true) {
                playerPawn1.takeDamageAi();
            } else {
                playerPawn1.takeDamageMax();
            };
        } else if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn2 }) &&
            playerPawn1.velocity.x > 0) {
            enemyPawn2.push();
        } else if (enemyPawn2.health <= 0) {
            enemyPawn2.health = 0;
            enemyPawn2.switchSprite('death');
        };

        if (enemyPawn2.stamina <= 5 || enemyPawn2.velocity.x > 0) {
            enemyPawn2.idle();
        } else if ((enemyPawn2.position.x >= 1000 &&
            enemyPawn2.stamina >= 30 &&
            !capturePoint1Collision({ rectangle1: enemyPawn2, rectangle2: capturePoints }) &&
            !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain }) &&
            !rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn2 })) ||
            (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn2 }) &&
                playerPawn2.dead)) {
            enemyPawn2.move();
        } else if (terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
            enemyPawn2.moveAround();
        } else if (enemyPawn2.stamina <= 5 && rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn2 }) &&
            playerPawn2.velocity.x !== 0.1 &&
            !playerPawn2.dead) {
            enemyPawn2.phalanx();
        } else if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn2 }) &&
            playerPawn2.velocity.x === 0 &&
            !playerPawn2.dead) {
            enemyPawn2.fight();
            if (playerPawn2.idleState === true) {
                playerPawn2.takeDamageAi();
            } else {
                playerPawn2.takeDamageMax();
            };
        } else if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn2 }) &&
            playerPawn2.velocity.x > 0) {
            enemyPawn2.push();
        } else if (enemyPawn2.health <= 0) {
            enemyPawn2.health = 0;
            enemyPawn2.switchSprite('death');
        };

        enemy.aiMove();
        enemy.aiIdle();
        enemy.aiPhalanx();
        enemy.aiFighting();
        enemy.aiPushing();
        enemy.aiMoveDown();
        enemyPawn1.aiMove();
        enemyPawn1.aiIdle();
        enemyPawn1.aiPhalanx();
        enemyPawn1.aiFighting();
        enemyPawn1.aiPushing();
        enemyPawn1.aiMoveDown();
        enemyPawn2.aiMove();
        enemyPawn2.aiIdle();
        enemyPawn2.aiPhalanx();
        enemyPawn2.aiFighting();
        enemyPawn2.aiPushing();
        enemyPawn2.aiMoveDown();
    };

};

animate();

window.addEventListener('keydown', (event) => {
    if (playerFlag.position.y <= 455 && enemyFlag.position.y <= 455) {
        switch (event.key) {
            case 'e':
                keys.e.pressed = true;
                player.lastKey = 'e';
                break;
            case 'd':
                keys.d.pressed = true;
                player.lastKey = 'd';
                playerPawn1.lastKey = 'd';
                playerPawn2.lastKey = 'd';
                break;
            case 'a':
                keys.a.pressed = true;
                player.lastKey = 'a';
                playerPawn1.lastKey = 'a';
                playerPawn2.lastKey = 'a';
                break;
            case 'w':
                keys.w.pressed = true;
                player.lastKey = 'w';
                playerPawn1.lastKey = 'w';
                playerPawn2.lastKey = 'w';
                break;
            case 's':
                keys.s.pressed = true;
                player.lastKey = 's';
                playerPawn1.lastKey = 's';
                playerPawn2.lastKey = 's';
                break;
            case 'c':
                keys.c.pressed = true;
                player.lastKey = 'c';
                playerPawn1.lastKey = 'c';
                playerPawn2.lastKey = 'c';
                break;
            case 'f':
                if (currentPlayerIndex === 0) {
                    player.ram();
                } else if (currentPlayerIndex === 1) {
                    playerPawn1.ram();
                } else if (currentPlayerIndex === 2) {
                    playerPawn2.ram();
                };
                break;
            case 'r':
                keys.r.pressed = true;
                player.lastKey = 'r';
                playerPawn1.lastKey = 'r';
                playerPawn2.lastKey = 'r';
                break;
            case 'z':
                keys.z.pressed = true;
                player.lastKey = 'z';
                playerPawn1.lastKey = 'z';
                playerPawn2.lastKey = 'z';
                break;
            case 't':
                keys.t.pressed = true;
                player.lastKey = 't';
                playerPawn1.lastKey = 't';
                playerPawn2.lastKey = 't';
                break;
            case 'x':
                selectNextPlayer();
                break;
        };

        switch (event.key) {
            case 'l':
                keys.l.pressed = true;
                enemy.lastKey = 'l';
                enemyPawn1.lastKey = 'l';
                enemyPawn2.lastKey = 'l';
                break;
            case 'j':
                keys.j.pressed = true;
                enemy.lastKey = 'j';
                enemyPawn1.lastKey = 'j';
                enemyPawn2.lastKey = 'j';
                break;
            case 'i':
                keys.i.pressed = true;
                enemy.lastKey = 'i';
                enemyPawn1.lastKey = 'i';
                enemyPawn2.lastKey = 'i';
                break;
            case 'k':
                keys.k.pressed = true;
                enemy.lastKey = 'k';
                enemyPawn1.lastKey = 'k';
                enemyPawn2.lastKey = 'k';
                break;
            case 'n':
                keys.n.pressed = true;
                enemy.lastKey = 'n';
                enemyPawn1.lastKey = 'n';
                enemyPawn2.lastKey = 'n';
                break;
            case 'h':
                if (currentEnemyIndex === 0) {
                    enemy.ram();
                } else if (currentEnemyIndex === 1) {
                    enemyPawn1.ram();
                } else if (currentEnemyIndex === 2) {
                    enemyPawn2.ram();
                }
                break;
            case 'y':
                keys.y.pressed = true;
                enemy.lastKey = 'y';
                enemyPawn1.lastKey = 'y';
                enemyPawn2.lastKey = 'y';
                break;
            case 'p':
                keys.p.pressed = true;
                enemy.lastKey = 'p';
                enemyPawn1.lastKey = 'p';
                enemyPawn2.lastKey = 'p';
                break;
            case 'g':
                keys.g.pressed = true;
                enemy.lastKey = 'g';
                enemyPawn1.lastKey = 'g';
                enemyPawn2.lastKey = 'g';
                break;
            case 'm':
                selectNextEnemy();
                break;
        };
    };
});

window.addEventListener('keyup', (event) => {
    // player keys
    switch (event.key) {
        case 'e':
            keys.e.pressed = false;
            break;
        case 'a':
            keys.a.pressed = false;
            break;
        case 'w':
            keys.w.pressed = false;
            break;
        case 's':
            keys.s.pressed = false;
            break;
        case 'd':
            keys.d.pressed = false;
            break;
        // case 'c':
        //   keys.c.pressed = false
        //   break
        case 'v':
            keys.v.pressed = false;
            break;
        case 'f':
            keys.f.pressed = false;
            break;
        case 'r':
            keys.r.pressed = false;
            break;
        case 't':
            keys.r.pressed = false;
            break;
        case 'z':
            keys.z.pressed = false;
            break;
    };

    // enemy keys
    switch (event.key) {
        case 'j':
            keys.j.pressed = false;
            break;
        case 'i':
            keys.i.pressed = false;
            break;
        case 'k':
            keys.k.pressed = false;
            break;
        case 'l':
            keys.l.pressed = false;
            break;
        // case 'n':
        //   keys.n.pressed = false
        //   break
        case 'b':
            keys.b.pressed = false;
            break;
        case 'h':
            keys.h.pressed = false;
            break;
        case 'y':
            keys.y.pressed = false;
            break;
        case 'g':
            keys.g.pressed = false;
            break;
        case 'p':
            keys.p.pressed = false;
            break;
    };
});