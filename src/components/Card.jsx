/* eslint-disable react/prop-types */

const Card = ({ title, imgsrc }) => {
	return (
		<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<img className="rounded-t-lg p-2" src={imgsrc} alt={title} />

			<div className="p-5">
				<a href="#">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
				</a>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Enjoy this flavorful {title} made to delight with every bite! </p>
				<div className="flex justify-center items-center">
					<button type="button" className="w-full max-w-xs text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						Explore Dish
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
