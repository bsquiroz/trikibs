import { useStoreTriki } from "../../store/useStoreTriki";

export const Board = () => {
	const { board, setBoard, gameEnd } = useStoreTriki((state) => state);

	const handleClickOnCell = (item: number) => {
		if (gameEnd || board[item]) return;

		const human = board.map((value, i) => (i === item ? "o" : value));

		const robot = human
			.map((item, i) => ({ item, index: i }))
			.filter((item) => !item.item)
			.sort(() => Math.random() - 0.5)[0];

		if (!robot) {
			setBoard(human);
			return;
		}

		const roundComplet = human.map((value, i) =>
			i === robot.index ? "x" : value
		);

		setBoard(roundComplet);
	};

	return (
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
					onClick={() => handleClickOnCell(i)}
				>
					{item}
				</div>
			))}
		</div>
	);
};
