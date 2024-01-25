# CRUD Recipe API with Express.js and MongoDB

This repository contains the source code for a CRUD (Create, Read, Update, Delete) Recipe API built using Express.js and MongoDB Compass. The API supports image upload functionality through Multer and utilizes the `validator` library for input validation. Authentication has been implemented to allow registered users to perform actions like adding, updating, and deleting recipes.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Authentication](#authentication)
- [Project Structure (MVC)](#project-structure-mvc)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create, Read, Update, and Delete recipes.
- Image upload for recipe items using Multer.
- MongoDB storage for recipe data.
- Express.js for handling API routes.
- User authentication using bcrypt and JWT.
- Input validation using the `validator` library.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB Compass

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/laitoussyassine/CRUD-Recipe-API-with-ExpressJS-and-MongoDB.git
   ```

2. Change into the project directory:

   ```bash
   cd CRUD-Recipe-API-with-ExpressJS-and-MongoDB
   ```

3. Install dependencies:

   ```bash
    npm install
   ```

4. Create a .env file in the root directory and configure the following:

   ```bash
      PORT=3000
      MONGODB_URI=mongodb://localhost:27017
      JWT_SECRET=your-secret-key
   ```

5. Start the serve:

   ```bash
    npm start
   ```

### `Usage`

The API provides endpoints for CRUD operations on recipes. Image upload is supported for recipe items. Users can perform actions like adding, updating, and deleting recipes after authenticating.

### `Endpoints`

- GET `/recipes`: Get all recipes.
- GET `/recipes/:id`: Get a specific recipe by ID.
- POST `/recipes/add` Create a new recipe.
- PATCH `/recipes/update_recipe/:id`: Update a recipe by ID.
- DELETE `/recipes/delete_recipe/:id`: Delete a recipe by ID.

  ### `Authentication Endpoints`

- POST `/signup`: User signup. Creates a new user account.
- GET `/logout`: User logout. Logs the user out of the system.
- POST `/login:` User login. Validates user credentials and returns a JWT token for authentication.

Detailed documentation for each endpoint can be found in the source code.

### `Authentication`

User authentication is implemented using bcrypt for password hashing and JWT (JSON Web Token) for secure authentication. Registered users can add, update, and delete recipes after logging in. The .env file should contain a secret key (JWT_SECRET) for signing JWT tokens.

### `Project Structure (MVC)`

The project follows the MVC (Model-View-Controller) architecture for better organization and maintainability.

- models: Contains MongoDB schemas for recipe and user data.
- controllers: Implements the business logic for CRUD operations, user authentication, and input validation.
- routes: Defines API routes and connects them to the corresponding controllers.
- views: Not applicable for this project (commonly used for rendering views in web applications).

### `Contributing`

Feel free to contribute to this project by opening issues or pull requests. Your feedback and suggestions are welcome!

### `License`

This project is licensed under the `MIT License`.
