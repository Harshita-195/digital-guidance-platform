import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import sequelize from "./utils/db.js";
import User from "./models/User.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);

// test route
app.get("/", (req, res) => {
  res.send("✅ Digital Guidance Backend is running...");
});

// sync DB then start server
sequelize.sync({ alter: true })
  .then(() => {
    console.log("✅ Database synced");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => console.error("❌ DB Error:", err));
