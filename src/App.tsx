import { useEffect } from "react";

import { Board } from "./components/Board";
import { GameEnd } from "./components/GameEnd";

import { confirmWin } from "./helpers/playerWin";
import { useStoreTriki } from "./store/useStoreTriki";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const App = () => {
	const { board, setGameEnd, setGameTied, scoreGame, setScoreGame } =
		useStoreTriki((state) => state);

	useEffect(() => {
		const response = confirmWin(board);

		if (response) {
			if (response === "Human") {
				setScoreGame({
					...scoreGame,
					scoreHuman: scoreGame.scoreHuman + 1,
				});
			} else {
				setScoreGame({
					...scoreGame,
					scoreRobot: scoreGame.scoreRobot + 1,
				});
			}

			setGameEnd(true);
		}
	}, [board]);

	useEffect(() => {
		if (board.every((item) => item !== null && !confirmWin(board))) {
			setGameTied(true);
		}
	}, [board]);

	return (
		<main className="bg-slate-900 min-h-screen select-none">
			<section className="max-w-[400px] m-auto p-5 ">
				<Header />
				<Board />
				<GameEnd />
			</section>
			<Footer />
		</main>
	);
};
