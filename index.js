const express = require("express");
const app = express();
const importData = require("./guestlist.json");
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Guest list");
})

app.get("/guestlist", (req, res) => {
    res.send(importData);
})

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
})