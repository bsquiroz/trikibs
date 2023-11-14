import { useStoreTriki } from "../../store/useStoreTriki";

export const Board = () => {
	const { board, setBoard, setTurn, gameEnd, turn, gameTied } = useStoreTriki(
		(state) => state
	);

	const handleClickHuman = (item: number) => {
		if (gameEnd || board[item] || turn.robot) return;

		setBoard(board.map((value, i) => (i === item ? "o" : value)));

		setTurn({
			human: false,
			robot: true,
		});
	};

	const handleClickIA = () => {
		if (turn.human || gameEnd) return;

		const moveRobot = board
			.map((item, i) => ({ item, index: i }))
			.filter((item) => !item.item)
			.sort(() => Math.random() - 0.5)[0];

		setBoard(
			board.map((value, i) => (i === moveRobot.index ? "x" : value))
		);

		setTurn({
			human: true,
			robot: false,
		});
	};

	return (
		<>
			<div className="grid gap-5 grid-cols-3 grid-rows-3">
				{board.map((item, i) => (
					<div
						className={`border-2  aspect-square rounded-md text-4xl cursor-pointer flex items-center justify-center ${
							item === "x" ? "text-green-500" : "text-red-500"
						} ${
							item === "x"
								? "border-green-500"
								: item === "o"
								? "border-red-500"
								: "border-gray-500"
						}`}
						key={i}
						onClick={() => handleClickHuman(i)}
					>
						{item}
					</div>
				))}
			</div>
			{!gameTied && !gameEnd && turn.robot && (
				<button
					className="bg-green-500 w-full text-gray-200 py-4 rounded-lg mt-4 text-xl uppercase"
					onClick={handleClickIA}
				>
					play IA
				</button>
			)}
		</>
	);
};
