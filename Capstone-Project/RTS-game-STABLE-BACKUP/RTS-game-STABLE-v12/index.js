const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1280
canvas.height = 768

c.fillRect(0, 0, canvas.width, canvas.height)

const background = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  imageSrc: './img/map01.png'
})

const shop = new Sprite({
  position: {
    x: 600,
    y: 128
  },
  imageSrc: './img/shop.png',
  scale: 1,
  framesMax: 6
})

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
})

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
})

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
})

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
})

const damage1 = new Sprite({
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
})

const damage2 = new Sprite({
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
})

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
})

const player = new Fighter({
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
})

const playerPawn1 = new Fighter({
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
})

const playerPawn2 = new Fighter({
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
})

const enemy = new Fighter({
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
})

const enemyPawn1 = new Fighter({
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
})

const enemyPawn2 = new Fighter({
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
})

const terrain = new Fighter({
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
    height: 60
  },
  border2: {
    offset: {
      x: 725,
      y: 445
    },
    width: 400,
    height: 60
  },
  border3: {
    offset: {
      x: 465,
      y: 0
    },
    width: 345,
    height: 155
  }
})

const shadows = new Fighter({
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
})

const killBox = new Fighter({
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
})

const playerCapturePoints = new Fighter({
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
})

const enemyCapturePoints = new Fighter({
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
      y: 425
    },
    width: 140,
    height: 100
  },
  capturePoint2: {
    offset: {
      x: 200,
      y: 100
    },
    width: 140,
    height: 100
  },
})

const archers1 = new Fighter({
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
})

const archers2 = new Fighter({
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
})

const archersFlag = new Fighter({
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
})

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
}



// Player Select
const players = [player, playerPawn1, playerPawn2];

let currentPlayerIndex = 0;

function selectNextPlayer() {
  currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
  console.log('Selected Player:', players[currentPlayerIndex]);
}

// Enemy Select
const enemies = [enemy, enemyPawn1, enemyPawn2];

let currentEnemyIndex = 0;

function selectNextEnemy() {
  currentEnemyIndex = (currentEnemyIndex + 1) % enemies.length;
  console.log('Selected Enemy:', enemies[currentEnemyIndex]);
}



decreaseTimer()



