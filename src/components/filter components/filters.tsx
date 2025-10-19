import { useReducer } from "react";
import "../../css/filters.css";
import FilteringByGenre from "./filtering-by-genre";
import Sorting from "./sorting";
import { initialFilters } from "../../reducer";
import { filtersReducer } from "../../reducer";

const sortOptions = [
	{ value: "popularity.desc", label: "По популярности" },
	{ value: "vote_average.desc", label: "Рейтингу" },
	{ value: "release_date.desc", label: "Дате" },
];

const yearsOptions = [{ value: "", label: "Все даты" }];
for (let year = 1990; year <= 2025; year++) {
	yearsOptions.push({ value: String(year), label: String(year) });
}

export interface SelectedGenres {
	id: number;
}

export default function Filters() {
	const [state, dispatch] = useReducer(filtersReducer, initialFilters);

	function handleSortingChange(value: string) {
		dispatch({
			type: "SET_SORT",
			value
		});
	}

	function handleYearChange(value: string) {
		dispatch({
			type: "SET_YEAR",
			value
		});
	}

	function handleGenresChange(value: SelectedGenres[]) {
		dispatch({
			type: "SET_GENRES",
			value
		});
	}

	function handleResetFiltersClick() {
		dispatch({
			type: "RESET_FILTERS",
		});
	}
	return (
		<>
			<div className="filters">
				<div className="filters-header">
					<h2>Фильтры</h2>
				</div>
				<Sorting
					label="Сортировать по:"
					options={sortOptions}
					value={state.sortValue}
					onChange={handleSortingChange}
				/>
				<Sorting
					label="Год релиза:"
					options={yearsOptions}
					value={state.yearValue}
					onChange={handleYearChange}
				/>
				<FilteringByGenre
					selectedGenres={state.selectedGenres}
					onChange={handleGenresChange}
				/>
				<button onClick={handleResetFiltersClick}>Сброс фильтров</button>
			</div>
		</>
	);
}
