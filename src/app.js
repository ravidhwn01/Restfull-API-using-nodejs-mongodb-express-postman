const express = require("express");
const router = require("./routers/men");

require("../src/db/conn");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log("connecting is live at port: 3000");
});
