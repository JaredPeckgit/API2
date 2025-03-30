
const express = require("express");
const app = express();

const gamesRoutes = require("./src/Games/routes");

const port = 8004;

app.use(express.json());

const cors = require("cors");
app.use(cors({
    origin: '*'
}));

app.get("/", (req, res) => {
    res.send("Hello Point Park University");
});

app.use("/api/v1/games", gamesRoutes);

app.listen(port, () => console.log(`Running on port ${port}`));


