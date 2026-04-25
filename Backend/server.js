require('dotenv').config();
const connectDb = require("./db/db");
const app = require("./src/app");

connectDb();

app.listen(8000, () => {
  console.log("server is running on 8000");
});
