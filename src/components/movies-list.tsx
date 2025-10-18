import Sorting from "./sorting";
import Pagination from "./pagination";
import "../css/movies-list.css";

export default function Movies() {
	return (
		<>
			<div className="filters-component">
				<Sorting />
				<Pagination />
			</div>
			<div className="movies"></div>
		</>
	);
}
