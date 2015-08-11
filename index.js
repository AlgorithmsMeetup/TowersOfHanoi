var actions = require("./actions");
var config = require("./config");

var move = actions.move.bind(actions);

function solve(n){
  (function moveNPieces(n, from, to, via) {
    if (n === 1) {
      move(from, to);
    } else {
      moveNPieces(n - 1, from, via, to);
      move(from, to);
      moveNPieces(n - 1, via, to, from);
    }
  })(n, 0, 2, 1)
}

solve(config.pieces);
actions.finish();
