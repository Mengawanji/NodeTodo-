A Todo App/Task Management App

A simple yet powerful Task Management Application built with Node.js, Express, and PostgreSQL.
This app allows users to create, update, delete, and track tasks with different priorities, statuses, and due dates.

Common App Features

// User authentication (JWT-based login & registration)

// Create, read, update, and delete tasks

// Set priority (low, medium, high) and status (pending, in-progress, completed)

// Search and filter tasks by status or priority

// Responsive frontend built with React + Tailwind CSS

// RESTful API with PostgreSQL as the database

// Unit & integration tests with Jest & Supertest

Tech Stack

Backend: Node.js, Express.js

CLONE REPOSITORY
git clone git@github.com:Mengawanji/NodeTodo-.git


The app will be running at:

URL https://nodetodo-czvh.onrender.com/


API Endpoints
USER ROUTES
========    ========    ===========

POST /api/auth/register → Register new user

POST /api/auth/login => Login and receive token

GET /api/auth/me  => See your profile



TASK ROUTES
========    ========    ===========

POST /api/tasks → Create new task

GET /api/tasks → Get all tasks 

GET /api/tasks/:id → Get single task

PUT /api/tasks/:id → Update task

DELETE /api/tasks/:id → Delete task

