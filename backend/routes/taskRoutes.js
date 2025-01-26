const express = require("express");
const {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const router = express.Router();

router.get("/", getAllTasks); // Отримати всі завдання
router.get("/:id", getTaskById); // Отримати конкретне завдання
router.post("/", createTask); // Додати нове завдання
router.put("/:id", updateTask); // Оновити завдання
router.delete("/:id", deleteTask); // Видалити завдання

module.exports = router;

const { body, param } = require("express-validator");

router.post(
  "/",
  body("title").notEmpty().withMessage("Title is required"),
  createTask
);

router.put(
  "/:id",
  [
    param("id").isInt().withMessage("Invalid task ID"),
    body("title").notEmpty().withMessage("Title is required"),
    body("completed").isBoolean().withMessage("Completed must be true/false"),
  ],
  updateTask
);

