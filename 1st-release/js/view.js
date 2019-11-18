import { createGame } from './game.js';
import { createKeyboardListener } from './input.js';

const screen = document.querySelector('#screen');
const context = screen.getContext('2d');
const game = createGame();
const keyboardListener = createKeyboardListener();

keyboardListener.subscribe(game.movePlayer);

renderScreen();

function renderScreen() {
  context.clearRect(0, 0, game.state.screen.width, game.state.screen.height);

  for (const playerId in game.state.players) {
    const player = game.state.players[playerId];
    context.fillStyle = 'black';
    context.fillRect(player.x, player.y, 1, 1);
  }

  for (const fruitId in game.state.fruits) {
    const fruit = game.state.fruits[fruitId];
    context.fillStyle = 'green';
    context.fillRect(fruit.x, fruit.y, 1, 1);
  }

  requestAnimationFrame(renderScreen);
}
