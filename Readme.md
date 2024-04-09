## MVC Architecture with Node.js and Express.js

This project implements the Model-View-Controller (MVC) architectural pattern using Node.js and Express.js. MVC is a widely used design pattern for structuring web applications, providing a clear separation of concerns between the different components of the application.

### Components:

- **Model**: Represents the data and business logic of the application. Models interact with the database or any external data source.

- **View**: Responsible for presenting the data to the user. Views are typically rendered using templates and are served to the client.

- **Controller**: Acts as an intermediary between the Model and the View. Controllers handle user input, process requests, and update the Model accordingly. They also decide which View to render in response to a request.

### Features:

- **Easy Generation**: This project provides commands to generate Controllers, Models, and Middleware effortlessly using npm scripts. This simplifies the creation of new components and ensures adherence to the MVC architecture.

- **Express.js Integration**: Built on top of Express.js, a popular web framework for Node.js, making it easy to handle HTTP requests, routes, and middleware.

### Getting Started:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Start the server using `npm run serve`.
4. Visit `http://localhost:8000` in your browser to view the application.

### Usage:

- **Generating Components**: Use npm scripts to generate Controllers, Models, and Middleware. For example:
  - To generate a new Controller: `npm run make:controller <controller_name>`.
  - To generate a new Model: `npm run make:model <model_name>`.
  - To generate a new Middleware: `npm run make:middleware <middleware_name>`.

- **Creating Routes**: routes are defined in the appropriate Controller files within the `routes` directory. Each route specifies the corresponding Controller action to handle the request.

```import { Router } from "express";
import UserController from "../controllers/UserController.mjs";
import AuthMiddleware from "../middlewares/authMiddleware.mjs";
const Route = Router();

// define all the API routes here
Route.post("/user", [UserController.createUser]);
Route.get("/users", [AuthMiddleware, UserController.getAllUsers]);
Route.get("/users/:id", [UserController.getUserById]);
Route.put("/users/:id", [UserController.updateUserById]);
Route.delete("/users/:id", [UserController.deleteUserById]);

export default Route;

```

- **Interacting with the Database**: Implement database operations within the Model files. Use ORMs (Object-Relational Mappers) like Sequelize or Mongoose for seamless interaction with relational or non-relational databases.

### Contributing:

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, feel free to open an issue or create a pull request.

#### Authors

- [@sajithnsilvame](https://www.linkedin.com/in/sajith-nishantha-silva-265950213/)

#### License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


