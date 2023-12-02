require("dotenv").config();
const mongoose = require("mongoose");

async function connectDB() {
  try {
    // Database connection
    await mongoose.connect(process.env.MONGO_CONNECTION_URL, {
      useNewUrlParser: true,
    //   useCreateIndex: true,
      useUnifiedTopology: true,
    //   useFindAndModify: false,  // Set to false to avoid the error
    });

    console.log("Database connected");
  } catch (error) {
    console.error("Connection failed:", error);
  }
}

module.exports = connectDB;
