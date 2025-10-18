import "../css/reset.css";
import "../css/App.css";
import Header from "./header";
import Movies from "./movies-list";

export default function App() {
	return (
		<>
			<div className="container">
				<Header />
				<main className="main">
					<Movies />
				</main>
			</div>
		</>
	);
}
