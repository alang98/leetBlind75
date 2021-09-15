// Alice and Bob take turns playing a game,
// with Alice starting first.

// Initially, there is a number n on
// the chalkboard. On each player's turn,
// that player makes a move consisting of:

// Choosing any x with 0 < x < n and n % x == 0.
// Replacing the number n on the chalkboard
// with n - x.
// Also, if a player cannot make a move,
// they lose the game.

// Return true if and only if Alice wins the game,
// assuming both players play optimally.

/*
Example 1:

Input: n = 2
Output: true
Explanation: Alice chooses 1,
and Bob has no more moves.

*/

const divisorGame = (n) => {

  let player = false;

  const togglePlayer = () => {
    if (player === true) {
      player = false;
    } else {
      player = true;
    }
  }

  const takeTurn = (n) => {
    if (n === 1) return player;

    if (n > 1) {
      togglePlayer();
      console.log(player);
      console.log(n);
     takeTurn(n - 1)
    }
  }

  takeTurn(n)

  return player;

}

console.log(divisorGame(3));