import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const College = sequelize.define("College", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  courses: {
    type: DataTypes.ARRAY(DataTypes.STRING), // Example: ["B.A", "B.Sc", "B.Com"]
    allowNull: false,
  },
  facilities: {
    type: DataTypes.JSON, // Example: { hostel: true, library: true }
    allowNull: true,
  },
});

export default College;
