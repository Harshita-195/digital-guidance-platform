const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/quiz", require("./routes/quizRoutes"));
app.use("/api/colleges", require("./routes/collegeRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
