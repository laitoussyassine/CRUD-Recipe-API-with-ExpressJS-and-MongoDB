# CRUD Recipe API with Express.js and MongoDB

This repository contains the source code for a CRUD (Create, Read, Update, Delete) Recipe API built using Express.js and MongoDB Compass. The API supports image upload functionality through Multer.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create, Read, Update, and Delete recipes.
- Image upload for recipe items using Multer.
- MongoDB storage for recipe data.
- Express.js for handling API routes.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB Compass

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/CRUD-Recipe-API-with-ExpressJS-and-MongoDB.git
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
   ```

5. Start the serve:

   ```bash
    npm start
   ```

### Usage

The API provides endpoints for CRUD operations on recipes. Image upload is supported for recipe items.

### Endpoints

- `GET /recipes`: Get all recipes.
- `GET /recipes/`:id: Get a specific recipe by ID.
- `POST /recipes/add` Create a new recipe.
- `PATCH /recipes/update_recipe/`:id: Update a recipe by ID.
- `DELETE /recipes/delete_recipe/`:id: Delete a recipe by ID.

Detailed documentation for each endpoint can be found in the source code.

### Contributing

Feel free to contribute to this project by opening issues or pull requests. Your feedback and suggestions are welcome!

### License

This project is licensed under the `MIT License`.
