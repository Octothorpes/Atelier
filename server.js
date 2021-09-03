const path = require("path")
const express = require("express");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "/client/dist")));
// other configuration...

app.listen(port, () => {
  console.log(`Express Server is running on port ${port}`);
});