import express from "express";
import College from "../models/College.js";

const router = express.Router();

// =========================
// GET all colleges
// =========================
router.get("/", async (req, res) => {
  try {
    const colleges = await College.findAll();
    res.json(colleges);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// =========================
// GET a college by ID
// =========================
router.get("/:id", async (req, res) => {
  try {
    const college = await College.findByPk(req.params.id);
    if (!college) return res.status(404).json({ error: "College not found" });
    res.json(college);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// =========================
// POST add a new college
// =========================
router.post("/", async (req, res) => {
  try {
    const { name, location, courses, facilities } = req.body;
    const college = await College.create({ name, location, courses, facilities });
    res.status(201).json(college);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// =========================
// PUT update a college by ID
// =========================
router.put("/:id", async (req, res) => {
  try {
    const { name, location, courses, facilities } = req.body;
    const college = await College.findByPk(req.params.id);
    if (!college) return res.status(404).json({ error: "College not found" });

    college.name = name ?? college.name;
    college.location = location ?? college.location;
    college.courses = courses ?? college.courses;
    college.facilities = facilities ?? college.facilities;

    await college.save();
    res.json(college);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// =========================
// DELETE a college by ID
// =========================
router.delete("/:id", async (req, res) => {
  try {
    const college = await College.findByPk(req.params.id);
    if (!college) return res.status(404).json({ error: "College not found" });

    await college.destroy();
    res.json({ message: "College deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
