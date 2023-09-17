require("dotenv").config({ path: ".env" });
const express = require("express");
const app = express();

// db connection
require("./models/db");

// bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// CORS
app.use(require("cors")({ credentials: true, origin: true }));

// routes
app.use("/api/v1", require("./routes/indexRoute"));

app.listen(
    process.env.PORT || 3000,
    console.log(`Server running on port ${process.env.PORT}`)
);
