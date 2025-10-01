import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import customersform from "./routes/customers.js";
import getdata from "./routes/getdata.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/submit", customersform);
app.get("/getdata", getdata);



app.get("/health", (req, res) => {
  res.status(200).json({
    status: "Backend Server is running Good !",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