function animate() {
  window.requestAnimationFrame(animate)
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)
  background.update()
  // shop.update()
  // body.update()
  c.fillStyle = 'rgba(255, 255, 255, 0.15)'
  c.fillRect(0, 0, canvas.width, canvas.height)
  playerCapturePoints.update()
  // enemyCapturePoints.update()
  shadows.update()

  // Highlight Unit
  if (currentPlayerIndex === 0) {
    highlightPlayer.position.x = player.position.x;
    highlightPlayer.position.y = player.position.y;
    highlightPlayer.update();
  }
  if (currentPlayerIndex === 1) {
    highlightPlayer.position.x = playerPawn1.position.x;
    highlightPlayer.position.y = playerPawn1.position.y;
    highlightPlayer.update();
  }
  if (currentPlayerIndex === 2) {
    highlightPlayer.position.x = playerPawn2.position.x;
    highlightPlayer.position.y = playerPawn2.position.y;
    highlightPlayer.update();
  }
  if (currentEnemyIndex === 0) {
    highlightEnemy.position.x = enemy.position.x;
    highlightEnemy.position.y = enemy.position.y;
    highlightEnemy.update();
  }
  if (currentEnemyIndex === 1) {
    highlightEnemy.position.x = enemyPawn1.position.x;
    highlightEnemy.position.y = enemyPawn1.position.y;
    highlightEnemy.update();
  }
  if (currentEnemyIndex === 2) {
    highlightEnemy.position.x = enemyPawn2.position.x;
    highlightEnemy.position.y = enemyPawn2.position.y;
    highlightEnemy.update();
  }

  // update order
  archers1.update()
  archers2.update()
  playerPawn1.update()
  player.update()
  playerPawn2.update()
  enemyPawn1.update()
  enemy.update()
  enemyPawn2.update()

  // player velocity
  player.velocity.x = 0
  player.velocity.y = 0
  playerPawn1.velocity.x = 0
  playerPawn1.velocity.y = 0
  playerPawn2.velocity.x = 0
  playerPawn2.velocity.y = 0

  // enemy velocity
  enemy.velocity.x = 0
  enemy.velocity.y = 0
  enemyPawn1.velocity.x = 0
  enemyPawn1.velocity.y = 0
  enemyPawn2.velocity.x = 0
  enemyPawn2.velocity.y = 0

  // Highlight Stats
  if (currentPlayerIndex === 0) {
    selectStats1.position.x = 413;
    selectStats1.position.y = -3.7;
    selectStats1.update();
  }
  if (currentPlayerIndex === 1) {
    selectStats1.position.x = 63;
    selectStats1.position.y = -3.7;
    selectStats1.update();
  }
  if (currentPlayerIndex === 2) {
    selectStats1.position.x = 238;
    selectStats1.position.y = -3.7;
    selectStats1.update();
  }
  if (currentEnemyIndex === 0) {
    selectStats2.position.x = 658;
    selectStats2.position.y = -3.7;
    selectStats2.update();
  }
  if (currentEnemyIndex === 1) {
    selectStats2.position.x = 833;
    selectStats2.position.y = -3.7;
    selectStats2.update();
  }
  if (currentEnemyIndex === 2) {
    selectStats2.position.x = 1007;
    selectStats2.position.y = -3.7;
    selectStats2.update();
  }

  // Show Damage
  if (player.health <= 85) {
    damage1.position.x = player.position.x;
    damage1.position.y = player.position.y;
    damage1.update();
  }
  if (playerPawn1.health <= 85) {
    damage1.position.x = playerPawn1.position.x;
    damage1.position.y = playerPawn1.position.y;
    damage1.update();
  }
  if (playerPawn2.health <= 85) {
    damage1.position.x = playerPawn2.position.x;
    damage1.position.y = playerPawn2.position.y;
    damage1.update();
  }
  if (enemy.health <= 85) {
    damage2.position.x = enemy.position.x;
    damage2.position.y = enemy.position.y;
    damage2.update();
  }
  if (enemyPawn1.health <= 85) {
    damage2.position.x = enemyPawn1.position.x;
    damage2.position.y = enemyPawn1.position.y;
    damage2.update();
  }
  if (enemyPawn2.health <= 85) {
    damage2.position.x = enemyPawn2.position.x;
    damage2.position.y = enemyPawn2.position.y;
    damage2.update();
  }

  killBox.update()

  if (!capturePoint2Collision({ rectangle1: player, rectangle2: playerCapturePoints }) &&
    !capturePoint2Collision({ rectangle1: playerPawn1, rectangle2: playerCapturePoints }) &&
    !capturePoint2Collision({ rectangle1: playerPawn2, rectangle2: playerCapturePoints }) &&
    killBoxCollision({ rectangle1: player, rectangle2: killBox }) && player.isTurtle === false && archers1.isArchers === false) {
    archers1.archers1ON()
    player.takeDamageMed()
    arrows.position.x = player.position.x
    arrows.position.y = player.position.y
    arrows.update()
  } else if (!capturePoint2Collision({ rectangle1: player, rectangle2: playerCapturePoints }) &&
    !capturePoint2Collision({ rectangle1: playerPawn1, rectangle2: playerCapturePoints }) &&
    !capturePoint2Collision({ rectangle1: playerPawn2, rectangle2: playerCapturePoints }) &&
    killBoxCollision({ rectangle1: player, rectangle2: killBox }) && player.isTurtle === true && archers1.isArchers === false) {
    archers1.archers1ON()
    arrows.position.x = player.position.x
    arrows.position.y = player.position.y
    arrows.update()
  } else if (!capturePoint2Collision({ rectangle1: player, rectangle2: playerCapturePoints }) &&
    !capturePoint2Collision({ rectangle1: playerPawn1, rectangle2: playerCapturePoints }) &&
    !capturePoint2Collision({ rectangle1: playerPawn2, rectangle2: playerCapturePoints }) &&
    killBoxCollision({ rectangle1: playerPawn1, rectangle2: killBox }) && playerPawn1.isTurtle === false && archers1.isArchers === false) {
    archers1.archers1ON()
    playerPawn1.takeDamageMed()
    arrows.position.x = playerPawn1.position.x
    arrows.position.y = playerPawn1.position.y
    arrows.update()
  } else if (!capturePoint2Collision({ rectangle1: player, rectangle2: playerCapturePoints }) &&
    !capturePoint2Collision({ rectangle1: playerPawn1, rectangle2: playerCapturePoints }) &&
    !capturePoint2Collision({ rectangle1: playerPawn2, rectangle2: playerCapturePoints }) &&
    killBoxCollision({ rectangle1: playerPawn1, rectangle2: killBox }) && playerPawn1.isTurtle === true && archers1.isArchers === false) {
    archers1.archers1ON()
    arrows.position.x = playerPawn1.position.x
    arrows.position.y = playerPawn1.position.y
    arrows.update()
  } else if (!capturePoint2Collision({ rectangle1: player, rectangle2: playerCapturePoints }) &&
    !capturePoint2Collision({ rectangle1: playerPawn1, rectangle2: playerCapturePoints }) &&
    !capturePoint2Collision({ rectangle1: playerPawn2, rectangle2: playerCapturePoints }) &&
    killBoxCollision({ rectangle1: playerPawn2, rectangle2: killBox }) && playerPawn2.isTurtle === false && archers1.isArchers === false) {
    archers1.archers1ON()
    playerPawn2.takeDamageMed()
    arrows.position.x = playerPawn2.position.x
    arrows.position.y = playerPawn2.position.y
    arrows.update()
  } else if (!capturePoint2Collision({ rectangle1: player, rectangle2: playerCapturePoints }) &&
    !capturePoint2Collision({ rectangle1: playerPawn1, rectangle2: playerCapturePoints }) &&
    !capturePoint2Collision({ rectangle1: playerPawn2, rectangle2: playerCapturePoints }) &&
    killBoxCollision({ rectangle1: playerPawn2, rectangle2: killBox }) && playerPawn2.isTurtle === true && archers1.isArchers === false) {
    archers1.archers1ON()
    arrows.position.x = playerPawn2.position.x
    arrows.position.y = playerPawn2.position.y
    arrows.update()
  } else {
    archers1.archers1OFF()
  }

  terrain.update()
  archersFlag.update()

  // Collision Movement
  if (rectangularCollision({ rectangle1: player, rectangle2: enemy })) {
    if (keys.d.pressed && player.lastKey === 'd' && player.idleState === false &&
      enemy.idleState === false &&
      currentPlayerIndex === 0 && player.position.x < 1220 &&
      !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
      player.velocity.x = 0.1
      enemy.velocity.x = 0.1
      player.velocity.y = 0
      enemy.velocity.y = 0
      player.isFighting = false
      enemy.isFighting = false
    } else if (keys.j.pressed && enemy.lastKey === 'j' && enemy.idleState === false &&
      player.idleState === false &&
      currentEnemyIndex === 0 && enemy.position.x < 1220 &&
      !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
      enemy.velocity.x = -0.1
      player.velocity.x = -0.1
      player.velocity.y = 0
      enemy.velocity.y = 0
      player.isFighting = false
      enemy.isFighting = false
    } else if (keys.c.pressed && player.lastKey === 'c' && player.isFighting === false && currentPlayerIndex === 0) {
      player.fightON()
    } else if (keys.n.pressed && enemy.lastKey === 'n' && enemy.isFighting === false && currentEnemyIndex === 0) {
      enemy.fightON()
    } else if (player.isFighting === true) {
      player.fightOFF()
    } else if (enemy.isFighting === true) {
      enemy.fightOFF()
    }
  }

  if (rectangularCollision({ rectangle1: player, rectangle2: enemyPawn1 })) {
    if (keys.d.pressed && player.lastKey === 'd' && player.idleState === false &&
      enemyPawn1.idleState === false &&
      currentPlayerIndex === 0 && player.position.x < 1220 &&
      !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
      player.velocity.x = 0.1
      enemyPawn1.velocity.x = 0.1
      player.velocity.y = 0
      enemyPawn1.velocity.y = 0
      player.isFighting = false
      enemyPawn1.isFighting = false
    } else if (keys.j.pressed && enemyPawn1.lastKey === 'j' && enemyPawn1.idleState === false &&
      player.idleState === false &&
      currentEnemyIndex === 1 && enemyPawn1.position.x < 1220 &&
      !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
      enemyPawn1.velocity.x = -0.1
      player.velocity.x = -0.1
      player.velocity.y = 0
      enemyPawn1.velocity.y = 0
      player.isFighting = false
      enemyPawn1.isFighting = false
    } else if (keys.c.pressed && player.lastKey === 'c' && player.isFighting === false && currentPlayerIndex === 0) {
      player.fightON()
    } else if (keys.n.pressed && enemyPawn1.lastKey === 'n' && enemyPawn1.isFighting === false && currentEnemyIndex === 1) {
      enemyPawn1.fightON()
    } else if (player.isFighting === true) {
      player.fightOFF()
    } else if (enemyPawn1.isFighting === true) {
      enemyPawn1.fightOFF()
    }
  }

  if (rectangularCollision({ rectangle1: player, rectangle2: enemyPawn2 })) {
    if (keys.d.pressed && player.lastKey === 'd' && player.idleState === false &&
      enemyPawn2.idleState === false &&
      currentPlayerIndex === 0 && player.position.x < 1220 &&
      !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
      player.velocity.x = 0.1
      enemyPawn2.velocity.x = 0.1
      player.velocity.y = 0
      enemyPawn2.velocity.y = 0
      player.isFighting = false
      enemyPawn2.isFighting = false
    } else if (keys.j.pressed && enemyPawn2.lastKey === 'j' && enemyPawn2.idleState === false &&
      player.idleState === false &&
      currentEnemyIndex === 2 && enemyPawn2.position.x < 1220 &&
      !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
      enemyPawn2.velocity.x = -0.1
      player.velocity.x = -0.1
      player.velocity.y = 0
      enemyPawn2.velocity.y = 0
      player.isFighting = false
      enemyPawn2.isFighting = false
    } else if (keys.c.pressed && player.lastKey === 'c' && player.isFighting === false && currentPlayerIndex === 0) {
      player.fightON()
    } else if (keys.n.pressed && enemyPawn2.lastKey === 'n' && enemyPawn2.isFighting === false && currentEnemyIndex === 2) {
      enemyPawn2.fightON()
    } else if (player.isFighting === true) {
      player.fightOFF()
    } else if (enemyPawn2.isFighting === true) {
      enemyPawn2.fightOFF()
    }
  }

  if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemy })) {
    if (keys.d.pressed && playerPawn1.lastKey === 'd' && playerPawn1.idleState === false &&
      enemy.idleState === false &&
      currentPlayerIndex === 1 && playerPawn1.position.x < 1220 &&
      !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
      playerPawn1.velocity.x = 0.1
      enemy.velocity.x = 0.1
      playerPawn1.velocity.y = 0
      enemy.velocity.y = 0
      playerPawn1.isFighting = false
      enemy.isFighting = false
    } else if (keys.j.pressed && enemy.lastKey === 'j' && enemy.idleState === false &&
      playerPawn1.idleState === false &&
      currentEnemyIndex === 0 && enemy.position.x < 1220 &&
      !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
      enemy.velocity.x = -0.1
      playerPawn1.velocity.x = -0.1
      playerPawn1.velocity.y = 0
      enemy.velocity.y = 0
      playerPawn1.isFighting = false
      enemy.isFighting = false
    } else if (keys.c.pressed && playerPawn1.lastKey === 'c' && playerPawn1.isFighting === false && currentPlayerIndex === 1) {
      playerPawn1.fightON()
    } else if (keys.n.pressed && enemy.lastKey === 'n' && enemy.isFighting === false && currentEnemyIndex === 0) {
      enemy.fightON()
    } else if (playerPawn1.isFighting === true) {
      playerPawn1.fightOFF()
    } else if (enemy.isFighting === true) {
      enemy.fightOFF()
    }
  }

  if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn1 })) {
    if (keys.d.pressed && playerPawn1.lastKey === 'd' && playerPawn1.idleState === false &&
      enemyPawn1.idleState === false &&
      currentPlayerIndex === 1 && playerPawn1.position.x < 1220 &&
      !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
      playerPawn1.velocity.x = 0.1
      enemyPawn1.velocity.x = 0.1
      playerPawn1.velocity.y = 0
      enemyPawn1.velocity.y = 0
      playerPawn1.isFighting = false
      enemyPawn1.isFighting = false
    } else if (keys.j.pressed && enemyPawn1.lastKey === 'j' && enemyPawn1.idleState === false &&
      playerPawn1.idleState === false &&
      currentEnemyIndex === 1 && enemyPawn1.position.x < 1220 &&
      !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
      enemyPawn1.velocity.x = -0.1
      playerPawn1.velocity.x = -0.1
      playerPawn1.velocity.y = 0
      enemyPawn1.velocity.y = 0
      playerPawn1.isFighting = false
      enemyPawn1.isFighting = false
    } else if (keys.c.pressed && playerPawn1.lastKey === 'c' && playerPawn1.isFighting === false && currentPlayerIndex === 1) {
      playerPawn1.fightON()
    } else if (keys.n.pressed && enemyPawn1.lastKey === 'n' && enemyPawn1.isFighting === false && currentEnemyIndex === 1) {
      enemyPawn1.fightON()
    } else if (playerPawn1.isFighting === true) {
      playerPawn1.fightOFF()
    } else if (enemyPawn1.isFighting === true) {
      enemyPawn1.fightOFF()
    }
  }

  if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn2 })) {
    if (keys.d.pressed && playerPawn1.lastKey === 'd' && playerPawn1.idleState === false &&
      enemyPawn2.idleState === false &&
      currentPlayerIndex === 1 && playerPawn1.position.x < 1220 &&
      !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
      playerPawn1.velocity.x = 0.1
      enemyPawn2.velocity.x = 0.1
      playerPawn1.velocity.y = 0
      enemyPawn2.velocity.y = 0
      playerPawn1.isFighting = false
      enemyPawn2.isFighting = false
    } else if (keys.j.pressed && enemyPawn2.lastKey === 'j' && enemyPawn2.idleState === false &&
      playerPawn1.idleState === false &&
      currentEnemyIndex === 2 && enemyPawn2.position.x < 1220 &&
      !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
      enemyPawn2.velocity.x = -0.1
      playerPawn1.velocity.x = -0.1
      playerPawn1.velocity.y = 0
      enemyPawn2.velocity.y = 0
      playerPawn1.isFighting = false
      enemyPawn2.isFighting = false
    } else if (keys.c.pressed && playerPawn1.lastKey === 'c' && playerPawn1.isFighting === false && currentPlayerIndex === 1) {
      playerPawn1.fightON()
    } else if (keys.n.pressed && enemyPawn2.lastKey === 'n' && enemyPawn2.isFighting === false && currentEnemyIndex === 2) {
      enemyPawn2.fightON()
    } else if (playerPawn1.isFighting === true) {
      playerPawn1.fightOFF()
    } else if (enemyPawn2.isFighting === true) {
      enemyPawn2.fightOFF()
    }
  }

  if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemy })) {
    if (keys.d.pressed && playerPawn2.lastKey === 'd' && playerPawn2.idleState === false &&
      enemy.idleState === false &&
      currentPlayerIndex === 2 && playerPawn2.position.x < 1220 &&
      !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
      playerPawn2.velocity.x = 0.1
      enemy.velocity.x = 0.1
      playerPawn2.velocity.y = 0
      enemy.velocity.y = 0
      playerPawn2.isFighting = false
      enemy.isFighting = false
    } else if (keys.j.pressed && enemy.lastKey === 'j' && enemy.idleState === false &&
      playerPawn2.idleState === false &&
      currentEnemyIndex === 0 && enemy.position.x < 1220 &&
      !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
      enemy.velocity.x = -0.1
      playerPawn2.velocity.x = -0.1
      playerPawn2.velocity.y = 0
      enemy.velocity.y = 0
      playerPawn2.isFighting = false
      enemy.isFighting = false
    } else if (keys.c.pressed && playerPawn2.lastKey === 'c' && playerPawn2.isFighting === false && currentPlayerIndex === 2) {
      playerPawn2.fightON()
    } else if (keys.n.pressed && enemy.lastKey === 'n' && enemy.isFighting === false && currentEnemyIndex === 0) {
      enemy.fightON()
    } else if (playerPawn2.isFighting === true) {
      playerPawn2.fightOFF()
    } else if (enemy.isFighting === true) {
      enemy.fightOFF()
    }
  }

  if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn1 })) {
    if (keys.d.pressed && playerPawn2.lastKey === 'd' && playerPawn2.idleState === false &&
      enemyPawn1.idleState === false &&
      currentPlayerIndex === 2 && playerPawn2.position.x < 1220 &&
      !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
      playerPawn2.velocity.x = 0.1
      enemyPawn1.velocity.x = 0.1
      playerPawn2.velocity.y = 0
      enemyPawn1.velocity.y = 0
      playerPawn2.isFighting = false
      enemyPawn1.isFighting = false
    } else if (keys.j.pressed && enemyPawn1.lastKey === 'j' && enemyPawn1.idleState === false &&
      playerPawn2.idleState === false &&
      currentEnemyIndex === 1 && enemyPawn1.position.x < 1220 &&
      !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
      enemyPawn1.velocity.x = -0.1
      playerPawn2.velocity.x = -0.1
      playerPawn2.velocity.y = 0
      enemyPawn1.velocity.y = 0
      playerPawn2.isFighting = false
      enemyPawn1.isFighting = false
    } else if (keys.c.pressed && playerPawn2.lastKey === 'c' && playerPawn2.isFighting === false && currentPlayerIndex === 2) {
      playerPawn2.fightON()
    } else if (keys.n.pressed && enemyPawn1.lastKey === 'n' && enemyPawn1.isFighting === false && currentEnemyIndex === 1) {
      enemyPawn1.fightON()
    } else if (playerPawn2.isFighting === true) {
      playerPawn2.fightOFF()
    } else if (enemyPawn1.isFighting === true) {
      enemyPawn1.fightOFF()
    }
  }

  if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn2 })) {
    if (keys.d.pressed && playerPawn2.lastKey === 'd' && playerPawn2.idleState === false &&
      enemyPawn2.idleState === false &&
      currentPlayerIndex === 2 && playerPawn2.position.x < 1220 &&
      !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
      playerPawn2.velocity.x = 0.1
      enemyPawn2.velocity.x = 0.1
      playerPawn2.velocity.y = 0
      enemyPawn2.velocity.y = 0
      playerPawn2.isFighting = false
      enemyPawn2.isFighting = false
    } else if (keys.j.pressed && enemyPawn2.lastKey === 'j' && enemyPawn2.idleState === false &&
      playerPawn2.idleState === false &&
      currentEnemyIndex === 2 && enemyPawn2.position.x < 1220 &&
      !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
      enemyPawn2.velocity.x = -0.1
      playerPawn2.velocity.x = -0.1
      playerPawn2.velocity.y = 0
      enemyPawn2.velocity.y = 0
      playerPawn2.isFighting = false
      enemyPawn2.isFighting = false
    } else if (keys.c.pressed && playerPawn2.lastKey === 'c' && playerPawn2.isFighting === false && currentPlayerIndex === 2) {
      playerPawn2.fightON()
    } else if (keys.n.pressed && enemyPawn2.lastKey === 'n' && enemyPawn2.isFighting === false && currentEnemyIndex === 2) {
      enemyPawn2.fightON()
    } else if (playerPawn2.isFighting === true) {
      playerPawn2.fightOFF()
    } else if (enemyPawn2.isFighting === true) {
      enemyPawn2.fightOFF()
    }
  }




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
      player.phalanxON()
    } else if ((keys.z.pressed && player.lastKey === 'z' && player.idleState === false && currentPlayerIndex === 0) || player.stamina <= 10) {
      player.phalanxOFF()
    }

    // Player Turtle ON/OFF
    if (keys.t.pressed && player.lastKey === 't' && currentPlayerIndex === 0) {
      player.turtleON()
    } else if (keys.z.pressed && player.lastKey === 'z' && player.isTurtle === true && currentPlayerIndex === 0) {
      player.turtleOFF()
    } else if (keys.a.pressed && player.lastKey === 'a' && player.isTurtle === true && currentPlayerIndex === 0 &&
      player.position.x > 0 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
      player.velocity.x = -0.1
      player.takeStaminaMin()
      player.switchSprite('turtleIdle')
    } else if (keys.d.pressed && player.lastKey === 'd' && player.isTurtle === true && currentPlayerIndex === 0 &&
      player.position.x < 1220 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
      player.velocity.x = 0.1
      player.takeStaminaMin()
      player.switchSprite('turtleIdle')
    } else if (keys.w.pressed && player.lastKey === 'w' && player.isTurtle === true && currentPlayerIndex === 0 &&
      player.position.y > 0 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
      player.velocity.y = -0.1
      player.takeStaminaMin()
      player.switchSprite('turtleIdle')
    } else if (keys.s.pressed && player.lastKey === 's' && player.isTurtle === true && currentPlayerIndex === 0 &&
      player.position.y < 550 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
      player.velocity.y = 0.1
      player.takeStaminaMin()
      player.switchSprite('turtleIdle')
      // Player Idle Movement
    } else if (keys.a.pressed && player.lastKey === 'a' && player.idleState === true && currentPlayerIndex === 0 &&
      player.position.x > 0 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
      player.velocity.x = -0.5
      player.takeStaminaMin()
      player.switchSprite('run')
    } else if (keys.a.pressed && player.lastKey === 'a' && player.idleState === true && currentPlayerIndex === 0 &&
      terrainCollision({ rectangle1: player, rectangle2: terrain })) {
      player.velocity.x = 5
    } else if (keys.d.pressed && player.lastKey === 'd' && player.idleState === true && currentPlayerIndex === 0 &&
      player.position.x < 1220 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
      player.velocity.x = 0.5
      player.takeStaminaMin()
      player.switchSprite('run')
    } else if (keys.d.pressed && player.lastKey === 'd' && player.idleState === true && currentPlayerIndex === 0 &&
      terrainCollision({ rectangle1: player, rectangle2: terrain })) {
      player.velocity.x = -5
    } else if (keys.w.pressed && player.lastKey === 'w' && player.idleState === true && currentPlayerIndex === 0 &&
      player.position.y > 0 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
      player.velocity.y = -0.5
      player.takeStaminaMin()
      player.switchSprite('run')
    } else if (keys.w.pressed && player.lastKey === 'w' && player.idleState === true && currentPlayerIndex === 0 &&
      terrainCollision({ rectangle1: player, rectangle2: terrain })) {
      player.velocity.y = 5
    } else if (keys.s.pressed && player.lastKey === 's' && player.idleState === true && currentPlayerIndex === 0 &&
      player.position.y < 550 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
      player.velocity.y = 0.5
      player.takeStaminaMin()
      player.switchSprite('run')
    } else if (keys.s.pressed && player.lastKey === 's' && player.idleState === true && currentPlayerIndex === 0 &&
      terrainCollision({ rectangle1: player, rectangle2: terrain })) {
      player.velocity.y = -5
    } else if (player.idleState === true && player.isTurtle === false && currentPlayerIndex === 0) {
      player.regenStaminaMax()
      player.regenStrikeMax()
      player.switchSprite('idle')
    }

    // Player Phalanx Movement
    if (keys.a.pressed && player.lastKey === 'a' && player.idleState === false && currentPlayerIndex === 0 &&
      player.position.x > 0 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
      player.velocity.x = -0.1
      player.takeStaminaMin()
      player.regenStrikeMin()
      player.switchSprite('phalanxMarch')
    } else if (keys.a.pressed && player.lastKey === 'a' && player.idleState === false && currentPlayerIndex === 0 &&
      terrainCollision({ rectangle1: player, rectangle2: terrain })) {
      player.velocity.x = 1
    } else if (keys.d.pressed && player.lastKey === 'd' && player.idleState === false && currentPlayerIndex === 0 &&
      player.position.x < 1220 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
      player.velocity.x = 0.1
      player.takeStaminaMin()
      player.regenStrikeMin()
      player.switchSprite('phalanxMarch')
    } else if (keys.d.pressed && player.lastKey === 'd' && player.idleState === false && currentPlayerIndex === 0 &&
      terrainCollision({ rectangle1: player, rectangle2: terrain })) {
      player.velocity.x = -1
    } else if (keys.w.pressed && player.lastKey === 'w' && player.idleState === false && currentPlayerIndex === 0 &&
      player.position.y > 0 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
      player.velocity.y = -0.1
      player.takeStaminaMin()
      player.regenStrikeMin()
      player.switchSprite('phalanxMarch')
    } else if (keys.w.pressed && player.lastKey === 'w' && player.idleState === false && currentPlayerIndex === 0 &&
      terrainCollision({ rectangle1: player, rectangle2: terrain })) {
      player.velocity.y = 1
    } else if (keys.s.pressed && player.lastKey === 's' && player.idleState === false && currentPlayerIndex === 0 &&
      player.position.y < 550 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
      player.velocity.y = 0.1
      player.takeStaminaMin()
      player.regenStrikeMin()
      player.switchSprite('phalanxMarch')
    } else if (keys.s.pressed && player.lastKey === 's' && player.idleState === false && currentPlayerIndex === 0 &&
      terrainCollision({ rectangle1: player, rectangle2: terrain })) {
      player.velocity.y = -1
    } else if (player.isFighting === false && player.idleState === false && currentPlayerIndex === 0) {
      player.regenStaminaMed()
      player.regenStrikeMed()
      player.switchSprite('phalanxIdle')
    }

    // Player Idle Movement during Collision with Enemy
    if ((rectangularCollision({ rectangle1: player, rectangle2: enemy }) ||
      rectangularCollision({ rectangle1: player, rectangle2: enemyPawn1 }) ||
      rectangularCollision({ rectangle1: player, rectangle2: enemyPawn2 }))) {
      if (keys.a.pressed && player.lastKey === 'a' && player.idleState === true && currentPlayerIndex === 0 &&
        player.position.x > 0 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
        player.velocity.x = -0.1
        player.takeDamageMin()
        player.takeStaminaMed()
        player.switchSprite('run')
      } else if (keys.d.pressed && player.lastKey === 'd' && player.idleState === true && currentPlayerIndex === 0 &&
        player.position.x < 1220 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
        player.velocity.x = 0.1
        player.takeDamageMin()
        player.takeStaminaMed()
        player.switchSprite('run')
      } else if (keys.w.pressed && player.lastKey === 'w' && player.idleState === true && currentPlayerIndex === 0 &&
        player.position.y > 0 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
        player.velocity.y = -0.1
        player.takeDamageMin()
        player.takeStaminaMed()
        player.switchSprite('run')
      } else if (keys.s.pressed && player.lastKey === 's' && player.idleState === true && currentPlayerIndex === 0 &&
        player.position.y < 550 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
        player.velocity.y = 0.1
        player.takeDamageMin()
        player.takeStaminaMed()
        player.switchSprite('run')
      } else if (player.idleState === true && currentPlayerIndex === 0) {
        player.takeStaminaMed()
        player.switchSprite('idle')
      }
    }

    // Player Movement during Collision with Player
    if ((rectangularCollision({ rectangle1: player, rectangle2: playerPawn1 }) ||
      rectangularCollision({ rectangle1: player, rectangle2: playerPawn2 }))) {
      if (keys.a.pressed && player.lastKey === 'a' && currentPlayerIndex === 0 &&
        player.position.x > 0 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
        player.velocity.x = -0.1
        player.switchSprite('run')
      } else if (keys.d.pressed && player.lastKey === 'd' && currentPlayerIndex === 0 &&
        player.position.x < 1220 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
        player.velocity.x = 0.1
        player.switchSprite('run')
      } else if (keys.w.pressed && player.lastKey === 'w' && currentPlayerIndex === 0 &&
        player.position.y > 0 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
        player.velocity.y = -0.1
        player.switchSprite('run')
      } else if (keys.s.pressed && player.lastKey === 's' && currentPlayerIndex === 0 &&
        player.position.y < 550 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
        player.velocity.y = 0.1
        player.switchSprite('run')
      } else if (player.idleState === true && currentPlayerIndex === 0) {
        player.switchSprite('idle')
      }
    }

    // Player Ram Hits Enemy
    if (rectangularCollision({ rectangle1: player, rectangle2: enemy }) &&
      player.isRamming &&
      currentPlayerIndex === 0
    ) {
      enemy.takeHit()
      enemy.takeDamageRam()
      enemy.takeStaminaMax()
      player.takeStaminaRam()
      player.isRamming = false

      gsap.to('#enemyHealth', {
        width: enemy.health + '%'
      })
    }

    // Player Ram Hits EnemyPawn1
    if (rectangularCollision({ rectangle1: player, rectangle2: enemyPawn1 }) &&
      player.isRamming &&
      currentPlayerIndex === 0
    ) {
      enemyPawn1.takeHit()
      enemyPawn1.takeDamageRam()
      enemyPawn1.takeStaminaMax()
      player.takeStaminaRam()
      player.isRamming = false

      gsap.to('#enemyPawn1Health', {
        width: enemyPawn1.health + '%'
      })
    }

    // Player Ram Hits EnemyPawn2
    if (rectangularCollision({ rectangle1: player, rectangle2: enemyPawn2 }) &&
      player.isRamming &&
      currentPlayerIndex === 0
    ) {
      enemyPawn2.takeHit()
      enemyPawn2.takeDamageRam()
      enemyPawn2.takeStaminaMax()
      player.takeStaminaRam()
      player.isRamming = false

      gsap.to('#enemyPawn2Health', {
        width: enemyPawn2.health + '%'
      })
    }

    // Player Ram Attack misses
    if (player.isRamming && player.framesCurrent === 4 && currentPlayerIndex === 0) {
      player.takeStaminaRam()
      player.isRamming = false
    }

    // Player Fight Hits Idle Enemy
    if (rectangularCollision({ rectangle1: player, rectangle2: enemy }) &&
      player.isFighting &&
      enemy.idleState === true
    ) {
      enemy.takeDamageMax()
      player.takeStaminaMin()

      gsap.to('#enemyHealth', {
        width: enemy.health + '%'
      })
    }

    // Player Fight Hits Idle EnemyPawn1
    if (rectangularCollision({ rectangle1: player, rectangle2: enemyPawn1 }) &&
      player.isFighting &&
      enemyPawn1.idleState === true
    ) {
      enemyPawn1.takeDamageMax()
      player.takeStaminaMin()

      gsap.to('#enemyPawn1Health', {
        width: enemyPawn1.health + '%'
      })
    }

    // Player Fight Hits Idle EnemyPawn2
    if (rectangularCollision({ rectangle1: player, rectangle2: enemyPawn2 }) &&
      player.isFighting &&
      enemyPawn2.idleState === true
    ) {
      enemyPawn2.takeDamageMax()
      player.takeStaminaMin()

      gsap.to('#enemyPawn2Health', {
        width: enemyPawn2.health + '%'
      })
    }

    // Player Fight Hits Phalanx Enemy
    if (rectangularCollision({ rectangle1: player, rectangle2: enemy }) &&
      player.isFighting &&
      player.stamina >= 1 &&
      enemy.idleState === false
    ) {
      enemy.takeDamageMin()
      player.takeStaminaMin()

      gsap.to('#enemyHealth', {
        width: enemy.health + '%'
      })
    }

    // Player Fight Hits Phalanx EnemyPawn1
    if (rectangularCollision({ rectangle1: player, rectangle2: enemyPawn1 }) &&
      player.isFighting &&
      enemyPawn1.idleState === false
    ) {
      enemyPawn1.takeDamageMin()
      player.takeStaminaMin()

      gsap.to('#enemyPawn1Health', {
        width: enemyPawn1.health + '%'
      })
    }

    // Player Fight Hits Phalanx EnemyPawn2
    if (rectangularCollision({ rectangle1: player, rectangle2: enemyPawn2 }) &&
      player.isFighting &&
      enemyPawn2.idleState === false
    ) {
      enemyPawn2.takeDamageMin()
      player.takeStaminaMin()

      gsap.to('#enemyPawn2Health', {
        width: enemyPawn2.health + '%'
      })
    }

    // Player Regen Stamina
    if (player.idleState === true && currentPlayerIndex != 0) {
      player.regenStaminaMax()
      player.regenStrikeMax()
    } else if (player.idleState === false && currentPlayerIndex != 0) {
      player.regenStaminaMed()
      player.regenStrikeMed()
    }
  }



  // *** PlayerPawn1 CONTROLS ***
  if (!playerPawn1.dead) {
    // PlayerPawn1 Phalanx ON/OFF
    if (keys.r.pressed && playerPawn1.lastKey === 'r' && playerPawn1.idleState === true && currentPlayerIndex === 1) {
      playerPawn1.phalanxON()
    } else if (keys.z.pressed && playerPawn1.lastKey === 'z' && playerPawn1.idleState === false && currentPlayerIndex === 1 || playerPawn1.stamina <= 10) {
      playerPawn1.phalanxOFF()
    }

    // PlayerPawn1 Turtle ON/OFF
    if (keys.t.pressed && playerPawn1.lastKey === 't' && currentPlayerIndex === 1) {
      playerPawn1.turtleON()
    } else if (keys.z.pressed && playerPawn1.lastKey === 'z' && playerPawn1.isTurtle === true && currentPlayerIndex === 1) {
      playerPawn1.turtleOFF()
    } else if (keys.a.pressed && playerPawn1.lastKey === 'a' && playerPawn1.isTurtle === true && currentPlayerIndex === 1 &&
      playerPawn1.position.x > 0 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
      playerPawn1.velocity.x = -0.1
      playerPawn1.takeStaminaMin()
      playerPawn1.switchSprite('turtleIdle')
    } else if (keys.d.pressed && playerPawn1.lastKey === 'd' && playerPawn1.isTurtle === true && currentPlayerIndex === 1 &&
      playerPawn1.position.x < 1220 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
      playerPawn1.velocity.x = 0.1
      playerPawn1.takeStaminaMin()
      playerPawn1.switchSprite('turtleIdle')
    } else if (keys.w.pressed && playerPawn1.lastKey === 'w' && playerPawn1.isTurtle === true && currentPlayerIndex === 1 &&
      playerPawn1.position.y > 0 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
      playerPawn1.velocity.y = -0.1
      playerPawn1.takeStaminaMin()
      playerPawn1.switchSprite('turtleIdle')
    } else if (keys.s.pressed && playerPawn1.lastKey === 's' && playerPawn1.isTurtle === true && currentPlayerIndex === 1 &&
      playerPawn1.position.y < 550 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
      playerPawn1.velocity.y = 0.1
      playerPawn1.takeStaminaMin()
      playerPawn1.switchSprite('turtleIdle')
      // PlayerPawn1 Idle Movement
    } else if (keys.a.pressed && playerPawn1.lastKey === 'a' && playerPawn1.idleState === true && currentPlayerIndex === 1 &&
      playerPawn1.position.x > 0 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
      playerPawn1.velocity.x = -0.5
      playerPawn1.takeStaminaMin()
      playerPawn1.switchSprite('run')
    } else if (keys.a.pressed && playerPawn1.lastKey === 'a' && playerPawn1.idleState === true && currentPlayerIndex === 1 &&
      terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
      playerPawn1.velocity.x = 5
    } else if (keys.d.pressed && playerPawn1.lastKey === 'd' && playerPawn1.idleState === true && currentPlayerIndex === 1 &&
      playerPawn1.position.x < 1220 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
      playerPawn1.velocity.x = 0.5
      playerPawn1.takeStaminaMin()
      playerPawn1.switchSprite('run')
    } else if (keys.d.pressed && playerPawn1.lastKey === 'd' && playerPawn1.idleState === true && currentPlayerIndex === 1 &&
      terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
      playerPawn1.velocity.x = -5
    } else if (keys.w.pressed && playerPawn1.lastKey === 'w' && playerPawn1.idleState === true && currentPlayerIndex === 1 &&
      playerPawn1.position.y > 0 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
      playerPawn1.velocity.y = -0.5
      playerPawn1.takeStaminaMin()
      playerPawn1.switchSprite('run')
    } else if (keys.w.pressed && playerPawn1.lastKey === 'w' && playerPawn1.idleState === true && currentPlayerIndex === 1 &&
      terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
      playerPawn1.velocity.y = 5
    } else if (keys.s.pressed && playerPawn1.lastKey === 's' && playerPawn1.idleState === true && currentPlayerIndex === 1 &&
      playerPawn1.position.y < 550 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
      playerPawn1.velocity.y = 0.5
      playerPawn1.takeStaminaMin()
      playerPawn1.switchSprite('run')
    } else if (keys.s.pressed && playerPawn1.lastKey === 's' && playerPawn1.idleState === true && currentPlayerIndex === 1 &&
      terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
      playerPawn1.velocity.y = -5
    } else if (playerPawn1.idleState === true && playerPawn1.isTurtle === false && currentPlayerIndex === 1) {
      playerPawn1.regenStaminaMax()
      playerPawn1.regenStrikeMax()
      playerPawn1.switchSprite('idle')
    }

    // PlayerPawn1 Phalanx Movement
    if (keys.a.pressed && playerPawn1.lastKey === 'a' && playerPawn1.idleState === false && currentPlayerIndex === 1 &&
      playerPawn1.position.x > 0 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
      playerPawn1.velocity.x = -0.1
      playerPawn1.takeStaminaMin()
      playerPawn1.regenStrikeMin()
      playerPawn1.switchSprite('phalanxMarch')
    } else if (keys.a.pressed && playerPawn1.lastKey === 'a' && playerPawn1.idleState === false && currentPlayerIndex === 1 &&
      terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
      playerPawn1.velocity.x = 1
    } else if (keys.d.pressed && playerPawn1.lastKey === 'd' && playerPawn1.idleState === false && currentPlayerIndex === 1 &&
      playerPawn1.position.x < 1220 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
      playerPawn1.velocity.x = 0.1
      playerPawn1.takeStaminaMin()
      playerPawn1.regenStrikeMin()
      playerPawn1.switchSprite('phalanxMarch')
    } else if (keys.d.pressed && playerPawn1.lastKey === 'd' && playerPawn1.idleState === false && currentPlayerIndex === 1 &&
      terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
      playerPawn1.velocity.x = -1
    } else if (keys.w.pressed && playerPawn1.lastKey === 'w' && playerPawn1.idleState === false && currentPlayerIndex === 1 &&
      playerPawn1.position.y > 0 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
      playerPawn1.velocity.y = -0.1
      playerPawn1.takeStaminaMin()
      playerPawn1.regenStrikeMin()
      playerPawn1.switchSprite('phalanxMarch')
    } else if (keys.w.pressed && playerPawn1.lastKey === 'w' && playerPawn1.idleState === false && currentPlayerIndex === 1 &&
      terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
      playerPawn1.velocity.y = 1
    } else if (keys.s.pressed && playerPawn1.lastKey === 's' && playerPawn1.idleState === false && currentPlayerIndex === 1 &&
      playerPawn1.position.y < 550 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
      playerPawn1.velocity.y = 0.1
      playerPawn1.takeStaminaMin()
      playerPawn1.regenStrikeMin()
      playerPawn1.switchSprite('phalanxMarch')
    } else if (keys.s.pressed && playerPawn1.lastKey === 's' && playerPawn1.idleState === false && currentPlayerIndex === 1 &&
      terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
      playerPawn1.velocity.y = -1
    } else if (playerPawn1.isFighting === false && playerPawn1.idleState === false && currentPlayerIndex === 1) {
      playerPawn1.regenStaminaMed()
      playerPawn1.regenStrikeMed()
      playerPawn1.switchSprite('phalanxIdle')
    }

    // PlayerPawn1 Idle Movement during Collision with Enemy
    if ((rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemy }) ||
      rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn1 }) ||
      rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn2 }))) {
      if (keys.a.pressed && playerPawn1.lastKey === 'a' && playerPawn1.idleState === true && currentPlayerIndex === 1 &&
        playerPawn1.position.x > 0 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
        playerPawn1.velocity.x = -0.1
        playerPawn1.takeDamageMin()
        playerPawn1.takeStaminaMed()
        playerPawn1.switchSprite('run')
      } else if (keys.d.pressed && playerPawn1.lastKey === 'd' && playerPawn1.idleState === true && currentPlayerIndex === 1 &&
        playerPawn1.position.x < 1220 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
        playerPawn1.velocity.x = 0.1
        playerPawn1.takeDamageMin()
        playerPawn1.takeStaminaMed()
        playerPawn1.switchSprite('run')
      } else if (keys.w.pressed && playerPawn1.lastKey === 'w' && playerPawn1.idleState === true && currentPlayerIndex === 1 &&
        playerPawn1.position.y > 0 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
        playerPawn1.velocity.y = -0.1
        playerPawn1.takeDamageMin()
        playerPawn1.takeStaminaMed()
        playerPawn1.switchSprite('run')
      } else if (keys.s.pressed && playerPawn1.lastKey === 's' && playerPawn1.idleState === true && currentPlayerIndex === 1 &&
        playerPawn1.position.y < 550 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
        playerPawn1.velocity.y = 0.1
        playerPawn1.takeDamageMin()
        playerPawn1.takeStaminaMed()
        playerPawn1.switchSprite('run')
      } else if (playerPawn1.idleState === true && currentPlayerIndex === 1) {
        playerPawn1.takeStaminaMed()
        playerPawn1.switchSprite('idle')
      }
    }

    // PlayerPawn1 Movement during Collision with Player
    if ((rectangularCollision({ rectangle1: playerPawn1, rectangle2: player }) ||
      rectangularCollision({ rectangle1: playerPawn1, rectangle2: playerPawn2 }))) {
      if (keys.a.pressed && playerPawn1.lastKey === 'a' && currentPlayerIndex === 1 &&
        playerPawn1.position.x > 0 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
        playerPawn1.velocity.x = -0.1
        playerPawn1.switchSprite('run')
      } else if (keys.d.pressed && playerPawn1.lastKey === 'd' && currentPlayerIndex === 1 &&
        playerPawn1.position.x < 1220 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
        playerPawn1.velocity.x = 0.1
        playerPawn1.switchSprite('run')
      } else if (keys.w.pressed && playerPawn1.lastKey === 'w' && currentPlayerIndex === 1 &&
        playerPawn1.position.y > 0 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
        playerPawn1.velocity.y = -0.1
        playerPawn1.switchSprite('run')
      } else if (keys.s.pressed && playerPawn1.lastKey === 's' && currentPlayerIndex === 1 &&
        playerPawn1.position.y < 550 && !terrainCollision({ rectangle1: playerPawn1, rectangle2: terrain })) {
        playerPawn1.velocity.y = 0.1
        playerPawn1.switchSprite('run')
      } else if (playerPawn1.idleState === true && currentPlayerIndex === 1) {
        playerPawn1.switchSprite('idle')
      }
    }

    // PlayerPawn1 Ram Hits Enemy
    if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemy }) &&
      playerPawn1.isRamming &&
      currentPlayerIndex === 1
    ) {
      enemy.takeHit()
      enemy.takeDamageRam()
      enemy.takeStaminaMax()
      playerPawn1.takeStaminaRam()
      playerPawn1.isRamming = false

      gsap.to('#enemyHealth', {
        width: enemy.health + '%'
      })
    }

    // PlayerPawn1 Ram Hits EnemyPawn1
    if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn1 }) &&
      playerPawn1.isRamming &&
      currentPlayerIndex === 1
    ) {
      enemyPawn1.takeHit()
      enemyPawn1.takeDamageRam()
      enemyPawn1.takeStaminaMax()
      playerPawn1.takeStaminaRam()
      playerPawn1.isRamming = false

      gsap.to('#enemyPawn1Health', {
        width: enemyPawn1.health + '%'
      })
    }

    // PlayerPawn1 Ram Hits EnemyPawn2
    if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn2 }) &&
      playerPawn1.isRamming &&
      currentPlayerIndex === 1
    ) {
      enemyPawn2.takeHit()
      enemyPawn2.takeDamageRam()
      enemyPawn2.takeStaminaMax()
      playerPawn1.takeStaminaRam()
      playerPawn1.isRamming = false

      gsap.to('#enemyPawn2Health', {
        width: enemyPawn2.health + '%'
      })
    }

    // PlayerPawn1 Ram Attack misses
    if (playerPawn1.isRamming && playerPawn1.framesCurrent === 4 && currentPlayerIndex === 1) {
      playerPawn1.takeStaminaRam()
      playerPawn1.isRamming = false
    }

    // PlayerPawn1 Fight Hits Idle Enemy
    if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemy }) &&
      playerPawn1.isFighting &&
      enemy.idleState === true
    ) {
      enemy.takeDamageMax()
      playerPawn1.takeStaminaMin()

      gsap.to('#enemyHealth', {
        width: enemy.health + '%'
      })
    }

    // PlayerPawn1 Fight Hits Idle EnemyPawn1
    if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn1 }) &&
      playerPawn1.isFighting &&
      enemyPawn1.idleState === true
    ) {
      enemyPawn1.takeDamageMax()
      playerPawn1.takeStaminaMin()

      gsap.to('#enemyPawn1Health', {
        width: enemyPawn1.health + '%'
      })
    }

    // PlayerPawn1 Fight Hits Idle EnemyPawn2
    if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn2 }) &&
      playerPawn1.isFighting &&
      enemyPawn2.idleState === true
    ) {
      enemyPawn2.takeDamageMax()
      playerPawn1.takeStaminaMin()

      gsap.to('#enemyPawn2Health', {
        width: enemyPawn2.health + '%'
      })
    }

    // PlayerPawn1 Fight Hits Phalanx Enemy
    if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemy }) &&
      playerPawn1.isFighting &&
      playerPawn1.stamina >= 1 &&
      enemy.idleState === false
    ) {
      enemy.takeDamageMin()
      playerPawn1.takeStaminaMin()

      gsap.to('#enemyHealth', {
        width: enemy.health + '%'
      })
    }

    // PlayerPawn1 Fight Hits Phalanx EnemyPawn1
    if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn1 }) &&
      playerPawn1.isFighting &&
      enemyPawn1.idleState === false
    ) {
      enemyPawn1.takeDamageMin()
      playerPawn1.takeStaminaMin()

      gsap.to('#enemyPawn1Health', {
        width: enemyPawn1.health + '%'
      })
    }

    // PlayerPawn1 Fight Hits Phalanx EnemyPawn2
    if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn2 }) &&
      playerPawn1.isFighting &&
      enemyPawn2.idleState === false
    ) {
      enemyPawn2.takeDamageMin()
      playerPawn1.takeStaminaMin()

      gsap.to('#enemyPawn2Health', {
        width: enemyPawn2.health + '%'
      })
    }

    // PlayerPawn1 Regen Stamina
    if (playerPawn1.idleState === true && currentPlayerIndex != 1) {
      playerPawn1.regenStaminaMax()
      playerPawn1.regenStrikeMax()
    } else if (playerPawn1.idleState === false && currentPlayerIndex != 1) {
      playerPawn1.regenStaminaMed()
      playerPawn1.regenStrikeMed()
    }
  }


  // *** PlayerPawn2 CONTROLS ***
  if (!playerPawn2.dead) {
    // PlayerPawn2 Phalanx ON/OFF
    if (keys.r.pressed && playerPawn2.lastKey === 'r' && playerPawn2.idleState === true && currentPlayerIndex === 2) {
      playerPawn2.phalanxON()
    } else if (keys.z.pressed && playerPawn2.lastKey === 'z' && playerPawn2.idleState === false && currentPlayerIndex === 2 || playerPawn2.stamina <= 10) {
      playerPawn2.phalanxOFF()
    }

    // PlayerPawn2 Turtle ON/OFF
    if (keys.t.pressed && playerPawn2.lastKey === 't' && currentPlayerIndex === 2) {
      playerPawn2.turtleON()
    } else if (keys.z.pressed && playerPawn2.lastKey === 'z' && playerPawn2.isTurtle === true && currentPlayerIndex === 2) {
      playerPawn2.turtleOFF()
    } else if (keys.a.pressed && playerPawn2.lastKey === 'a' && playerPawn2.isTurtle === true && currentPlayerIndex === 2 &&
      playerPawn2.position.x > 0 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
      playerPawn2.velocity.x = -0.1
      playerPawn2.takeStaminaMin()
      playerPawn2.switchSprite('turtleIdle')
    } else if (keys.d.pressed && playerPawn2.lastKey === 'd' && playerPawn2.isTurtle === true && currentPlayerIndex === 2 &&
      playerPawn2.position.x < 1220 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
      playerPawn2.velocity.x = 0.1
      playerPawn2.takeStaminaMin()
      playerPawn2.switchSprite('turtleIdle')
    } else if (keys.w.pressed && playerPawn2.lastKey === 'w' && playerPawn2.isTurtle === true && currentPlayerIndex === 2 &&
      playerPawn2.position.y > 0 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
      playerPawn2.velocity.y = -0.1
      playerPawn2.takeStaminaMin()
      playerPawn2.switchSprite('turtleIdle')
    } else if (keys.s.pressed && playerPawn2.lastKey === 's' && playerPawn2.isTurtle === true && currentPlayerIndex === 2 &&
      playerPawn2.position.y < 550 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
      playerPawn2.velocity.y = 0.1
      playerPawn2.takeStaminaMin()
      playerPawn2.switchSprite('turtleIdle')
      // PlayerPawn2 Idle Movement
    } else if (keys.a.pressed && playerPawn2.lastKey === 'a' && playerPawn2.idleState === true && currentPlayerIndex === 2 &&
      playerPawn2.position.x > 0 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
      playerPawn2.velocity.x = -0.5
      playerPawn2.takeStaminaMin()
      playerPawn2.switchSprite('run')
    } else if (keys.a.pressed && playerPawn2.lastKey === 'a' && playerPawn2.idleState === true && currentPlayerIndex === 2 &&
      terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
      playerPawn2.velocity.x = 5
    } else if (keys.d.pressed && playerPawn2.lastKey === 'd' && playerPawn2.idleState === true && currentPlayerIndex === 2 &&
      playerPawn2.position.x < 1220 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
      playerPawn2.velocity.x = 0.5
      playerPawn2.takeStaminaMin()
      playerPawn2.switchSprite('run')
    } else if (keys.d.pressed && playerPawn2.lastKey === 'd' && playerPawn2.idleState === true && currentPlayerIndex === 2 &&
      terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
      playerPawn2.velocity.x = -5
    } else if (keys.w.pressed && playerPawn2.lastKey === 'w' && playerPawn2.idleState === true && currentPlayerIndex === 2 &&
      playerPawn2.position.y > 0 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
      playerPawn2.velocity.y = -0.5
      playerPawn2.takeStaminaMin()
      playerPawn2.switchSprite('run')
    } else if (keys.w.pressed && playerPawn2.lastKey === 'w' && playerPawn2.idleState === true && currentPlayerIndex === 2 &&
      terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
      playerPawn2.velocity.y = 5
    } else if (keys.s.pressed && playerPawn2.lastKey === 's' && playerPawn2.idleState === true && currentPlayerIndex === 2 &&
      playerPawn2.position.y < 550 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
      playerPawn2.velocity.y = 0.5
      playerPawn2.takeStaminaMin()
      playerPawn2.switchSprite('run')
    } else if (keys.s.pressed && playerPawn2.lastKey === 's' && playerPawn2.idleState === true && currentPlayerIndex === 2 &&
      terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
      playerPawn2.velocity.y = -5
    } else if (playerPawn2.idleState === true && playerPawn2.isTurtle === false && currentPlayerIndex === 2) {
      playerPawn2.regenStaminaMax()
      playerPawn2.regenStrikeMax()
      playerPawn2.switchSprite('idle')
    }

    // PlayerPawn2 Phalanx Movement
    if (keys.a.pressed && playerPawn2.lastKey === 'a' && playerPawn2.idleState === false && currentPlayerIndex === 2 &&
      playerPawn2.position.x > 0 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
      playerPawn2.velocity.x = -0.1
      playerPawn2.takeStaminaMin()
      playerPawn2.regenStrikeMin()
      playerPawn2.switchSprite('phalanxMarch')
    } else if (keys.a.pressed && playerPawn2.lastKey === 'a' && playerPawn2.idleState === false && currentPlayerIndex === 2 &&
      terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
      playerPawn2.velocity.x = 1
    } else if (keys.d.pressed && playerPawn2.lastKey === 'd' && playerPawn2.idleState === false && currentPlayerIndex === 2 &&
      playerPawn2.position.x < 1220 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
      playerPawn2.velocity.x = 0.1
      playerPawn2.takeStaminaMin()
      playerPawn2.regenStrikeMin()
      playerPawn2.switchSprite('phalanxMarch')
    } else if (keys.d.pressed && playerPawn2.lastKey === 'd' && playerPawn2.idleState === false && currentPlayerIndex === 2 &&
      terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
      playerPawn2.velocity.x = -1
    } else if (keys.w.pressed && playerPawn2.lastKey === 'w' && playerPawn2.idleState === false && currentPlayerIndex === 2 &&
      playerPawn2.position.y > 0 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
      playerPawn2.velocity.y = -0.1
      playerPawn2.takeStaminaMin()
      playerPawn2.regenStrikeMin()
      playerPawn2.switchSprite('phalanxMarch')
    } else if (keys.w.pressed && playerPawn2.lastKey === 'w' && playerPawn2.idleState === false && currentPlayerIndex === 2 &&
      terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
      playerPawn2.velocity.y = 1
    } else if (keys.s.pressed && playerPawn2.lastKey === 's' && playerPawn2.idleState === false && currentPlayerIndex === 2 &&
      playerPawn2.position.y < 550 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
      playerPawn2.velocity.y = 0.1
      playerPawn2.takeStaminaMin()
      playerPawn2.regenStrikeMin()
      playerPawn2.switchSprite('phalanxMarch')
    } else if (keys.s.pressed && playerPawn2.lastKey === 's' && playerPawn2.idleState === false && currentPlayerIndex === 2 &&
      terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
      playerPawn2.velocity.y = -1
    } else if (playerPawn2.isFighting === false && playerPawn2.idleState === false && currentPlayerIndex === 2) {
      playerPawn2.regenStaminaMed()
      playerPawn2.regenStrikeMed()
      playerPawn2.switchSprite('phalanxIdle')
    }

    // PlayerPawn2 Idle Movement during Collision with Enemy
    if ((rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemy }) ||
      rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn1 }) ||
      rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn2 }))) {
      if (keys.a.pressed && playerPawn2.lastKey === 'a' && playerPawn2.idleState === true && currentPlayerIndex === 2 &&
        playerPawn2.position.x > 0 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
        playerPawn2.velocity.x = -0.1
        playerPawn2.takeDamageMin()
        playerPawn2.takeStaminaMed()
        playerPawn2.switchSprite('run')
      } else if (keys.d.pressed && playerPawn2.lastKey === 'd' && playerPawn2.idleState === true && currentPlayerIndex === 2 &&
        playerPawn2.position.x < 1220 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
        playerPawn2.velocity.x = 0.1
        playerPawn2.takeDamageMin()
        playerPawn2.takeStaminaMed()
        playerPawn2.switchSprite('run')
      } else if (keys.w.pressed && playerPawn2.lastKey === 'w' && playerPawn2.idleState === true && currentPlayerIndex === 2 &&
        playerPawn2.position.y > 0 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
        playerPawn2.velocity.y = -0.1
        playerPawn2.takeDamageMin()
        playerPawn2.takeStaminaMed()
        playerPawn2.switchSprite('run')
      } else if (keys.s.pressed && playerPawn2.lastKey === 's' && playerPawn2.idleState === true && currentPlayerIndex === 2 &&
        playerPawn2.position.y < 550 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
        playerPawn2.velocity.y = 0.1
        playerPawn2.takeDamageMin()
        playerPawn2.takeStaminaMed()
        playerPawn2.switchSprite('run')
      } else if (playerPawn2.idleState === true && currentPlayerIndex === 2) {
        playerPawn2.takeStaminaMed()
        playerPawn2.switchSprite('idle')
      }
    }

    // PlayerPawn2 Movement during Collision with Player
    if ((rectangularCollision({ rectangle1: playerPawn2, rectangle2: player }) ||
      rectangularCollision({ rectangle1: playerPawn2, rectangle2: playerPawn1 }))) {
      if (keys.a.pressed && playerPawn2.lastKey === 'a' && currentPlayerIndex === 2 &&
        playerPawn2.position.x > 0 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
        playerPawn2.velocity.x = -0.1
        playerPawn2.switchSprite('run')
      } else if (keys.d.pressed && playerPawn2.lastKey === 'd' && currentPlayerIndex === 2 &&
        playerPawn2.position.x < 1220 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
        playerPawn2.velocity.x = 0.1
        playerPawn2.switchSprite('run')
      } else if (keys.w.pressed && playerPawn2.lastKey === 'w' && currentPlayerIndex === 2 &&
        playerPawn2.position.y > 0 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
        playerPawn2.velocity.y = -0.1
        playerPawn2.switchSprite('run')
      } else if (keys.s.pressed && playerPawn2.lastKey === 's' && currentPlayerIndex === 2 &&
        playerPawn2.position.y < 550 && !terrainCollision({ rectangle1: playerPawn2, rectangle2: terrain })) {
        playerPawn2.velocity.y = 0.1
        playerPawn2.switchSprite('run')
      } else if (playerPawn2.idleState === true && currentPlayerIndex === 2) {
        playerPawn2.switchSprite('idle')
      }
    }

    // PlayerPawn2 Ram Hits Enemy
    if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemy }) &&
      playerPawn2.isRamming &&
      currentPlayerIndex === 2
    ) {
      enemy.takeHit()
      enemy.takeDamageRam()
      enemy.takeStaminaMax()
      playerPawn2.takeStaminaRam()
      playerPawn2.isRamming = false

      gsap.to('#enemyHealth', {
        width: enemy.health + '%'
      })
    }

    // PlayerPawn2 Ram Hits EnemyPawn1
    if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn1 }) &&
      playerPawn2.isRamming &&
      currentPlayerIndex === 2
    ) {
      enemyPawn1.takeHit()
      enemyPawn1.takeDamageRam()
      enemyPawn1.takeStaminaMax()
      playerPawn2.takeStaminaRam()
      playerPawn2.isRamming = false

      gsap.to('#enemyPawn1Health', {
        width: enemyPawn1.health + '%'
      })
    }

    // PlayerPawn2 Ram Hits EnemyPawn2
    if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn2 }) &&
      playerPawn2.isRamming &&
      currentPlayerIndex === 2
    ) {
      enemyPawn2.takeHit()
      enemyPawn2.takeDamageRam()
      enemyPawn2.takeStaminaMax()
      playerPawn2.takeStaminaRam()
      playerPawn2.isRamming = false

      gsap.to('#enemyPawn2Health', {
        width: enemyPawn2.health + '%'
      })
    }

    // PlayerPawn2 Ram Attack misses
    if (playerPawn2.isRamming && playerPawn2.framesCurrent === 4 && currentPlayerIndex === 2) {
      playerPawn2.takeStaminaRam()
      playerPawn2.isRamming = false
    }

    // PlayerPawn2 Fight Hits Idle Enemy
    if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemy }) &&
      playerPawn2.isFighting &&
      enemy.idleState === true
    ) {
      enemy.takeDamageMax()
      playerPawn2.takeStaminaMin()

      gsap.to('#enemyHealth', {
        width: enemy.health + '%'
      })
    }

    // PlayerPawn2 Fight Hits Idle EnemyPawn1
    if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn1 }) &&
      playerPawn2.isFighting &&
      enemyPawn1.idleState === true
    ) {
      enemyPawn1.takeDamageMax()
      playerPawn2.takeStaminaMin()

      gsap.to('#enemyPawn1Health', {
        width: enemyPawn1.health + '%'
      })
    }

    // PlayerPawn2 Fight Hits Idle EnemyPawn2
    if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn2 }) &&
      playerPawn2.isFighting &&
      enemyPawn2.idleState === true
    ) {
      enemyPawn2.takeDamageMax()
      playerPawn2.takeStaminaMin()

      gsap.to('#enemyPawn2Health', {
        width: enemyPawn2.health + '%'
      })
    }

    // PlayerPawn2 Fight Hits Phalanx Enemy
    if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemy }) &&
      playerPawn2.isFighting &&
      playerPawn2.stamina >= 1 &&
      enemy.idleState === false
    ) {
      enemy.takeDamageMin()
      playerPawn2.takeStaminaMin()

      gsap.to('#enemyHealth', {
        width: enemy.health + '%'
      })
    }

    // PlayerPawn2 Fight Hits Phalanx EnemyPawn1
    if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn1 }) &&
      playerPawn2.isFighting &&
      enemyPawn1.idleState === false
    ) {
      enemyPawn1.takeDamageMin()
      playerPawn2.takeStaminaMin()

      gsap.to('#enemyPawn1Health', {
        width: enemyPawn1.health + '%'
      })
    }

    // PlayerPawn2 Fight Hits Phalanx EnemyPawn2
    if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn2 }) &&
      playerPawn2.isFighting &&
      enemyPawn2.idleState === false
    ) {
      enemyPawn2.takeDamageMin()
      playerPawn2.takeStaminaMin()

      gsap.to('#enemyPawn2Health', {
        width: enemyPawn2.health + '%'
      })
    }

    // PlayerPawn2 Regen Stamina
    if (playerPawn2.idleState === true && currentPlayerIndex != 2) {
      playerPawn2.regenStaminaMax()
      playerPawn2.regenStrikeMax()
    } else if (playerPawn2.idleState === false && currentPlayerIndex != 2) {
      playerPawn2.regenStaminaMed()
      playerPawn2.regenStrikeMed()
    }
  }



  // *** Enemy CONTROLS ***
  if (!enemy.dead) {
    // Enemy Phalanx ON/OFF
    if (keys.y.pressed && enemy.lastKey === 'y' && enemy.idleState === true && currentEnemyIndex === 0) {
      enemy.phalanxON()
    } else if (keys.p.pressed && enemy.lastKey === 'p' && enemy.idleState === false && currentEnemyIndex === 0 || enemy.stamina <= 10) {
      enemy.phalanxOFF()
    }

    if (keys.y.pressed && enemyPawn1.lastKey === 'y' && enemyPawn1.idleState === true && currentEnemyIndex === 1) {
      enemyPawn1.phalanxON()
    } else if (keys.p.pressed && enemyPawn1.lastKey === 'p' && enemyPawn1.idleState === false && currentEnemyIndex === 1 || enemyPawn1.stamina <= 10) {
      enemyPawn1.phalanxOFF()
    }

    if (keys.y.pressed && enemyPawn2.lastKey === 'y' && enemyPawn2.idleState === true && currentEnemyIndex === 2) {
      enemyPawn2.phalanxON()
    } else if (keys.p.pressed && enemyPawn2.lastKey === 'p' && enemyPawn2.idleState === false && currentEnemyIndex === 2 || enemyPawn2.stamina <= 10) {
      enemyPawn2.phalanxOFF()
    }

    // Enemy Turtle ON/OFF
    if (keys.g.pressed && enemy.lastKey === 'g' && currentEnemyIndex === 0) {
      enemy.turtleON()
    } else if (keys.p.pressed && enemy.lastKey === 'p' && enemy.isTurtle === true && currentEnemyIndex === 0) {
      enemy.turtleOFF()
    } else if (keys.j.pressed && enemy.lastKey === 'j' && enemy.isTurtle === true && currentEnemyIndex === 0 &&
      enemy.position.x > 0 && !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
      enemy.velocity.x = -0.1
      enemy.takeStaminaMin()
      enemy.switchSprite('turtleIdle')
    } else if (keys.l.pressed && enemy.lastKey === 'l' && enemy.isTurtle === true && currentEnemyIndex === 0 &&
      enemy.position.x < 1220 && !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
      enemy.velocity.x = 0.1
      enemy.takeStaminaMin()
      enemy.switchSprite('turtleIdle')
    } else if (keys.i.pressed && enemy.lastKey === 'i' && enemy.isTurtle === true && currentEnemyIndex === 0 &&
      enemy.position.y > 0 && !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
      enemy.velocity.y = -0.1
      enemy.takeStaminaMin()
      enemy.switchSprite('turtleIdle')
    } else if (keys.k.pressed && enemy.lastKey === 'k' && enemy.isTurtle === true && currentEnemyIndex === 0 &&
      enemy.position.y < 550 && !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
      enemy.velocity.y = 0.1
      enemy.takeStaminaMin()
      enemy.switchSprite('turtleIdle')
      // Enemy Idle Movement
    } else if (keys.j.pressed && enemy.lastKey === 'j' && enemy.idleState === true && currentEnemyIndex === 0 &&
      enemy.position.x > 0 && !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
      enemy.velocity.x = -0.5
      enemy.takeStaminaMin()
      enemy.switchSprite('run')
    } else if (keys.j.pressed && enemy.lastKey === 'j' && enemy.idleState === true && currentEnemyIndex === 0 &&
      terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
      enemy.velocity.x = 5
    } else if (keys.l.pressed && enemy.lastKey === 'l' && enemy.idleState === true && currentEnemyIndex === 0 &&
      enemy.position.x < 1220 && !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
      enemy.velocity.x = 0.5
      enemy.takeStaminaMin()
      enemy.switchSprite('run')
    } else if (keys.l.pressed && enemy.lastKey === 'l' && enemy.idleState === true && currentEnemyIndex === 0 &&
      terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
      enemy.velocity.x = -5
    } else if (keys.i.pressed && enemy.lastKey === 'i' && enemy.idleState === true && currentEnemyIndex === 0 &&
      enemy.position.y > 0 && !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
      enemy.velocity.y = -0.5
      enemy.takeStaminaMin()
      enemy.switchSprite('run')
    } else if (keys.i.pressed && enemy.lastKey === 'i' && enemy.idleState === true && currentEnemyIndex === 0 &&
      terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
      enemy.velocity.y = 5
    } else if (keys.k.pressed && enemy.lastKey === 'k' && enemy.idleState === true && currentEnemyIndex === 0 &&
      enemy.position.y < 550 && !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
      enemy.velocity.y = 0.5
      enemy.takeStaminaMin()
      enemy.switchSprite('run')
    } else if (keys.k.pressed && enemy.lastKey === 'k' && enemy.idleState === true && currentEnemyIndex === 0 &&
      terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
      enemy.velocity.y = -5
    } else if (enemy.idleState === true && enemy.isTurtle === false && currentEnemyIndex === 0) {
      enemy.regenStaminaMax()
      enemy.regenStrikeMax()
      enemy.switchSprite('idle')
    }

    // Enemy Phalanx Movement
    if (keys.j.pressed && enemy.lastKey === 'j' && enemy.idleState === false && currentEnemyIndex === 0 &&
      enemy.position.x > 0 && !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
      enemy.velocity.x = -0.1
      enemy.takeStaminaMin()
      enemy.regenStrikeMin()
      enemy.switchSprite('phalanxMarch')
    } else if (keys.j.pressed && enemy.lastKey === 'j' && enemy.idleState === false && currentEnemyIndex === 0 &&
      terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
      enemy.velocity.x = 1
    } else if (keys.l.pressed && enemy.lastKey === 'l' && enemy.idleState === false && currentEnemyIndex === 0 &&
      enemy.position.x < 1220 && !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
      enemy.velocity.x = 0.1
      enemy.takeStaminaMin()
      enemy.regenStrikeMin()
      enemy.switchSprite('phalanxMarch')
    } else if (keys.l.pressed && enemy.lastKey === 'l' && enemy.idleState === false && currentEnemyIndex === 0 &&
      terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
      enemy.velocity.x = -1
    } else if (keys.i.pressed && enemy.lastKey === 'i' && enemy.idleState === false && currentEnemyIndex === 0 &&
      enemy.position.y > 0 && !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
      enemy.velocity.y = -0.1
      enemy.takeStaminaMin()
      enemy.regenStrikeMin()
      enemy.switchSprite('phalanxMarch')
    } else if (keys.i.pressed && enemy.lastKey === 'i' && enemy.idleState === false && currentEnemyIndex === 0 &&
      terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
      enemy.velocity.y = 1
    } else if (keys.k.pressed && enemy.lastKey === 'k' && enemy.idleState === false && currentEnemyIndex === 0 &&
      enemy.position.y < 550 && !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
      enemy.velocity.y = 0.1
      enemy.takeStaminaMin()
      enemy.regenStrikeMin()
      enemy.switchSprite('phalanxMarch')
    } else if (keys.k.pressed && enemy.lastKey === 'k' && enemy.idleState === false && currentEnemyIndex === 0 &&
      terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
      enemy.velocity.y = -1
    } else if (enemy.isFighting === false && enemy.idleState === false && currentEnemyIndex === 0) {
      enemy.regenStaminaMed()
      enemy.regenStrikeMed()
      enemy.switchSprite('phalanxIdle')
    }

    // Enemy Idle Movement during Collision with Player
    if ((rectangularCollision({ rectangle1: player, rectangle2: enemy }) ||
      rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemy }) ||
      rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemy }))) {
      if (keys.j.pressed && enemy.lastKey === 'j' && enemy.idleState === true && currentEnemyIndex === 0 &&
        enemy.position.x > 0 && !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
        enemy.velocity.x = -0.1
        enemy.takeDamageMin()
        enemy.takeStaminaMed()
        enemy.switchSprite('run')
      } else if (keys.l.pressed && enemy.lastKey === 'l' && enemy.idleState === true && currentEnemyIndex === 0 &&
        enemy.position.x < 1220 && !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
        enemy.velocity.x = 0.1
        enemy.takeDamageMin()
        enemy.takeStaminaMed()
        enemy.switchSprite('run')
      } else if (keys.i.pressed && enemy.lastKey === 'i' && enemy.idleState === true && currentEnemyIndex === 0 &&
        enemy.position.y > 0 && !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
        enemy.velocity.y = -0.1
        enemy.takeDamageMin()
        enemy.takeStaminaMed()
        enemy.switchSprite('run')
      } else if (keys.k.pressed && enemy.lastKey === 'k' && enemy.idleState === true && currentEnemyIndex === 0 &&
        enemy.position.y < 550 && !terrainCollision({ rectangle1: enemy, rectangle2: terrain })) {
        enemy.velocity.y = 0.1
        enemy.takeDamageMin()
        enemy.takeStaminaMed()
        enemy.switchSprite('run')
      } else if (enemy.idleState === true && currentEnemyIndex === 0) {
        enemy.takeStaminaMed()
        enemy.switchSprite('idle')
      }
    }

    // Enemy Movement during Collision with Enemy
    if ((rectangularCollision({ rectangle1: enemyPawn1, rectangle2: enemy }) ||
      rectangularCollision({ rectangle1: enemyPawn2, rectangle2: enemy }))) {
      if (keys.j.pressed && enemy.lastKey === 'j' && currentEnemyIndex === 0 &&
        player.position.x > 0 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
        enemy.velocity.x = -0.1
        enemy.switchSprite('run')
      } else if (keys.l.pressed && enemy.lastKey === 'l' && currentEnemyIndex === 0 &&
        player.position.x < 1220 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
        enemy.velocity.x = 0.1
        enemy.switchSprite('run')
      } else if (keys.i.pressed && enemy.lastKey === 'i' && currentEnemyIndex === 0 &&
        player.position.y > 0 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
        enemy.velocity.y = -0.1
        enemy.switchSprite('run')
      } else if (keys.k.pressed && enemy.lastKey === 'k' && currentEnemyIndex === 0 &&
        player.position.y < 550 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
        enemy.velocity.y = 0.1
        enemy.switchSprite('run')
      } else if (enemy.idleState === true && currentEnemyIndex === 0) {
        enemy.switchSprite('idle')
      }
    }

    // Enemy Ram Hits Player
    if (rectangularCollision({ rectangle1: player, rectangle2: enemy }) &&
      enemy.isRamming &&
      currentEnemyIndex === 0
    ) {
      player.takeHit()
      player.takeDamageRam()
      player.takeStaminaMax()
      enemy.takeStaminaRam()
      enemy.isRamming = false

      gsap.to('#playerHealth', {
        width: player.health + '%'
      })
    }

    // Enemy Ram Hits PlayerPawn1
    if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemy }) &&
      enemy.isRamming &&
      currentEnemyIndex === 0
    ) {
      playerPawn1.takeHit()
      playerPawn1.takeDamageRam()
      playerPawn1.takeStaminaMax()
      enemy.takeStaminaRam()
      enemy.isRamming = false

      gsap.to('#playerPawn1Health', {
        width: playerPawn1.health + '%'
      })
    }

    // Enemy Ram Hits PlayerPawn2
    if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemy }) &&
      enemy.isRamming &&
      currentEnemyIndex === 0
    ) {
      playerPawn2.takeHit()
      playerPawn2.takeDamageRam()
      playerPawn2.takeStaminaMax()
      enemy.takeStaminaRam()
      enemy.isRamming = false

      gsap.to('#playerPawn2Health', {
        width: playerPawn2.health + '%'
      })
    }

    // Enemy Ram misses
    if (enemy.isRamming && enemy.framesCurrent === 4 &&
      currentEnemyIndex === 0) {
      enemy.takeStaminaRam()
      enemy.isRamming = false
    }

    // Enemy Fight Hits Idle Player
    if (rectangularCollision({ rectangle1: player, rectangle2: enemy }) &&
      enemy.isFighting &&
      player.idleState === true
    ) {
      player.takeDamageMax()
      enemy.takeStaminaMin()

      gsap.to('#playerHealth', {
        width: player.health + '%'
      })
    }

    // Enemy Fight Hits Idle PlayerPawn1
    if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemy }) &&
      enemy.isFighting &&
      playerPawn1.idleState === true
    ) {
      playerPawn1.takeDamageMax()
      enemy.takeStaminaMin()

      gsap.to('#playerPawn1Health', {
        width: playerPawn1.health + '%'
      })
    }

    // Enemy Fight Hits Idle PlayerPawn2
    if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemy }) &&
      enemy.isFighting &&
      playerPawn2.idleState === true
    ) {
      playerPawn2.takeDamageMax()
      enemy.takeStaminaMin()

      gsap.to('#playerPawn2Pawn1Health', {
        width: playerPawn2.health + '%'
      })
    }

    // Enemy Fight hits Phalanx Player
    if (rectangularCollision({ rectangle1: player, rectangle2: enemy }) &&
      enemy.isFighting &&
      enemy.stamina >= 1 &&
      player.idleState === false
    ) {
      player.takeDamageMin()
      enemy.takeStaminaMin()

      gsap.to('#playerHealth', {
        width: player.health + '%'
      })
    }

    // Enemy Fight hits Phalanx PlayerPawn1
    if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemy }) &&
      enemy.isFighting &&
      enemy.stamina >= 1 &&
      playerPawn1.idleState === false
    ) {
      playerPawn1.takeDamageMin()
      enemy.takeStaminaMin()

      gsap.to('#playerPawn1Health', {
        width: playerPawn1.health + '%'
      })
    }

    // Enemy Fight hits Phalanx PlayerPawn2
    if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemy }) &&
      enemy.isFighting &&
      enemy.stamina >= 1 &&
      playerPawn2.idleState === false
    ) {
      playerPawn2.takeDamageMin()
      enemy.takeStaminaMin()

      gsap.to('#playerPawn2Health', {
        width: playerPawn2.health + '%'
      })
    }

    // Enemy Regen Stamina
    if (enemy.idleState === true && currentEnemyIndex != 0) {
      enemy.regenStaminaMax()
      enemy.regenStrikeMax()
    } else if (enemy.idleState === false && currentEnemyIndex != 0) {
      enemy.regenStaminaMed()
      enemy.regenStrikeMed()
    }
  }



  // *** EnemyPawn1 CONTROLS ***
  if (!enemyPawn1.dead) {
    // EnemyPawn1 Phalanx ON/OFF
    if (keys.y.pressed && enemyPawn1.lastKey === 'y' && enemyPawn1.idleState === true && currentEnemyIndex === 1) {
      enemyPawn1.phalanxON()
    } else if (keys.p.pressed && enemyPawn1.lastKey === 'p' && enemyPawn1.idleState === false && currentEnemyIndex === 1 || enemyPawn1.stamina <= 10) {
      enemyPawn1.phalanxOFF()
    }

    // EnemyPawn1 Turtle ON/OFF
    if (keys.g.pressed && enemyPawn1.lastKey === 'g' && currentEnemyIndex === 1) {
      enemyPawn1.turtleON()
    } else if (keys.p.pressed && enemyPawn1.lastKey === 'p' && enemyPawn1.isTurtle === true && currentEnemyIndex === 1) {
      enemyPawn1.turtleOFF()
    } else if (keys.j.pressed && enemyPawn1.lastKey === 'j' && enemyPawn1.isTurtle === true && currentEnemyIndex === 1 &&
      enemyPawn1.position.x > 0 && !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
      enemyPawn1.velocity.x = -0.1
      enemyPawn1.takeStaminaMin()
      enemyPawn1.switchSprite('turtleIdle')
    } else if (keys.l.pressed && enemyPawn1.lastKey === 'l' && enemyPawn1.isTurtle === true && currentEnemyIndex === 1 &&
      enemyPawn1.position.x < 1220 && !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
      enemyPawn1.velocity.x = 0.1
      enemyPawn1.takeStaminaMin()
      enemyPawn1.switchSprite('turtleIdle')
    } else if (keys.i.pressed && enemyPawn1.lastKey === 'i' && enemyPawn1.isTurtle === true && currentEnemyIndex === 1 &&
      enemyPawn1.position.y > 0 && !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
      enemyPawn1.velocity.y = -0.1
      enemyPawn1.takeStaminaMin()
      enemyPawn1.switchSprite('turtleIdle')
    } else if (keys.k.pressed && enemyPawn1.lastKey === 'k' && enemyPawn1.isTurtle === true && currentEnemyIndex === 1 &&
      enemyPawn1.position.y < 550 && !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
      enemyPawn1.velocity.y = 0.1
      enemyPawn1.takeStaminaMin()
      enemyPawn1.switchSprite('turtleIdle')
      // EnemyPawn1 Idle Movement
    } else if (keys.j.pressed && enemyPawn1.lastKey === 'j' && enemyPawn1.idleState === true && currentEnemyIndex === 1 &&
      enemyPawn1.position.x > 0 && !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
      enemyPawn1.velocity.x = -0.5
      enemyPawn1.takeStaminaMin()
      enemyPawn1.switchSprite('run')
    } else if (keys.j.pressed && enemyPawn1.lastKey === 'j' && enemyPawn1.idleState === true && currentEnemyIndex === 1 &&
      terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
      enemyPawn1.velocity.x = 5
    } else if (keys.l.pressed && enemyPawn1.lastKey === 'l' && enemyPawn1.idleState === true && currentEnemyIndex === 1 &&
      enemyPawn1.position.x < 1220 && !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
      enemyPawn1.velocity.x = 0.5
      enemyPawn1.takeStaminaMin()
      enemyPawn1.switchSprite('run')
    } else if (keys.l.pressed && enemyPawn1.lastKey === 'l' && enemyPawn1.idleState === true && currentEnemyIndex === 1 &&
      terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
      enemyPawn1.velocity.x = -5
    } else if (keys.i.pressed && enemyPawn1.lastKey === 'i' && enemyPawn1.idleState === true && currentEnemyIndex === 1 &&
      enemyPawn1.position.y > 0 && !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
      enemyPawn1.velocity.y = -0.5
      enemyPawn1.takeStaminaMin()
      enemyPawn1.switchSprite('run')
    } else if (keys.i.pressed && enemyPawn1.lastKey === 'i' && enemyPawn1.idleState === true && currentEnemyIndex === 1 &&
      terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
      enemyPawn1.velocity.y = 5
    } else if (keys.k.pressed && enemyPawn1.lastKey === 'k' && enemyPawn1.idleState === true && currentEnemyIndex === 1 &&
      enemyPawn1.position.y < 550 && !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
      enemyPawn1.velocity.y = 0.5
      enemyPawn1.takeStaminaMin()
      enemyPawn1.switchSprite('run')
    } else if (keys.k.pressed && enemyPawn1.lastKey === 'k' && enemyPawn1.idleState === true && currentEnemyIndex === 1 &&
      terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
      enemyPawn1.velocity.y = -5
    } else if (enemyPawn1.idleState === true && enemyPawn1.isTurtle === false && currentEnemyIndex === 1) {
      enemyPawn1.regenStaminaMax()
      enemyPawn1.regenStrikeMax()
      enemyPawn1.switchSprite('idle')
    }

    // EnemyPawn1 Phalanx Movement
    if (keys.j.pressed && enemyPawn1.lastKey === 'j' && enemyPawn1.idleState === false && currentEnemyIndex === 1 &&
      enemyPawn1.position.x > 0 && !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
      enemyPawn1.velocity.x = -0.1
      enemyPawn1.takeStaminaMin()
      enemyPawn1.regenStrikeMin()
      enemyPawn1.switchSprite('phalanxMarch')
    } else if (keys.j.pressed && enemyPawn1.lastKey === 'j' && enemyPawn1.idleState === false && currentEnemyIndex === 1 &&
      terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
      enemyPawn1.velocity.x = 1
    } else if (keys.l.pressed && enemyPawn1.lastKey === 'l' && enemyPawn1.idleState === false && currentEnemyIndex === 1 &&
      enemyPawn1.position.x < 1220 && !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
      enemyPawn1.velocity.x = 0.1
      enemyPawn1.takeStaminaMin()
      enemyPawn1.regenStrikeMin()
      enemyPawn1.switchSprite('phalanxMarch')
    } else if (keys.l.pressed && enemyPawn1.lastKey === 'l' && enemyPawn1.idleState === false && currentEnemyIndex === 1 &&
      terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
      enemyPawn1.velocity.x = -1
    } else if (keys.i.pressed && enemyPawn1.lastKey === 'i' && enemyPawn1.idleState === false && currentEnemyIndex === 1 &&
      enemyPawn1.position.y > 0 && !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
      enemyPawn1.velocity.y = -0.1
      enemyPawn1.takeStaminaMin()
      enemyPawn1.regenStrikeMin()
      enemyPawn1.switchSprite('phalanxMarch')
    } else if (keys.i.pressed && enemyPawn1.lastKey === 'i' && enemyPawn1.idleState === false && currentEnemyIndex === 1 &&
      terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
      enemyPawn1.velocity.y = 1
    } else if (keys.k.pressed && enemyPawn1.lastKey === 'k' && enemyPawn1.idleState === false && currentEnemyIndex === 1 &&
      enemyPawn1.position.y < 550 && !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
      enemyPawn1.velocity.y = 0.1
      enemyPawn1.takeStaminaMin()
      enemyPawn1.regenStrikeMin()
      enemyPawn1.switchSprite('phalanxMarch')
    } else if (keys.k.pressed && enemyPawn1.lastKey === 'k' && enemyPawn1.idleState === false && currentEnemyIndex === 1 &&
      terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
      enemyPawn1.velocity.y = -1
    } else if (enemyPawn1.isFighting === false && enemyPawn1.idleState === false && currentEnemyIndex === 1) {
      enemyPawn1.regenStaminaMed()
      enemyPawn1.regenStrikeMed()
      enemyPawn1.switchSprite('phalanxIdle')
    }

    // EnemyPawn1 Idle Movement during Collision with Player
    if ((rectangularCollision({ rectangle1: player, rectangle2: enemyPawn1 }) ||
      rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn1 }) ||
      rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn1 }))) {
      if (keys.j.pressed && enemyPawn1.lastKey === 'j' && enemyPawn1.idleState === true && currentEnemyIndex === 1 &&
        enemyPawn1.position.x > 0 && !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
        enemyPawn1.velocity.x = -0.1
        enemyPawn1.takeDamageMin()
        enemyPawn1.takeStaminaMed()
        enemyPawn1.switchSprite('run')
      } else if (keys.l.pressed && enemyPawn1.lastKey === 'l' && enemyPawn1.idleState === true && currentEnemyIndex === 1 &&
        enemyPawn1.position.x < 1220 && !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
        enemyPawn1.velocity.x = 0.1
        enemyPawn1.takeDamageMin()
        enemyPawn1.takeStaminaMed()
        enemyPawn1.switchSprite('run')
      } else if (keys.i.pressed && enemyPawn1.lastKey === 'i' && enemyPawn1.idleState === true && currentEnemyIndex === 1 &&
        enemyPawn1.position.y > 0 && !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
        enemyPawn1.velocity.y = -0.1
        enemyPawn1.takeDamageMin()
        enemyPawn1.takeStaminaMed()
        enemyPawn1.switchSprite('run')
      } else if (keys.k.pressed && enemyPawn1.lastKey === 'k' && enemyPawn1.idleState === true && currentEnemyIndex === 1 &&
        enemyPawn1.position.y < 550 && !terrainCollision({ rectangle1: enemyPawn1, rectangle2: terrain })) {
        enemyPawn1.velocity.y = 0.1
        enemyPawn1.takeDamageMin()
        enemyPawn1.takeStaminaMed()
        enemyPawn1.switchSprite('run')
      } else if (enemyPawn1.idleState === true && currentEnemyIndex === 1) {
        enemyPawn1.takeStaminaMed()
        enemyPawn1.switchSprite('idle')
      }
    }

    // EnemyPawn1 Movement during Collision with Enemy
    if ((rectangularCollision({ rectangle1: enemy, rectangle2: enemyPawn1 }) ||
      rectangularCollision({ rectangle1: enemyPawn2, rectangle2: enemyPawn1 }))) {
      if (keys.j.pressed && enemyPawn1.lastKey === 'j' && currentEnemyIndex === 1 &&
        player.position.x > 0 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
        enemyPawn1.velocity.x = -0.1
        enemyPawn1.switchSprite('run')
      } else if (keys.l.pressed && enemyPawn1.lastKey === 'l' && currentEnemyIndex === 1 &&
        player.position.x < 1220 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
        enemyPawn1.velocity.x = 0.1
        enemyPawn1.switchSprite('run')
      } else if (keys.i.pressed && enemyPawn1.lastKey === 'i' && currentEnemyIndex === 1 &&
        player.position.y > 0 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
        enemyPawn1.velocity.y = -0.1
        enemyPawn1.switchSprite('run')
      } else if (keys.k.pressed && enemyPawn1.lastKey === 'k' && currentEnemyIndex === 1 &&
        player.position.y < 550 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
        enemyPawn1.velocity.y = 0.1
        enemyPawn1.switchSprite('run')
      } else if (enemyPawn1.idleState === true && currentEnemyIndex === 1) {
        enemyPawn1.switchSprite('idle')
      }
    }

    // EnemyPawn1 Ram Hits Player
    if (rectangularCollision({ rectangle1: player, rectangle2: enemyPawn1 }) &&
      enemyPawn1.isRamming &&
      currentEnemyIndex === 1
    ) {
      player.takeHit()
      player.takeDamageRam()
      player.takeStaminaMax()
      enemyPawn1.takeStaminaRam()
      enemyPawn1.isRamming = false

      gsap.to('#playerHealth', {
        width: player.health + '%'
      })
    }

    // EnemyPawn1 Ram Hits PlayerPawn1
    if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn1 }) &&
      enemyPawn1.isRamming &&
      currentEnemyIndex === 1
    ) {
      playerPawn1.takeHit()
      playerPawn1.takeDamageRam()
      playerPawn1.takeStaminaMax()
      enemyPawn1.takeStaminaRam()
      enemyPawn1.isRamming = false

      gsap.to('#playerPawn1Health', {
        width: playerPawn1.health + '%'
      })
    }

    // EnemyPawn1 Ram Hits PlayerPawn2
    if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn1 }) &&
      enemyPawn1.isRamming &&
      currentEnemyIndex === 1
    ) {
      playerPawn2.takeHit()
      playerPawn2.takeDamageRam()
      playerPawn2.takeStaminaMax()
      enemyPawn1.takeStaminaRam()
      enemyPawn1.isRamming = false

      gsap.to('#playerPawn2Health', {
        width: playerPawn2.health + '%'
      })
    }

    // EnemyPawn1 Ram misses
    if (enemyPawn1.isRamming && enemyPawn1.framesCurrent === 4 &&
      currentEnemyIndex === 1) {
      enemyPawn1.takeStaminaRam()
      enemyPawn1.isRamming = false
    }

    // EnemyPawn1 Fight Hits Idle Player
    if (rectangularCollision({ rectangle1: player, rectangle2: enemyPawn1 }) &&
      enemyPawn1.isFighting &&
      player.idleState === true
    ) {
      player.takeDamageMax()
      enemyPawn1.takeStaminaMin()

      gsap.to('#playerHealth', {
        width: player.health + '%'
      })
    }

    // EnemyPawn1 Fight Hits Idle PlayerPawn1
    if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn1 }) &&
      enemyPawn1.isFighting &&
      playerPawn1.idleState === true
    ) {
      playerPawn1.takeDamageMax()
      enemyPawn1.takeStaminaMin()

      gsap.to('#playerPawn1Health', {
        width: playerPawn1.health + '%'
      })
    }

    // EnemyPawn1 Fight Hits Idle PlayerPawn2
    if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn1 }) &&
      enemyPawn1.isFighting &&
      playerPawn2.idleState === true
    ) {
      playerPawn2.takeDamageMax()
      enemyPawn1.takeStaminaMin()

      gsap.to('#playerPawn2Pawn1Health', {
        width: playerPawn2.health + '%'
      })
    }

    // EnemyPawn1 Fight hits Phalanx Player
    if (rectangularCollision({ rectangle1: player, rectangle2: enemyPawn1 }) &&
      enemyPawn1.isFighting &&
      enemyPawn1.stamina >= 1 &&
      player.idleState === false
    ) {
      player.takeDamageMin()
      enemyPawn1.takeStaminaMin()

      gsap.to('#playerHealth', {
        width: player.health + '%'
      })
    }

    // EnemyPawn1 Fight hits Phalanx PlayerPawn1
    if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn1 }) &&
      enemyPawn1.isFighting &&
      enemyPawn1.stamina >= 1 &&
      playerPawn1.idleState === false
    ) {
      playerPawn1.takeDamageMin()
      enemyPawn1.takeStaminaMin()

      gsap.to('#playerPawn1Health', {
        width: playerPawn1.health + '%'
      })
    }

    // EnemyPawn1 Fight hits Phalanx PlayerPawn2
    if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn1 }) &&
      enemyPawn1.isFighting &&
      enemyPawn1.stamina >= 1 &&
      playerPawn2.idleState === false
    ) {
      playerPawn2.takeDamageMin()
      enemyPawn1.takeStaminaMin()

      gsap.to('#playerPawn2Health', {
        width: playerPawn2.health + '%'
      })
    }

    // EnemyPawn1 Regen Stamina
    if (enemyPawn1.idleState === true && currentEnemyIndex != 1) {
      enemyPawn1.regenStaminaMax()
      enemyPawn1.regenStrikeMax()
    } else if (enemyPawn1.idleState === false && currentEnemyIndex != 1) {
      enemyPawn1.regenStaminaMed()
      enemyPawn1.regenStrikeMed()
    }
  }



  // *** EnemyPawn2 CONTROLS ***
  if (!enemyPawn2.dead) {
    // EnemyPawn2 Phalanx ON/OFF
    if (keys.y.pressed && enemyPawn2.lastKey === 'y' && enemyPawn2.idleState === true && currentEnemyIndex === 2) {
      enemyPawn2.phalanxON()
    } else if (keys.p.pressed && enemyPawn2.lastKey === 'p' && enemyPawn2.idleState === false && currentEnemyIndex === 2 || enemyPawn2.stamina <= 10) {
      enemyPawn2.phalanxOFF()
    }

    // EnemyPawn2 Turtle ON/OFF
    if (keys.g.pressed && enemyPawn2.lastKey === 'g' && currentEnemyIndex === 2) {
      enemyPawn2.turtleON()
    } else if (keys.p.pressed && enemyPawn2.lastKey === 'p' && enemyPawn2.isTurtle === true && currentEnemyIndex === 2) {
      enemyPawn2.turtleOFF()
    } else if (keys.j.pressed && enemyPawn2.lastKey === 'j' && enemyPawn2.isTurtle === true && currentEnemyIndex === 2 &&
      enemyPawn2.position.x > 0 && !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
      enemyPawn2.velocity.x = -0.1
      enemyPawn2.takeStaminaMin()
      enemyPawn2.switchSprite('turtleIdle')
    } else if (keys.l.pressed && enemyPawn2.lastKey === 'l' && enemyPawn2.isTurtle === true && currentEnemyIndex === 2 &&
      enemyPawn2.position.x < 1220 && !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
      enemyPawn2.velocity.x = 0.1
      enemyPawn2.takeStaminaMin()
      enemyPawn2.switchSprite('turtleIdle')
    } else if (keys.i.pressed && enemyPawn2.lastKey === 'i' && enemyPawn2.isTurtle === true && currentEnemyIndex === 2 &&
      enemyPawn2.position.y > 0 && !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
      enemyPawn2.velocity.y = -0.1
      enemyPawn2.takeStaminaMin()
      enemyPawn2.switchSprite('turtleIdle')
    } else if (keys.k.pressed && enemyPawn2.lastKey === 'k' && enemyPawn2.isTurtle === true && currentEnemyIndex === 2 &&
      enemyPawn2.position.y < 550 && !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
      enemyPawn2.velocity.y = 0.1
      enemyPawn2.takeStaminaMin()
      enemyPawn2.switchSprite('turtleIdle')
      // EnemyPawn2 Idle Movement
    } else if (keys.j.pressed && enemyPawn2.lastKey === 'j' && enemyPawn2.idleState === true && currentEnemyIndex === 2 &&
      enemyPawn2.position.x > 0 && !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
      enemyPawn2.velocity.x = -0.5
      enemyPawn2.takeStaminaMin()
      enemyPawn2.switchSprite('run')
    } else if (keys.j.pressed && enemyPawn2.lastKey === 'j' && enemyPawn2.idleState === true && currentEnemyIndex === 2 &&
      terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
      enemyPawn2.velocity.x = 5
    } else if (keys.l.pressed && enemyPawn2.lastKey === 'l' && enemyPawn2.idleState === true && currentEnemyIndex === 2 &&
      enemyPawn2.position.x < 1220 && !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
      enemyPawn2.velocity.x = 0.5
      enemyPawn2.takeStaminaMin()
      enemyPawn2.switchSprite('run')
    } else if (keys.l.pressed && enemyPawn2.lastKey === 'l' && enemyPawn2.idleState === true && currentEnemyIndex === 2 &&
      terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
      enemyPawn2.velocity.x = -5
    } else if (keys.i.pressed && enemyPawn2.lastKey === 'i' && enemyPawn2.idleState === true && currentEnemyIndex === 2 &&
      enemyPawn2.position.y > 0 && !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
      enemyPawn2.velocity.y = -0.5
      enemyPawn2.takeStaminaMin()
      enemyPawn2.switchSprite('run')
    } else if (keys.i.pressed && enemyPawn2.lastKey === 'i' && enemyPawn2.idleState === true && currentEnemyIndex === 2 &&
      terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
      enemyPawn2.velocity.y = 5
    } else if (keys.k.pressed && enemyPawn2.lastKey === 'k' && enemyPawn2.idleState === true && currentEnemyIndex === 2 &&
      enemyPawn2.position.y < 550 && !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
      enemyPawn2.velocity.y = 0.5
      enemyPawn2.takeStaminaMin()
      enemyPawn2.switchSprite('run')
    } else if (keys.k.pressed && enemyPawn2.lastKey === 'k' && enemyPawn2.idleState === true && currentEnemyIndex === 2 &&
      terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
      enemyPawn2.velocity.y = -5
    } else if (enemyPawn2.idleState === true && enemyPawn2.isTurtle === false && currentEnemyIndex === 2) {
      enemyPawn2.regenStaminaMax()
      enemyPawn2.regenStrikeMax()
      enemyPawn2.switchSprite('idle')
    }

    // EnemyPawn2 Phalanx Movement
    if (keys.j.pressed && enemyPawn2.lastKey === 'j' && enemyPawn2.idleState === false && currentEnemyIndex === 2 &&
      enemyPawn2.position.x > 0 && !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
      enemyPawn2.velocity.x = -0.1
      enemyPawn2.takeStaminaMin()
      enemyPawn2.regenStrikeMin()
      enemyPawn2.switchSprite('phalanxMarch')
    } else if (keys.j.pressed && enemyPawn2.lastKey === 'j' && enemyPawn2.idleState === false && currentEnemyIndex === 2 &&
      terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
      enemyPawn2.velocity.x = 1
    } else if (keys.l.pressed && enemyPawn2.lastKey === 'l' && enemyPawn2.idleState === false && currentEnemyIndex === 2 &&
      enemyPawn2.position.x < 1220 && !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
      enemyPawn2.velocity.x = 0.1
      enemyPawn2.takeStaminaMin()
      enemyPawn2.regenStrikeMin()
      enemyPawn2.switchSprite('phalanxMarch')
    } else if (keys.l.pressed && enemyPawn2.lastKey === 'l' && enemyPawn2.idleState === false && currentEnemyIndex === 2 &&
      terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
      enemyPawn2.velocity.x = -1
    } else if (keys.i.pressed && enemyPawn2.lastKey === 'i' && enemyPawn2.idleState === false && currentEnemyIndex === 2 &&
      enemyPawn2.position.y > 0 && !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
      enemyPawn2.velocity.y = -0.1
      enemyPawn2.takeStaminaMin()
      enemyPawn2.regenStrikeMin()
      enemyPawn2.switchSprite('phalanxMarch')
    } else if (keys.i.pressed && enemyPawn2.lastKey === 'i' && enemyPawn2.idleState === false && currentEnemyIndex === 2 &&
      terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
      enemyPawn2.velocity.y = 1
    } else if (keys.k.pressed && enemyPawn2.lastKey === 'k' && enemyPawn2.idleState === false && currentEnemyIndex === 2 &&
      enemyPawn2.position.y < 550 && !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
      enemyPawn2.velocity.y = 0.1
      enemyPawn2.takeStaminaMin()
      enemyPawn2.regenStrikeMin()
      enemyPawn2.switchSprite('phalanxMarch')
    } else if (keys.k.pressed && enemyPawn2.lastKey === 'k' && enemyPawn2.idleState === false && currentEnemyIndex === 2 &&
      terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
      enemyPawn2.velocity.y = -1
    } else if (enemyPawn2.isFighting === false && enemyPawn2.idleState === false && currentEnemyIndex === 2) {
      enemyPawn2.regenStaminaMed()
      enemyPawn2.regenStrikeMed()
      enemyPawn2.switchSprite('phalanxIdle')
    }

    // EnemyPawn2 Idle Movement during Collision with Player
    if ((rectangularCollision({ rectangle1: player, rectangle2: enemyPawn2 }) ||
      rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn2 }) ||
      rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn2 }))) {
      if (keys.j.pressed && enemyPawn2.lastKey === 'j' && enemyPawn2.idleState === true && currentEnemyIndex === 2 &&
        enemyPawn2.position.x > 0 && !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
        enemyPawn2.velocity.x = -0.1
        enemyPawn2.takeDamageMin()
        enemyPawn2.takeStaminaMed()
        enemyPawn2.switchSprite('run')
      } else if (keys.l.pressed && enemyPawn2.lastKey === 'l' && enemyPawn2.idleState === true && currentEnemyIndex === 2 &&
        enemyPawn2.position.x < 1220 && !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
        enemyPawn2.velocity.x = 0.1
        enemyPawn2.takeDamageMin()
        enemyPawn2.takeStaminaMed()
        enemyPawn2.switchSprite('run')
      } else if (keys.i.pressed && enemyPawn2.lastKey === 'i' && enemyPawn2.idleState === true && currentEnemyIndex === 2 &&
        enemyPawn2.position.y > 0 && !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
        enemyPawn2.velocity.y = -0.1
        enemyPawn2.takeDamageMin()
        enemyPawn2.takeStaminaMed()
        enemyPawn2.switchSprite('run')
      } else if (keys.k.pressed && enemyPawn2.lastKey === 'k' && enemyPawn2.idleState === true && currentEnemyIndex === 2 &&
        enemyPawn2.position.y < 550 && !terrainCollision({ rectangle1: enemyPawn2, rectangle2: terrain })) {
        enemyPawn2.velocity.y = 0.1
        enemyPawn2.takeDamageMin()
        enemyPawn2.takeStaminaMed()
        enemyPawn2.switchSprite('run')
      } else if (enemyPawn2.idleState === true && currentEnemyIndex === 2) {
        enemyPawn2.takeStaminaMed()
        enemyPawn2.switchSprite('idle')
      }
    }

    // EnemyPawn2 Movement during Collision with Enemy
    if ((rectangularCollision({ rectangle1: enemy, rectangle2: enemyPawn2 }) ||
      rectangularCollision({ rectangle1: enemyPawn1, rectangle2: enemyPawn2 }))) {
      if (keys.j.pressed && enemyPawn2.lastKey === 'j' && currentEnemyIndex === 2 &&
        player.position.x > 0 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
        enemyPawn2.velocity.x = -0.1
        enemyPawn2.switchSprite('run')
      } else if (keys.l.pressed && enemyPawn2.lastKey === 'l' && currentEnemyIndex === 2 &&
        player.position.x < 1220 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
        enemyPawn2.velocity.x = 0.1
        enemyPawn2.switchSprite('run')
      } else if (keys.i.pressed && enemyPawn2.lastKey === 'i' && currentEnemyIndex === 2 &&
        player.position.y > 0 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
        enemyPawn2.velocity.y = -0.1
        enemyPawn2.switchSprite('run')
      } else if (keys.k.pressed && enemyPawn2.lastKey === 'k' && currentEnemyIndex === 2 &&
        player.position.y < 550 && !terrainCollision({ rectangle1: player, rectangle2: terrain })) {
        enemyPawn2.velocity.y = 0.1
        enemyPawn2.switchSprite('run')
      } else if (enemyPawn2.idleState === true && currentEnemyIndex === 2) {
        enemyPawn2.switchSprite('idle')
      }
    }

    // EnemyPawn2 Ram Hits Player
    if (rectangularCollision({ rectangle1: player, rectangle2: enemyPawn2 }) &&
      enemyPawn2.isRamming &&
      currentEnemyIndex === 2
    ) {
      player.takeHit()
      player.takeDamageRam()
      player.takeStaminaMax()
      enemyPawn2.takeStaminaRam()
      enemyPawn2.isRamming = false

      gsap.to('#playerHealth', {
        width: player.health + '%'
      })
    }

    // EnemyPawn2 Ram Hits PlayerPawn1
    if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn2 }) &&
      enemyPawn2.isRamming &&
      currentEnemyIndex === 2
    ) {
      playerPawn1.takeHit()
      playerPawn1.takeDamageRam()
      playerPawn1.takeStaminaMax()
      enemyPawn2.takeStaminaRam()
      enemyPawn2.isRamming = false

      gsap.to('#playerPawn1Health', {
        width: playerPawn1.health + '%'
      })
    }

    // EnemyPawn2 Ram Hits PlayerPawn2
    if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn2 }) &&
      enemyPawn2.isRamming &&
      currentEnemyIndex === 2
    ) {
      playerPawn2.takeHit()
      playerPawn2.takeDamageRam()
      playerPawn2.takeStaminaMax()
      enemyPawn2.takeStaminaRam()
      enemyPawn2.isRamming = false

      gsap.to('#playerPawn2Health', {
        width: playerPawn2.health + '%'
      })
    }

    // EnemyPawn2 Ram misses
    if (enemyPawn2.isRamming && enemyPawn2.framesCurrent === 4 &&
      currentEnemyIndex === 2) {
      enemyPawn2.takeStaminaRam()
      enemyPawn2.isRamming = false
    }

    // EnemyPawn2 Fight Hits Idle Player
    if (rectangularCollision({ rectangle1: player, rectangle2: enemyPawn2 }) &&
      enemyPawn2.isFighting &&
      player.idleState === true
    ) {
      player.takeDamageMax()
      enemyPawn2.takeStaminaMin()

      gsap.to('#playerHealth', {
        width: player.health + '%'
      })
    }

    // EnemyPawn2 Fight Hits Idle PlayerPawn1
    if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn2 }) &&
      enemyPawn2.isFighting &&
      playerPawn1.idleState === true
    ) {
      playerPawn1.takeDamageMax()
      enemyPawn2.takeStaminaMin()

      gsap.to('#playerPawn1Health', {
        width: playerPawn1.health + '%'
      })
    }

    // EnemyPawn2 Fight Hits Idle PlayerPawn2
    if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn2 }) &&
      enemyPawn2.isFighting &&
      playerPawn2.idleState === true
    ) {
      playerPawn2.takeDamageMax()
      enemyPawn2.takeStaminaMin()

      gsap.to('#playerPawn2Pawn1Health', {
        width: playerPawn2.health + '%'
      })
    }

    // EnemyPawn2 Fight hits Phalanx Player
    if (rectangularCollision({ rectangle1: player, rectangle2: enemyPawn2 }) &&
      enemyPawn2.isFighting &&
      enemyPawn2.stamina >= 1 &&
      player.idleState === false
    ) {
      player.takeDamageMin()
      enemyPawn2.takeStaminaMin()

      gsap.to('#playerHealth', {
        width: player.health + '%'
      })
    }

    // EnemyPawn2 Fight hits Phalanx PlayerPawn1
    if (rectangularCollision({ rectangle1: playerPawn1, rectangle2: enemyPawn2 }) &&
      enemyPawn2.isFighting &&
      enemyPawn2.stamina >= 1 &&
      playerPawn1.idleState === false
    ) {
      playerPawn1.takeDamageMin()
      enemyPawn2.takeStaminaMin()

      gsap.to('#playerPawn1Health', {
        width: playerPawn1.health + '%'
      })
    }

    // EnemyPawn2 Fight hits Phalanx PlayerPawn2
    if (rectangularCollision({ rectangle1: playerPawn2, rectangle2: enemyPawn2 }) &&
      enemyPawn2.isFighting &&
      enemyPawn2.stamina >= 1 &&
      playerPawn2.idleState === false
    ) {
      playerPawn2.takeDamageMin()
      enemyPawn2.takeStaminaMin()

      gsap.to('#playerPawn2Health', {
        width: playerPawn2.health + '%'
      })
    }

    // EnemyPawn2 Regen Stamina
    if (enemyPawn2.idleState === true && currentEnemyIndex != 2) {
      enemyPawn2.regenStaminaMax()
      enemyPawn2.regenStrikeMax()
    } else if (enemyPawn2.idleState === false && currentEnemyIndex != 2) {
      enemyPawn2.regenStaminaMed()
      enemyPawn2.regenStrikeMed()
    }
  }



  // End Game based on health (Elimination)
  if ((enemy.health <= 0 && enemyPawn1.health <= 0 && enemyPawn2.health <= 0) ||
    (player.health <= 0 && playerPawn1.health <= 0 && playerPawn2.health <= 0)) {
    determineWinner({ player, enemy, timerId })
  }
}



