import "../css/filters.css";
import FilteringByGenre from "./filtering-by-genre";

export default function Sorting() {
	const years = [2000, 2001];
	return (
		<>
			<div className="filters">
				<div className="filters-header">
					<h2>Фильтры</h2>
				</div>

				<div className="filters-block">
					<label className="filters-label">Сортировать по:</label>
					<select
						className="filters-select"
						defaultValue="popularity.desc"
					>
						<option value="popularity.desc">Популярности</option>
						<option value="vote_average.desc">Рейтингу</option>
						<option value="release_date.desc">Дате</option>
					</select>
				</div>

				<div className="filters-block">
					<label className="filters-label">Год релиза:</label>
					<select className="filters-select">
						{years.map((year) => (
							<option value={year} key={year}>{year}</option>
						))}
					</select>
				</div>
				<FilteringByGenre />
			</div>
		</>
	);
}
