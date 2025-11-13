# Todo App / Task Management API

A simple yet powerful **Task Management Application** built with **Node.js**, **Express**, and **PostgreSQL**.
This application allows users to efficiently manage their daily tasks — with features such as authentication, task prioritization, filtering, and progress tracking.

---

## Features

### Authentication

* **JWT-based** login and registration system
* Protected routes for authenticated users

### Task Management

* Create, read, update, and delete (CRUD) tasks
* Set task **priority** (Low, Medium, High)
* Update task **status** (Pending, In-Progress, Completed)
* Add **due dates** for better scheduling

### Search & Filter

* Filter tasks by **status** or **priority**
* Search tasks easily by title or description

### Frontend

* Responsive **React** interface styled with **Tailwind CSS**

### Testing

* Unit and integration tests using **Jest** and **Supertest**

---

## Tech Stack

| Layer              | Technology                   |
| ------------------ | ---------------------------- |
| **Backend**        | Node.js, Express.js          |
| **Database**       | PostgreSQL                   |
| **Authentication** | JSON Web Token (JWT), bcrypt |
| **Frontend**       | React, Tailwind CSS          |
| **Testing**        | Jest, Supertest              |

---

## Installation & Setup

### 1 Clone the repository

```bash
git clone git@github.com:Mengawanji/NodeTodo-.git
cd NodeTodo-
```

### 2 Install dependencies

```bash
npm install
```

### 3 Configure environment variables

Create a `.env` file in the root directory and add:

```env
PORT=5000
DATABASE_URL=your_postgresql_connection_url
JWT_SECRET=your_jwt_secret
```

### 4 Run the development server

```bash
npm run dev
```

The server will start at:
**[http://localhost:5000](http://localhost:5000)**

---

## Live Deployment

The app is deployed and accessible at:
**[https://nodetodo-czvh.onrender.com/](https://nodetodo-czvh.onrender.com/)**

---

## API Endpoints

### **User Routes**

| Method | Endpoint             | Description               |
| ------ | -------------------- | ------------------------- |
| `POST` | `/api/auth/register` | Register a new user       |
| `POST` | `/api/auth/login`    | Login and receive token   |
| `GET`  | `/api/auth/me`       | View current user profile |

---

### **Task Routes**

| Method   | Endpoint         | Description             |
| -------- | ---------------- | ----------------------- |
| `POST`   | `/api/tasks`     | Create a new task       |
| `GET`    | `/api/tasks`     | Get all tasks           |
| `GET`    | `/api/tasks/:id` | Get a single task by ID |
| `PUT`    | `/api/tasks/:id` | Update a task           |
| `DELETE` | `/api/tasks/:id` | Delete a task           |

---
