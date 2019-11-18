export function createGame() {
  const state = {
    players: {
      player1: { x: 1, y: 1 },
      player2: { x: 9, y: 9 }
    },
    fruits: {
      fruit1: { x: 3, y: 1 }
    },
    screen: {
      width: 10,
      height: 10
    }
  };

  function movePlayer(command) {
    const keyPressed = command.keyPressed;
    const player = state.players[command.playerId];

    if (keyPressed === 'ArrowUp' && player.y > 0) {
      player.y -= 1;
      return;
    }

    if (keyPressed === 'ArrowRight' && player.x + 1 < state.screen.height) {
      player.x += 1;
      return;
    }

    if (keyPressed === 'ArrowDown' && player.y + 1 < state.screen.width) {
      player.y += 1;
      return;
    }

    if (keyPressed === 'ArrowLeft' && player.x > 0) {
      player.x -= 1;
      return;
    }
  }

  return {
    movePlayer: movePlayer,
    state: state
  };
}
