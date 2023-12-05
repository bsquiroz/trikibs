import { useStoreTriki } from "../../store/useStoreTriki";

export const Header = () => {
	const {
		restartApp,
		scoreGame: { scoreHuman, scoreRobot },
	} = useStoreTriki((state) => state);

	return (
		<div className="flex gap-4 p-2 justify-center">
			<div className="border-gray-500 border-2 px-4 py-2 rounded-lg">
				<p className="text-gray-500">
					Human: <strong>{scoreHuman}</strong>
				</p>
			</div>
			<div className="border-gray-500 border-2 px-4 py-2 rounded-lg">
				<p className="text-gray-500">
					IA: <strong>{scoreRobot}</strong>
				</p>
			</div>

			{(scoreHuman > 0 || scoreRobot > 0) && (
				<button
					className="bg-red-500 border-2 px-4 py-2 rounded-lg border-transparent"
					onClick={restartApp}
				>
					<p className="text-white">
						<strong>Restart</strong>
					</p>
				</button>
			)}
		</div>
	);
};
