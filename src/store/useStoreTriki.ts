import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ScoreGame {
	scoreHuman: number;
	scoreRobot: number;
}

type Store = {
	board: any[];
	gameEnd: boolean;
	gameTied: boolean;
	scoreGame: ScoreGame;
	setBoard: (board: any[]) => void;
	setGameEnd: (gameEnd: boolean) => void;
	setGameTied: (gameTied: boolean) => void;
	restartApp: () => void;
	setScoreGame: (scoreGame: ScoreGame) => void;
};

export const useStoreTriki = create<Store>()(
	persist(
		(set) => ({
			board: Array(9).fill(null),
			gameEnd: false,
			gameTied: false,
			scoreGame: {
				scoreHuman: 0,
				scoreRobot: 0,
			},
			setBoard: (board) => set({ board }),
			setGameEnd: (gameEnd) => set({ gameEnd }),
			setGameTied: (gameTied) => set({ gameTied }),
			setScoreGame: (scoreGame) => set({ scoreGame }),
			restartApp: () =>
				set({
					board: Array(9).fill(null),
					gameEnd: false,
					gameTied: false,
					scoreGame: {
						scoreHuman: 0,
						scoreRobot: 0,
					},
				}),
		}),
		{
			name: "store-triki",
		}
	)
);
