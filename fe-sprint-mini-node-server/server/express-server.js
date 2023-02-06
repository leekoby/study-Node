const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json({ strict: false }));
app.use(express.urlencoded({ extended: true }));

const PORT = 4999;

const ip = "localhost";

app.post("/upper", function (req, res) {
    res.status(201).json(req.body.toUpperCase());
});

app.post("/lower", function (req, res) {
    res.status(201).json(req.body.toLowerCase());
});

app.use((req, res, next) => {
    res.status(404).send("Not Found!");
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send("Something Broke!");
});

app.listen(PORT, ip, () => {
    console.log(`http server listen on ${ip}:${PORT}`);
});