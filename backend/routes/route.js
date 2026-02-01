const express = require("express");
const router = express.Router();
const Task = require("../model/taskSchema");

router.post("/tasks", async (req, res) => {
    try {
        const { name, description } = req.body;
        const task = await Task.create({ name, description });
        res.status(201).json(task);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.delete("/tasks/:id", async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: "Task deleted" });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
