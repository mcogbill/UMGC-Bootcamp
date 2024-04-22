class Sprite {
  constructor({
    position,
    rotation,
    imageSrc,
    scale = 1,
    framesMax = 1,
    offset = { x: 0, y: 0 }
  }) {
    this.position = position
    this.rotation = rotation
    this.width = 50
    this.height = 150
    this.image = new Image()
    this.image.src = imageSrc
    this.scale = scale
    this.framesMax = framesMax
    this.framesCurrent = 0
    this.framesElapsed = 0
    this.framesHold = 20
    this.offset = offset
  }

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
    )
  }

  animateFrames() {
    this.framesElapsed++

    if (this.framesElapsed % this.framesHold === 0) {
      if (this.framesCurrent < this.framesMax - 1) {
        this.framesCurrent++
      } else {
        this.framesCurrent = 0
      }
    }
  }

  update() {
    this.draw()
    this.animateFrames()
  }
}

class Fighter extends Sprite {
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
    })
    this.velocity = velocity
    this.width = 50
    this.height = 150
    this.rotation = 0
    // this.currRotation = 0
    // this.rotationDir = "NAN"
    this.lastKey
    this.border1 = {
      position: {
        x: this.position.x,
        y: this.position.y
      },
      offset: border1.offset,
      width: border1.width,
      height: border1.height
    }
    this.border2 = {
      position: {
        x: this.position.x,
        y: this.position.y
      },
      offset: border2.offset,
      width: border2.width,
      height: border2.height
    }
    this.border3 = {
      position: {
        x: this.position.x,
        y: this.position.y
      },
      offset: border3.offset,
      width: border3.width,
      height: border3.height
    }
    this.killBox = {
      position: {
        x: this.position.x,
        y: this.position.y
      },
      offset: killBox.offset,
      width: killBox.width,
      height: killBox.height
    }
    this.capturePoint1 = {
      position: {
        x: this.position.x,
        y: this.position.y
      },
      offset: capturePoint1.offset,
      width: capturePoint1.width,
      height: capturePoint1.height
    }
    this.capturePoint2 = {
      position: {
        x: this.position.x,
        y: this.position.y
      },
      offset: capturePoint2.offset,
      width: capturePoint2.width,
      height: capturePoint2.height
    }
    this.attackBox = {
      position: {
        x: this.position.x,
        y: this.position.y
      },
      offset: attackBox.offset,
      width: attackBox.width,
      height: attackBox.height
    }
    this.hitBox = {
      position: {
        x: this.position.x,
        y: this.position.y
      },
      offset: hitBox.offset,
      width: hitBox.width,
      height: hitBox.height
    }
    this.color = color
    this.idleState = true
    this.isTurtle = false
    this.isForming
    this.isRamming = false
    this.isPushing = false
    this.isFighting = false
    this.isArchers = false
    this.health = 100
    this.stamina = 100
    this.strike = 100
    this.framesCurrent = 0
    this.framesElapsed = 0
    this.framesHold = 20
    this.sprites = sprites
    this.dead = false

    for (const sprite in this.sprites) {
      sprites[sprite].image = new Image()
      sprites[sprite].image.src = sprites[sprite].imageSrc
    }

  }



  update() {
    this.draw()
    if (!this.dead) this.animateFrames()

    // border boxes
    this.border1.position.x = this.position.x + this.border1.offset.x
    this.border1.position.y = this.position.y + this.border1.offset.y
    this.border2.position.x = this.position.x + this.border2.offset.x
    this.border2.position.y = this.position.y + this.border2.offset.y
    this.border3.position.x = this.position.x + this.border3.offset.x
    this.border3.position.y = this.position.y + this.border3.offset.y

    // // draw border boxes
    // c.fillStyle = 'green'
    // c.fillRect(
    //   this.border1.position.x,
    //   this.border1.position.y,
    //   this.border1.width,
    //   this.border1.height
    // )
    // c.fillStyle = 'green'
    // c.fillRect(
    //   this.border2.position.x,
    //   this.border2.position.y,
    //   this.border2.width,
    //   this.border2.height
    // )
    // c.fillStyle = 'green'
    // c.fillRect(
    //   this.border3.position.x,
    //   this.border3.position.y,
    //   this.border3.width,
    //   this.border3.height
    // )

    // kill box
    this.killBox.position.x = this.position.x + this.killBox.offset.x
    this.killBox.position.y = this.position.y + this.killBox.offset.y

    // // draw kill boxes
    // c.fillStyle = 'red'
    // c.fillRect(
    //   this.killBox.position.x,
    //   this.killBox.position.y,
    //   this.killBox.width,
    //   this.killBox.height
    // )

    // capture points
    this.capturePoint1.position.x = this.position.x + this.capturePoint1.offset.x
    this.capturePoint1.position.y = this.position.y + this.capturePoint1.offset.y
    this.capturePoint2.position.x = this.position.x + this.capturePoint2.offset.x
    this.capturePoint2.position.y = this.position.y + this.capturePoint2.offset.y

    // // draw capture points
    // c.fillStyle = 'blue'
    // c.fillRect(
    //   this.capturePoint1.position.x,
    //   this.capturePoint1.position.y,
    //   this.capturePoint1.width,
    //   this.capturePoint1.height
    // )

    // c.fillStyle = 'blue'
    // c.fillRect(
    //   this.capturePoint2.position.x,
    //   this.capturePoint2.position.y,
    //   this.capturePoint2.width,
    //   this.capturePoint2.height
    // )

    // attack boxes
    this.attackBox.position.x = this.position.x + this.attackBox.offset.x
    this.attackBox.position.y = this.position.y + this.attackBox.offset.y

    // hit boxes
    this.hitBox.position.x = this.position.x + this.hitBox.offset.x
    this.hitBox.position.y = this.position.y + this.hitBox.offset.y

    // // draw attack box (Used for front attacks)
    // c.fillStyle = 'black'
    // c.fillRect(
    //   this.attackBox.position.x,
    //   this.attackBox.position.y,
    //   this.attackBox.width,
    //   this.attackBox.height
    // )

    // // draw hit box (Not currently in use...)
    // c.fillStyle = 'green'
    // c.fillRect(
    //   this.hitBox.position.x,
    //   this.hitBox.position.y,
    //   this.hitBox.width,
    //   this.hitBox.height
    // )

    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
  }



  // Rotation Function Here.......



  phalanxON() {
    if (this.image === this.sprites.idle.image) {
      this.switchSprite('phalanxIdle')
      this.idleState = false
    }
  }

  phalanxOFF() {
    if (this.image === this.sprites.phalanxIdle.image) {
      this.switchSprite('idle')
      this.idleState = true
    }
  }

  turtleON() {
    if (this.isTurtle === false) {
      this.switchSprite('turtleIdle')
      this.isTurtle = true
    }
  }

  turtleOFF() {
    if (this.image === this.sprites.turtleIdle.image) {
      this.switchSprite('idle')
      this.isTurtle = false
    }
  }

  push() {
    if (this.isPushing === false) {
      this.switchSprite('attackRam')
      this.isPushing = true
    }
  }

  ram() {
    if (this.stamina >= 5 && this.strike >= 95) {
      this.switchSprite('attackRam')
      this.isRamming = true
    }
  }

  fightON() {
    if (this.isFighting === false) {
      this.switchSprite('attackFight')
      this.isFighting = true
    }
  }

  fightOFF() {
    if (this.isFighting === true) {
      this.switchSprite('phalanxIdle')
      this.isFighting = false
    }
  }

  takeHit() {
    this.switchSprite('takeHit')
  }

  takeDamageRam() {
    this.health -= 25
    updateHealthBars();

    if (this.health <= 0) {
      this.health = 0;
      this.switchSprite('death')
    }
  }

  takeStaminaRam() {
    this.stamina -= 50
    this.strike -= 100
    updateStaminaBars();
    updateStrikeBars();

    if (this.stamina <= 0) {
      this.stamina = 0;
    }
    if (this.strike <= 0) {
      this.strike = 0;
    }
  }

  takeDamageMax() {
    this.health -= 0.25
    updateHealthBars();

    if (this.health <= 0) {
      this.health = 0;
      this.switchSprite('death')
    }
  }

  takeDamageMed() {
    this.health -= 0.1
    updateHealthBars();

    if (this.health <= 0) {
      this.health = 0;
      this.switchSprite('death')
    }
  }

  takeDamageMin() {
    this.health -= 0.025
    updateHealthBars();

    if (this.health <= 0) {
      this.health = 0;
      this.switchSprite('death')
    }
  }

  takeStaminaMax() {
    this.stamina -= 1
    updateStaminaBars();

    if (this.stamina <= 0) {
      this.stamina = 0;
    }
  }

  takeStaminaMed() {
    this.stamina -= 0.25
    updateStaminaBars();

    if (this.stamina <= 0) {
      this.stamina = 0;
    }
  }

  takeStaminaMin() {
    this.stamina -= 0.1
    updateStaminaBars();

    if (this.stamina <= 0) {
      this.stamina = 0;
    }
  }

  regenStaminaMax() {
    this.stamina += 0.1
    updateStaminaBars();

    if (this.stamina >= 100) {
      this.stamina = 100;
    }
  }

  regenStaminaMed() {
    this.stamina += 0.025
    updateStaminaBars();

    if (this.stamina >= 100) {
      this.stamina = 100;
    }
  }

  regenStaminaMin() {
    this.stamina += 0.01
    updateStaminaBars();

    if (this.stamina >= 100) {
      this.stamina = 100;
    }
  }

  takeStrikeMax() {
    this.strike -= 1
    updateStrikeBars();

    if (this.strike <= 0) {
      this.strike = 0;
    }
  }

  regenStrikeMax() {
    this.strike += 0.1
    updateStrikeBars();

    if (this.strike >= 100) {
      this.strike = 100;
    }
  }

  regenStrikeMed() {
    this.strike += 0.025
    updateStrikeBars();

    if (this.strike >= 100) {
      this.strike = 100;
    }
  }

  regenStrikeMin() {
    this.strike += 0.01
    updateStrikeBars();

    if (this.strike >= 100) {
      this.strike = 100;
    }
  }

  archers1ON() {
    if (this.isArchers === false) {
      this.switchSprite('archersAttack')
      this.isArchers === true
    }
  }

  archers1OFF() {
    if (this.image === this.sprites.archersAttack.image) {
      this.switchSprite('archersIdle')
      this.isArchers === false
    }
  }



  switchSprite(sprite) {
    if (this.image === this.sprites.death.image) {
      if (this.framesCurrent === this.sprites.death.framesMax - 1)
        this.dead = true
      return
    }

    // overriding when attack fight
    if (
      this.image === this.sprites.attackFight.image &&
      this.framesCurrent < this.sprites.attackFight.framesMax - 1
    )
      return

    // overriding when ram fight
    if (
      this.image === this.sprites.attackRam.image &&
      this.framesCurrent < this.sprites.attackRam.framesMax - 1
    )
      return

    // override when fighter gets hit
    if (
      this.image === this.sprites.takeHit.image &&
      this.framesCurrent < this.sprites.takeHit.framesMax - 1
    )
      return

    switch (sprite) {
      case 'idle':
        if (this.image !== this.sprites.idle.image) {
          this.image = this.sprites.idle.image
          this.framesMax = this.sprites.idle.framesMax
          this.framesCurrent = 0
        }
        break
      case 'run':
        if (this.image !== this.sprites.run.image) {
          this.image = this.sprites.run.image
          this.framesMax = this.sprites.run.framesMax
          this.framesCurrent = 0
        }
        break

      case 'phalanxForm':
        if (this.image !== this.sprites.phalanxForm.image) {
          this.image = this.sprites.phalanxForm.image
          this.framesMax = this.sprites.phalanxForm.framesMax
          this.framesCurrent = 0
        }
        break

      case 'phalanxIdle':
        if (this.image !== this.sprites.phalanxIdle.image) {
          this.image = this.sprites.phalanxIdle.image
          this.framesMax = this.sprites.phalanxIdle.framesMax
          this.framesCurrent = 0
        }
        break

      case 'phalanxMarch':
        if (this.image !== this.sprites.phalanxMarch.image) {
          this.image = this.sprites.phalanxMarch.image
          this.framesMax = this.sprites.phalanxMarch.framesMax
          this.framesCurrent = 0
        }
        break

      case 'phalanxPush':
        if (this.image !== this.sprites.phalanxPush.image) {
          this.image = this.sprites.phalanxPush.image
          this.framesMax = this.sprites.phalanxPush.framesMax
          this.framesCurrent = 0
        }
        break

      case 'turtleIdle':
        if (this.image !== this.sprites.turtleIdle.image) {
          this.image = this.sprites.turtleIdle.image
          this.framesMax = this.sprites.turtleIdle.framesMax
          this.framesCurrent = 0
        }
        break

      case 'attackRam':
        if (this.image !== this.sprites.attackRam.image) {
          this.image = this.sprites.attackRam.image
          this.framesMax = this.sprites.attackRam.framesMax
          this.framesCurrent = 0
        }
        break

      case 'attackFight':
        if (this.image !== this.sprites.attackFight.image) {
          this.image = this.sprites.attackFight.image
          this.framesMax = this.sprites.attackFight.framesMax
          this.framesCurrent = 0
        }
        break

      case 'takeHit':
        if (this.image !== this.sprites.takeHit.image) {
          this.image = this.sprites.takeHit.image
          this.framesMax = this.sprites.takeHit.framesMax
          this.framesCurrent = 0
        }
        break

      case 'death':
        if (this.image !== this.sprites.death.image) {
          this.image = this.sprites.death.image
          this.framesMax = this.sprites.death.framesMax
          this.framesCurrent = 0
        }
        break

      case 'archersIdle':
        if (this.image !== this.sprites.archersIdle.image) {
          this.image = this.sprites.archersIdle.image
          this.framesMax = this.sprites.archersIdle.framesMax
          this.framesCurrent = 0
        }
        break

      case 'archersAttack':
        if (this.image !== this.sprites.archersAttack.image) {
          this.image = this.sprites.archersAttack.image
          this.framesMax = this.sprites.archersAttack.framesMax
          this.framesCurrent = 0
        }
        break

      case 'archersFlag':
        if (this.image !== this.sprites.archersFlag.image) {
          this.image = this.sprites.archersFlag.image
          this.framesMax = this.sprites.archersFlag.framesMax
          this.framesCurrent = 0
        }
        break

    }
  }
}
