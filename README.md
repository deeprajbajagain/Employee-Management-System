# 🧑‍💼 Employee Management System

A Spring Boot and React.js full-stack web application for managing employee data. It allows users to **add**, **view**, **update** and **delete** employee records. The app features a responsive frontend, RESTful backend, and an H2 in-memory database for development and testing.

---

## 🚀 Features

- Add new employee records
- View all employees dynamically
- Update employee information
- Delete employee record
- Sample data preloaded via H2 on startup

---

## 📚 Table of Contents

- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Endpoints](#endpoints)
- [Database Initialization](#database-initialization)
- [License](#license)

---

## 🛠️ Technologies Used

| Component   | Technology           |
|------------|----------------------|
| Frontend   | React.js, CSS, HTML  |
| Backend    | Java 21, Spring Boot |
| Database   | H2 (In-Memory)       |
| Build Tool | Maven                |
| API Format | RESTful              |

---

## ✅ Prerequisites

- Java 21+
- Maven 3.8+
- Node.js and npm (for frontend)
- Git (optional)

---

## 🧩 Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Employee-Management-System
```

### 2. Build Backend

```bash
cd ems-backend
mvn clean install
```

### 3. Build Frontend
```bash
cd ../ems-frontend
npm install
```

### ▶️ Running the Application
### 🧠 Backend

```bash
cd ems-backend
mvn spring-boot:run
```

#### Visit H2 Console: http://localhost:8080/h2-console

### 🌐 Frontend
```bash
cd ems-frontend
npm start
```

#### App URL: http://localhost:5173


### 🧱 Project Structure
```text
Employee-Management-System/
├── ems-frontend/        # React.js frontend
├── ems-backend/         # Spring Boot backend
└── README.md            # Documentation
```

### 🌐 Endpoints

#### RESTful Endpoints

- GET /api/employees → List all employees

- POST /api/employees → Add a new employee

- PUT /api/employees/{id} → Update employee by ID

- DELETE /api/employees/{id} → Delete employee by ID

### 🗃️ Database Initialization
- The backend uses H2 in-memory database. Sample records are auto-loaded via data.sql.
- Schema creation via Spring JPA
- Access console at: http://localhost:8080/h2-console

### 📄 License
- This project is released under the MIT License.
