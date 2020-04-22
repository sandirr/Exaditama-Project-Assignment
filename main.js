const express = require("express");
const app = express();
const bp = require("body-parser");
const logger = require("morgan");
const navigator = require("./routes/index");
const { PORT } = require("./configs/consume_env");
const cors = require("cors");

app.use(cors("*"));

app.listen(PORT, () => {
  console.log("Server is running on PORT : " + PORT);
});

app.use(logger("dev"));
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));

app.use("/football", navigator);
