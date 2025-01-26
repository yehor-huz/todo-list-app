const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Для обробки JSON

// Головний маршрут для перевірки
app.get("/", (req, res) => {
  res.send("To-Do List API is running...");
});

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const tasksRouter = require("./routes/tasks");
app.use("/tasks", tasksRouter);

