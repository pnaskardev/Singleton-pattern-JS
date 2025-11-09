import { startLogger } from "./logger";
import { gameManager } from "./store";

startLogger();

setInterval(() => {
  gameManager.addGame({
    id: Math.random().toString(),
    whitePlayerName: "Priyanshu",
    blackPlayerName: "Geetika",
    moves: [],
  });
}, 5000);