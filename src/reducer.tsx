import type { SelectedGenres } from "./components/filter components/filters";

export const initialFilters = {
	sortValue: "popularity.desc",
	yearValue: "",
	selectedGenres: [],
};

interface StateType {
	sortValue: string;
	yearValue: string;
	selectedGenres: SelectedGenres[];
}

type ActionType = { type: "SET_SORT"; value: string } | 
{ type: "SET_YEAR"; value: string } | 
{ type: "SET_GENRES"; value: SelectedGenres[] } | 
{ type: "RESET_FILTERS"};

export function filtersReducer(state: StateType, action: ActionType) {
	switch (action.type) {
		case "SET_SORT": {
			return {
				...state,
				sortValue: action.value,
			};
		}
		case "SET_YEAR": {
			return {
				...state,
				yearValue: action.value,
			};
		}
		case "SET_GENRES": {
			return {
				...state,
				selectedGenres: action.value,
			};
		}
		case "RESET_FILTERS": {
			return initialFilters;
		}
		default: {
			throw Error("Unknown action: " + (action as ActionType).type);
		}
	}
}
