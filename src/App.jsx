import { useState } from "react";
import { Pagination } from "flowbite-react";
import "./index.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import Swal from "sweetalert2";

/**
 * Main App component
 * Handles searching meals by ingredient, displaying meals, and managing pagination.
 */
export default function App() {
  // State for storing the search term
  const [searchTerm, setSearchTerm] = useState("");
  
  // State for storing the list of meals
  const [meals, setMeals] = useState([]);
  
  // State for tracking the current page number
  const [currentPage, setCurrentPage] = useState(1);
  
  // Number of items to display per page
  const itemsPerPage = 6;

  /**
   * Fetch meals from API based on the ingredient passed in
   * @param {string} ingredient - Ingredient to search meals by
   */
  function fetchMealsByIngredient(ingredient) {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          setMeals(data.meals);
        } else {
          Swal.fire({
            title: "Oops! No meals found",
            text: "Try using a different ingredient!",
            icon: "error",
            confirmButtonText: "Try Again",
          });
          setMeals([]);
        }
      })
      .catch(() => {
        Swal.fire({
          title: "Something went wrong",
          text: "Check your connection or try again later.",
          icon: "error",
          confirmButtonText: "Retry",
        });
      });
  }

  /**
   * Handles the search form submission and fetches meals based on the search term
   * @param {Object} event - The event from the search form
   */
  function handleSearch(event) {
    event.preventDefault(); // Prevent default form behavior
    setCurrentPage(1); // Reset to page 1 when searching
    fetchMealsByIngredient(searchTerm); // Fetch meals by the search term
  }

  // Calculate which meals to show based on the current page
  const indexOfLastMeal = currentPage * itemsPerPage;
  const indexOfFirstMeal = indexOfLastMeal - itemsPerPage;
  const currentMeals = meals.slice(indexOfFirstMeal, indexOfLastMeal);

  /**
   * Handles changing the page in the pagination
   * @param {number} pageNumber - The number of the page to navigate to
   */
  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages based on total meals and items per page
  const totalPages = Math.ceil(meals.length / itemsPerPage);

  return (
    <div className="container">
      {/* Header component */}
      <Header />
      
      <main className="p-2">
        {/* Search Bar component */}
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />

        {/* Show this if no meals are found */}
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
          // Display meals if available
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {currentMeals.map((meal) => (
              <Card key={meal.idMeal} title={meal.strMeal} imgsrc={meal.strMealThumb} />
            ))}
          </div>
        )}

        {/* Pagination Component */}
        <div className="flex justify-center mt-6">
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} showIcons />
        </div>
      </main>
    </div>
  );
}
