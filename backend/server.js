const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");

app.use(bodyParser.json());

dotenv.config();

// DB config
module.exports = function () {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => winston.info("Connected to MongoDB Test..."));
};

// use routes
app.use("/api/items", items);

// connect to mongo
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on port ${port}`));
