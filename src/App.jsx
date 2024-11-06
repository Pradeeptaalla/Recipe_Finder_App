import { useState } from "react";
import { Pagination } from "flowbite-react";
import "./index.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import Swal from "sweetalert2";

export default function App() {
	const [searchTerm, setSearchTerm] = useState("");
	const [meals, setMeals] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 6;

	function fetchMealsByIngredient(ingredient) {
		const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				if (data.meals) {
					setMeals(data.meals);
				} else {
					Swal.fire({
						title: "Oops! We couldn't find any meals",
						text: "Don't worry, let's try using different ingredients to find something delicious!",
						icon: "error",
						confirmButtonText: "Try Again",
					});
					setMeals([]);
				}
			})
			.catch(() => {
				Swal.fire({
					title: "Something went wrong",
					text: "It seems like there was an issue with your request or your internet connection. Please try again later.",
					icon: "error",
					confirmButtonText: "Retry",
				});
			});
	}

	function handleSearch(event) {
		event.preventDefault();
		setCurrentPage(1); // Reset to first page when searching
		fetchMealsByIngredient(searchTerm);
	}

	const indexOfLastMeal = currentPage * itemsPerPage;
	const indexOfFirstMeal = indexOfLastMeal - itemsPerPage;
	const currentMeals = meals.slice(indexOfFirstMeal, indexOfLastMeal);

	const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

	const totalPages = Math.ceil(meals.length / itemsPerPage);

	return (
		<div className="container">
			<Header />
			<main className="p-2">
				<SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />

				{meals.length === 0 ? (
					<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 text-center p-10 m-10 w-full">
						<div className="flex flex-col justify-center items-center">
							<h1 className="text-6xl font-bold">Not sure what to make?</h1>
							<h2 className="text-4xl p-2">Try searching with an ingredient you already have!</h2>
						</div>
						<div className="flex justify-center items-center">
							<img className="rounded-lg p-2 max-w-full h-auto" src="looking.png" alt="image" />
						</div>
					</div>
				) : (
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
						{currentMeals.map((meal) => (
							<Card key={meal.idMeal} title={meal.strMeal} imgsrc={meal.strMealThumb} />
						))}
					</div>
				)}

				<div className="flex justify-center mt-6">
					<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} showIcons />
				</div>
			</main>
		</div>
	);
}
