import { create } from "zustand";

type Store = {
	board: any[];
	turn: {
		human: boolean;
		robot: boolean;
	};
	gameEnd: boolean;
	gameTied: boolean;
	score: {
		human: number;
		robot: number;
	};
	setBoard: (board: any[]) => void;
	setTurn: (turn: { human: boolean; robot: boolean }) => void;
	setGameEnd: (gameEnd: boolean) => void;
	setGameTied: (gameTied: boolean) => void;
	setScore: (score: { human: number; robot: number }) => void;
	restartApp: () => void;
};

export const useStoreTriki = create<Store>()((set) => ({
	board: Array(9).fill(null),
	turn: {
		human: true,
		robot: false,
	},
	gameEnd: false,
	gameTied: false,
	score: JSON.parse(localStorage.getItem("score")!) || {
		human: 0,
		robot: 0,
	},
	setBoard: (board) => set({ board }),
	setTurn: (turn) => set({ turn }),
	setGameEnd: (gameEnd) => set({ gameEnd }),
	setGameTied: (gameTied) => set({ gameTied }),
	setScore: (score) =>
		set(() => {
			localStorage.setItem("score", JSON.stringify(score));
			return { score };
		}),
	restartApp: () =>
		set(() => {
			localStorage.removeItem("score");
			return {
				board: Array(9).fill(null),
				turn: {
					human: true,
					robot: false,
				},
				gameEnd: false,
				gameTied: false,
				score: {
					human: 0,
					robot: 0,
				},
			};
		}),
}));
