import { useStoreTriki } from "../../store/useStoreTriki";

export const GameEnd = () => {
	const {
		gameTied,
		setTurn,
		setGameTied,
		setBoard,
		gameEnd,
		turn,
		setGameEnd,
		score,
		setScore,
	} = useStoreTriki((state) => state);

	const handleGameTie = () => {
		setTurn({
			human: true,
			robot: false,
		});
		setGameEnd(false);
		setGameTied(false);
		setBoard(Array(9).fill(null));
	};

	const handleGameEnd = () => {
		setTurn({
			human: true,
			robot: false,
		});
		setGameEnd(false);
		setGameTied(false);
		setBoard(Array(9).fill(null));

		if (!turn.human) {
			setScore({
				human: score.human + 1,
				robot: score.robot,
			});
		} else {
			setScore({
				human: score.human,
				robot: score.robot + 1,
			});
		}
	};

	return gameEnd ? (
		<div className="flex flex-col gap-5 justify-center items-center pt-5">
			<p className="text-gray-400 text-2xl">
				Win <strong>{!turn.human ? "Human" : "Robot"}</strong>
			</p>
			<button
				className="bg-blue-500 py-2 px-4 rounded-full text-white font-bold"
				onClick={handleGameEnd}
			>
				Play again
			</button>
		</div>
	) : (
		gameTied && (
			<div className="flex flex-col gap-5 justify-center items-center pt-5">
				<p className="text-gray-400 text-2xl">
					Play <strong>Tied</strong>
				</p>
				<button
					className="bg-blue-500 py-2 px-4 rounded-full text-white font-bold"
					onClick={handleGameTie}
				>
					Play again
				</button>
			</div>
		)
	);
};
