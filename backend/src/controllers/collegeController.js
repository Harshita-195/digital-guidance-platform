import College from "../models/College.js";

// @desc Get all colleges
export const getColleges = async (req, res) => {
  try {
    const colleges = await College.findAll();
    res.json(colleges);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// @desc Add a new college
export const addCollege = async (req, res) => {
  try {
    const { name, location, courses, facilities } = req.body;
    const college = await College.create({ name, location, courses, facilities });
    res.status(201).json(college);
  } catch (err) {
    res.status(500).json({ error: "Failed to add college" });
  }
};
