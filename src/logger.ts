import { gameManager } from "./store";

export async function startLogger() {
  setInterval(() => {
    console.log("CURRENT STATE OF GAMES", gameManager.log());
  }, 5000);
}
