const express = require("express");
const cors = require("cors");
const app = express();

const gamesRoutes = require("./src/Games/routes");

const port = 8004;

app.use(express.json());
app.use(cors({ origin: '*' }));

app.get("/", (req, res) => {
    console.log("Root endpoint hit");
    res.send("Hello Point Park University");
});

console.log("Mounting routes at /api/v1/games");
app.use("/api/v1/games", gamesRoutes);

app.listen(port, () => console.log(`Running on port ${port}`));