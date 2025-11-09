interface Game {
  id: string;
  whitePlayerName: string;
  blackPlayerName: string;
  moves: string[];
}

class GameManager {
  games: Game[] = [];
  private static gameInstance: GameManager;
  private constructor() {}

  static getInstance() {
    if (this.gameInstance) return this.gameInstance;

    GameManager.gameInstance = new GameManager();

    return this.gameInstance;
  }

  public addGame(game: Game) {
    this.games.push(game);
  }

  public getGames() {
    return this.games;
  }

  public addMove(gameId: string, move: string) {
    const game = this.games.find((game) => game.id === gameId);
    if (game) {
      game.moves.push(move);
    }
  }

  log() {
    console.log(this.games);
  }
}

export const gameManager = GameManager.getInstance();
