const express = require("express");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const All_Routes = require("./Routes/index");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: process.env.CLIENT_URL || "http://127.0.0.1:5500",
  credentials: true,
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to the Ticketing System API");
});

app.use("/api", All_Routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});