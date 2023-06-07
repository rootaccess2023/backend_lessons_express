const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log(`New request made: ${req.method}`);
});

app.listen(port, () => {
    console.log(`The server is listening on port ${port}`)
});
