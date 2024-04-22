function rectangularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.attackBox.position.x + rectangle1.attackBox.width >=
    rectangle2.position.x &&
    rectangle1.attackBox.position.x <=
    rectangle2.position.x + rectangle2.width &&
    rectangle1.attackBox.position.y + rectangle1.attackBox.height >=
    rectangle2.position.y &&
    rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
  )
}

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
  )
}

function killBoxCollision({ rectangle1, rectangle2 }) {
  return (
    (rectangle1.attackBox.position.x + rectangle1.attackBox.width >
      rectangle2.killBox.position.x &&
      rectangle1.attackBox.position.x <
      rectangle2.killBox.position.x + rectangle2.killBox.width &&
      rectangle1.attackBox.position.y + rectangle1.attackBox.height >
      rectangle2.killBox.position.y &&
      rectangle1.attackBox.position.y < rectangle2.killBox.position.y + rectangle2.killBox.height)
  )
}

function capturePoint2Collision({ rectangle1, rectangle2 }) {
  return (
    (rectangle1.attackBox.position.x + rectangle1.attackBox.width >
      rectangle2.capturePoint2.position.x &&
      rectangle1.attackBox.position.x <
      rectangle2.capturePoint2.position.x + rectangle2.capturePoint2.width &&
      rectangle1.attackBox.position.y + rectangle1.attackBox.height >
      rectangle2.capturePoint2.position.y &&
      rectangle1.attackBox.position.y < rectangle2.capturePoint2.position.y + rectangle2.capturePoint2.height)
  )
}



function determineWinner({ player, enemy, timerId }) {
  clearTimeout(timerId)
  document.querySelector('#displayText').style.display = 'flex'
  if (player.health === enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Tie'
  } else if (player.health > enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Player 1 Wins'
  } else if (player.health < enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Player 2 Wins'
  }
}



let timer = 600
let timerId
function decreaseTimer() {
  if (timer > 0) {
    timerId = setTimeout(decreaseTimer, 1000)
    timer--
    document.querySelector('#timer').innerHTML = timer
  }

  if (timer === 0) {
    determineWinner({ player, enemy, timerId })
  }
}



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
}



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
}

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
}