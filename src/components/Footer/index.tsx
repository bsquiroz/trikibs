export const Footer = () => {
	return (
		<footer className="h-[50px] flex items-center justify-center text-white">
			<p>
				Did you find it very easy to beat him? Well,{" "}
				<a
					className="font-bold text-green-500 relative"
					href="https://triki-minimax.netlify.app/"
				>
					try this one
					<span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-500 opacity-75"></span>
				</a>{" "}
				, this one is a challenge.
			</p>
		</footer>
	);
};