animate()

window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'e':
      keys.e.pressed = true
      player.lastKey = 'e'
      break
    case 'd':
      keys.d.pressed = true
      player.lastKey = 'd'
      playerPawn1.lastKey = 'd'
      playerPawn2.lastKey = 'd'
      break
    case 'a':
      keys.a.pressed = true
      player.lastKey = 'a'
      playerPawn1.lastKey = 'a'
      playerPawn2.lastKey = 'a'
      break
    case 'w':
      keys.w.pressed = true
      player.lastKey = 'w'
      playerPawn1.lastKey = 'w'
      playerPawn2.lastKey = 'w'
      break
    case 's':
      keys.s.pressed = true
      player.lastKey = 's'
      playerPawn1.lastKey = 's'
      playerPawn2.lastKey = 's'
      break
    case 'c':
      keys.c.pressed = true
      player.lastKey = 'c'
      playerPawn1.lastKey = 'c'
      playerPawn2.lastKey = 'c'
      break
    case 'f':
      if (currentPlayerIndex === 0) {
        player.ram()
      } else if (currentPlayerIndex === 1) {
        playerPawn1.ram()
      } else if (currentPlayerIndex === 2) {
        playerPawn2.ram()
      }
      break
    case 'r':
      keys.r.pressed = true
      player.lastKey = 'r'
      playerPawn1.lastKey = 'r'
      playerPawn2.lastKey = 'r'
      break
    case 'z':
      keys.z.pressed = true
      player.lastKey = 'z'
      playerPawn1.lastKey = 'z'
      playerPawn2.lastKey = 'z'
      break
    case 't':
      keys.t.pressed = true
      player.lastKey = 't'
      playerPawn1.lastKey = 't'
      playerPawn2.lastKey = 't'
      break
    case 'x':
      selectNextPlayer()
      break
  }

  switch (event.key) {
    case 'l':
      keys.l.pressed = true
      enemy.lastKey = 'l'
      enemyPawn1.lastKey = 'l'
      enemyPawn2.lastKey = 'l'
      break
    case 'j':
      keys.j.pressed = true
      enemy.lastKey = 'j'
      enemyPawn1.lastKey = 'j'
      enemyPawn2.lastKey = 'j'
      break
    case 'i':
      keys.i.pressed = true
      enemy.lastKey = 'i'
      enemyPawn1.lastKey = 'i'
      enemyPawn2.lastKey = 'i'
      break
    case 'k':
      keys.k.pressed = true
      enemy.lastKey = 'k'
      enemyPawn1.lastKey = 'k'
      enemyPawn2.lastKey = 'k'
      break
    case 'n':
      keys.n.pressed = true
      enemy.lastKey = 'n'
      enemyPawn1.lastKey = 'n'
      enemyPawn2.lastKey = 'n'
      break
    case 'h':
      if (currentEnemyIndex === 0) {
        enemy.ram()
      } else if (currentEnemyIndex === 1) {
        enemyPawn1.ram()
      } else if (currentEnemyIndex === 2) {
        enemyPawn2.ram()
      }
      break
    case 'y':
      keys.y.pressed = true
      enemy.lastKey = 'y'
      enemyPawn1.lastKey = 'y'
      enemyPawn2.lastKey = 'y'
      break
    case 'p':
      keys.p.pressed = true
      enemy.lastKey = 'p'
      enemyPawn1.lastKey = 'p'
      enemyPawn2.lastKey = 'p'
      break
    case 'g':
      keys.g.pressed = true
      enemy.lastKey = 'g'
      enemyPawn1.lastKey = 'g'
      enemyPawn2.lastKey = 'g'
      break
    case 'm':
      selectNextEnemy()
      break
  }
})


window.addEventListener('keyup', (event) => {
  // player keys
  switch (event.key) {
    case 'e':
      keys.e.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
    case 'w':
      keys.w.pressed = false
      break
    case 's':
      keys.s.pressed = false
      break
    case 'd':
      keys.d.pressed = false
      break
    // case 'c':
    //   keys.c.pressed = false
    //   break
    case 'v':
      keys.v.pressed = false
      break
    case 'f':
      keys.f.pressed = false
      break
    case 'r':
      keys.r.pressed = false
      break
    case 't':
      keys.r.pressed = false
      break
    case 'z':
      keys.z.pressed = false
      break
  }

  // enemy keys
  switch (event.key) {
    case 'j':
      keys.j.pressed = false
      break
    case 'i':
      keys.i.pressed = false
      break
    case 'k':
      keys.k.pressed = false
      break
    case 'l':
      keys.l.pressed = false
      break
    // case 'n':
    //   keys.n.pressed = false
    //   break
    case 'b':
      keys.b.pressed = false
      break
    case 'h':
      keys.h.pressed = false
      break
    case 'y':
      keys.y.pressed = false
      break
    case 'g':
      keys.g.pressed = false
      break
    case 'p':
      keys.p.pressed = false
      break
  }
})
