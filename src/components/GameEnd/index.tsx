import { useEffect, useState } from "react";
import { confirmWin } from "../../helpers/playerWin";
import { useStoreTriki } from "../../store/useStoreTriki";

export const GameEnd = () => {
	const [Win, setWin] = useState<String | null>(null);

	const { gameTied, setGameTied, setBoard, gameEnd, setGameEnd, board } =
		useStoreTriki((state) => state);

	const handleClick = () => {
		setGameEnd(false);
		setGameTied(false);
		setBoard(Array(9).fill(null));
		setWin(null);
	};

	useEffect(() => {
		const response = confirmWin(board);

		if (response) {
			setWin(response === "Human" ? "Human" : "Robot");
		}
	}, [board]);

	return (
		<div className="flex flex-col gap-5 justify-center items-center pt-5">
			<p className="text-gray-400 text-2xl">
				{gameTied ? (
					<span>
						Play <strong>Tied</strong>
					</span>
				) : (
					gameEnd && (
						<span>
							Win <strong>{Win}</strong>
						</span>
					)
				)}
			</p>
			<button
				className="bg-blue-500 py-2 px-4 rounded-full text-white font-bold"
				onClick={handleClick}
			>
				Play again
			</button>
		</div>
	);
};
