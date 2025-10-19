import "../../css/filters.css";
import { useEffect } from "react";
import { useState } from "react";
import type { SelectedGenres } from "./filters";
import { useContext } from "react";
import { AuthContext } from "../../context";


export interface Genres {
	id: number;
	name: string;
}

export interface SelectedGenresProps{
	selectedGenres: SelectedGenres[]
	onChange: (newSelected: SelectedGenres[]) => void
}

export default function FilteringByGenre({selectedGenres, onChange} : SelectedGenresProps) {
	const [genres, setGenres] = useState<Genres[]>([]);

	function handleCheckedChange(id: number) {
		if (selectedGenres.map((item) => item.id).includes(id)) {
			onChange(selectedGenres.filter((item) => item.id !== id));
		} else {
			onChange([...selectedGenres, { id }]);
		}
	}

	const token = useContext(AuthContext)

	useEffect(() => {
		async function fetchingGenres() {
			const url = "https://api.themoviedb.org/3/genre/movie/list?language=ru";
			const options = {
				method: "GET",
				headers: {
					accept: "application/json",
					Authorization: `Bearer ${token}`,
				},
			};
			try {
				const response = await fetch(url, options);
				const result = await response.json();
				const genres = result.genres;
				setGenres(genres);
			} catch (error) {
				console.error(error);
			}
		}
		fetchingGenres();
	}, [token]);

	return (
		<>
			<div className="filters-block">
				<p className="filters-label">Жанры</p>
				{genres.map((genres) => (
					<div
						className="filters-genres"
						key={genres.id}
					>
						<label htmlFor={`${genres.id}`}>
							<input
								type="checkbox"
								value={genres.name}
								checked={selectedGenres.map((item) => item.id).includes(genres.id)}
								onChange={() => handleCheckedChange(genres.id)}
							/>
							{genres.name}
						</label>
					</div>
				))}
			</div>
		</>
	);
}
