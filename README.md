# Recipe Finder App

## Description
The Recipe Finder App helps users search for meals based on available ingredients. By entering an ingredient, the app fetches recipes using TheMealDB API, displaying meal suggestions with images. It includes a pagination feature to navigate through meal results.

## Features
- **Search for Recipes**: Users can search for recipes by entering ingredients they have available.
- **Pagination**: Displays 6 meals per page, with pagination controls for easy navigation.
- **Error Handling**: Shows an error message if no meals are found or if there is an issue with the fetch request.
- **Responsive Design**: The app is responsive and works well across different devices.

## Tech Stack
- **React**: JavaScript library for building user interfaces.
- **Flowbite**: A Tailwind CSS component library for pagination.
- **SweetAlert2**: For displaying alert messages on error or when no meals are found.
- **Tailwind CSS**: Utility-first CSS framework for styling the application.



## How It Works

### Search for Recipes:
Users can type an ingredient (e.g., "chicken") into the search bar. When the user hits Enter, the app queries TheMealDB API for meals that match the ingredient.

### Display Results:
Meals are displayed in a grid. Each meal includes the name and image. If no meals are found, an alert will display a message to guide the user.

### Pagination:
The app shows a maximum of 6 meals per page. Users can navigate through the results using the pagination controls at the bottom.

### Error Handling:
If the API request fails or no meals match the ingredient, the app will show a friendly alert with an error message.

## Check Out My GitHub

If you'd like to explore more of my projects, check out my GitHub profile!

[Visit my GitHub](https://github.com/Pradeeptaalla/)

## Submission Details

### Level 1 (50%) - Working with AI
I worked with ChatGPT to assist in writing the React code, creating the README, and understanding how to handle API requests and pagination. You can view my conversation with ChatGPT here: [ChatGPT conversation link].

### Level 2 (30%) - Working Application
The application is deployed on CodeSandbox, and you can view it live here: [Recipe Finder App on CodeSandbox](https://codesandbox.io/your-sandbox-link)

Alternatively, you can view the app deployed on StackBlitz here: [Recipe Finder App on StackBlitz](https://stackblitz.com/your-sandbox-link)

### Level 3 (20%) - Code Sharing
The code for this project is hosted on GitHub. You can find the repository here: [Recipe Finder App GitHub Repository](https://github.com/your-username/recipe-finder-app)

Please refer to the README in the repository for more details about the project and how to run the app locally.
