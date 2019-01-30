require("dotenv").config();

const PORT = process.env.PORT || 8000;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// const models = require('./models')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/users", require("./routes/users"));
app.use("/api/v1/course", require("./routes/course"));
app.use("/api/v1/auth", require("./routes/auth"));

// models.sequelize.sync().then(() => {
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
// });
