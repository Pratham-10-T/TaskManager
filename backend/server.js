const express = require("express");
const cors = require("cors");

require("dotenv").config();
require("./db/conn");

const taskRoutes = require("./routes/route"); 

const app = express();

app.use(cors());
app.use(express.json());

app.use(taskRoutes); 

app.listen(3000, () => {
  console.log("App is running on 3000");
});
