import { useStoreTriki } from "../../store/useStoreTriki";

export const Header = () => {
	const {
		score: { human, robot },
		restartApp,
	} = useStoreTriki((state) => state);

	return (
		<div className="flex gap-4 p-2 justify-center">
			<div className="border-gray-500 border-2 px-4 py-2 rounded-lg">
				<p className="text-gray-500">
					Human: <strong>{human}</strong>
				</p>
			</div>
			<div className="border-gray-500 border-2 px-4 py-2 rounded-lg">
				<p className="text-gray-500">
					IA: <strong>{robot}</strong>
				</p>
			</div>

			{(human > 0 || robot > 0) && (
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
