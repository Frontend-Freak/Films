import Filters from "./filter components/filters";
import Pagination from "./pagination";
import "../css/movies-list.css";

export default function Movies() {
	return (
		<>
			<div className="filters-component">
				<Filters />
				<Pagination />
			</div>
			<div className="movies"></div>
		</>
	);
}
