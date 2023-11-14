import { useEffect } from "react";

import { Board } from "./components/Board";
import { GameEnd } from "./components/GameEnd";

import { confirmWin } from "./helpers/playerWin";
import { useStoreTriki } from "./store/useStoreTriki";
import { Header } from "./components/Header";

export const App = () => {
	const { board, setGameEnd, setGameTied } = useStoreTriki((state) => state);

	useEffect(() => {
		if (confirmWin(board)) {
			setGameEnd(true);
		}
	}, [board]);

	useEffect(() => {
		if (board.every((item) => item !== null)) {
			setGameTied(true);
		}
	}, [board]);

	return (
		<main className="bg-slate-900 min-h-screen p-5 select-none">
			<section className="max-w-[400px] m-auto">
				<Header />
				<Board />
				<GameEnd />
			</section>
		</main>
	);
};
