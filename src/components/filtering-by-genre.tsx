import "../css/filters.css";
import { useEffect } from "react";
import { useState } from "react";

export const API_KEY: string = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDE4NzQwMTQyNWE3NzRlNzk3M2M2YTFlNjQ1NmQ0NSIsIm5iZiI6MTc1OTcwNzgxNS45MDYsInN1YiI6IjY4ZTMwMmE3NzYwNDAwNTJhOWMyMjc2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8h-qKQP6Qdh4s8jo8-Wa9f9_Ahk5DmUsfl6EKAI0fwU";

interface Genres {
	id: number;
	name: string;
}

interface SelectedGenres{
    id: number
}

export default function FilteringByGenre() {
	const [genres, setGenres] = useState<Genres[]>([]);
    console.log('все жанры', genres)
    const [selectedGenres, setSelectedGenres] = useState<SelectedGenres[]>([])
    console.log('выбранные жанры', selectedGenres)

	function handleResetFiltersClick() {
		setSelectedGenres([])
	}

	function handleCheckedChange(id: number) {
		if(selectedGenres.map(item => item.id).includes(id)){
            setSelectedGenres(selectedGenres.filter(item => item.id !== id))
        }else {
            setSelectedGenres([...selectedGenres, {id}])
        }
	}

	useEffect(() => {
		async function fetchingGenres() {
			const url = "https://api.themoviedb.org/3/genre/movie/list?language=ru";
			const options = {
				method: "GET",
				headers: {
					accept: "application/json",
					Authorization: `Bearer ${API_KEY}`,
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
	}, []);

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
								checked={selectedGenres.map(item => item.id).includes(genres.id)}
								onChange={() => handleCheckedChange(genres.id)}
							/>
							{genres.name}
						</label>
					</div>
				))}
				<button onClick={handleResetFiltersClick}>Сброс фильтров</button>
			</div>
		</>
	);
}
