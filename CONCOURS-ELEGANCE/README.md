# group-4-project
# CONCOURS d'ELEGANCE 2023

This is a React application that allows users to view, search, add and delete classic cars from a database. The application uses React Router for navigation and fetching data from a RESTful API.

## Getting Started

To get started with this application, clone the repository from GitHub and install the necessary dependencies:

```
git clone https://github.com/yourusername/yourproject.git
cd yourproject
npm install
```

You will also need to start the server for the RESTful API. To do so, navigate to the `server` directory and run:

```
cd server
npm start
```

This will start the server on `http://localhost:3006`.

To start the React application, navigate back to the project root directory and run:

```
npm start
```

This will start the application on `http://localhost:3000`.

## Features

### Cars Container

The `CarsContainer` component is the main component of the application and renders the `CarSearch`, `CarList`, and `SearchCars` components. It also handles the state for the list of cars, which is passed down to child components as props.

### Car Search

The `CarSearch` component allows users to search for cars by entering a search term. When the user submits the search form, the `handleSearch` function is called, which fetches cars from the API that match the search term and updates the state of the list of cars.

### Car List

The `CarList` component displays a list of cars that are passed down as props from the parent `CarsContainer` component. Each car is displayed as a `Card` component, which includes an image, title, and description.

### Search Cars

The `SearchCars` component allows users to filter the list of cars based on various criteria, such as make, model, and year. When the user selects a filter, the `handleSearch` function is called, which fetches cars from the API that match the selected criteria and updates the state of the list of cars.

### Adding Cars

The `handleAddCars` function in the `App` component allows users to add a new car to the list of cars. When the user submits the add car form, the new car is added to the list of cars and the state is updated.

### Deleting Cars

The `handleDeleteCars` function in the `App` component allows users to delete a car from the list of cars. When the user clicks the delete button for a car, the `handleDeleteCars` function is called, which removes the car from the list of cars and updates the state.

## Technologies Used

- React
- React Router
- CSS
- JavaScript

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.
