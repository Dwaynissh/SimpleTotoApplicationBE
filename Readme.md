# Simple Todo Application Backend

This repository contains the backend code for a simple todo application built using TypeScript, Express, and MongoDB.

## Features

- **CRUD Operations:** Perform CRUD (Create, Read, Update, Delete) operations on todo items.
- **RESTful API:** Utilizes RESTful API endpoints for managing todo items.
- **MongoDB Database:** Uses MongoDB for storing todo data.
- **Middleware:** Implements middleware for handling request headers and other functionalities.
- **TypeScript:** Written in TypeScript for type safety and better development experience.
- **Error Handling:** Includes error handling mechanisms for better user experience.

## Requirements

- Node.js
- MongoDB

## Installation

1. Clone this repository to your local machine:

2. Navigate to the project directory:

3. Install dependencies:

4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Define the following environment variables in the `.env` file:

## Running the Server

1. Start the server:

## API Endpoints

The following endpoints are available:

- `GET /api/todos`: Get all todos.
- `POST /api/todos`: Create a new todo.
- `GET /api/todos/:id`: Get a specific todo by ID.
- `PATCH /api/todos/:id`: Update a specific todo.
- `DELETE /api/todos/:id`: Delete a specific todo.

## Headers

The server accepts the following headers:

- `Accept: application/json`: For JSON response.
- `Content-Type: application/json`: For JSON request bodies.

## Contributing

Contributions are welcome! If you find any issues or have suggestions, feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Thank you
