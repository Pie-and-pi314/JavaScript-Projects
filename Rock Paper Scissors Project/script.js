let score = JSON.parse(localStorage.getItem('score')) || {
  win: 0,
  loss: 0,
  tie: 0,
};
function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result;
  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }
  if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
  }
  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }
  }
  if (result === 'You win.') {
    score.win++;
  } else if (result === 'You lose.') {
    score.loss++;
  } else if (result === 'Tie.') {
    score.tie++;
  }
  localStorage.setItem('score', JSON.stringify(score));
  document.getElementById('js-result').innerHTML = `${result}`;
  document.getElementById('js-moves').innerHTML = `
  You
  <img src = 'rock-paper-scissors-images/${playerMove}-emoji.png' class = 'move-icon'>
  <img src = 'rock-paper-scissors-images/${computerMove}-emoji.png' class = 'move-icon'>
  Computer`;
  updateScore();
}
function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove;
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }
  return computerMove;
}
function updateScore() {
  document.getElementById(
    'js-score'
  ).innerHTML = `Wins: ${score.win}  Losses: ${score.loss}  Ties: ${score.tie}`;
}
function resetScore(){
  score.win = 0;
  score.loss = 0;
  score.tie = 0;
  localStorage.removeItem('score');
  document.getElementById('js-result').innerHTML = 'You\'ve reset your score.';
  updateScore();
}
updateScore();
