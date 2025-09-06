import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./db.js";
import collegeRoutes from "./routes/collegeRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("✅ Digital Guidance Backend is running...");
});

app.use("/api/colleges", collegeRoutes);

// Start server + connect DB
const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});
