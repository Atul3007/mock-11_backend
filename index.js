const express = require("express");
const { connection } = require("./config/db");
const {note_router}=require("./routes/notes.routes");
const cors=require("cors");
const app = express();
app.use(express.json());
app.get("/api", (req, res) => {
    res.send("Welcome");
})
app.use(cors({
    origin: '*'
}));


app.use("/api/notes",note_router);

app.listen(4500, async () => {
    try {
        await connection;
        console.log("Connected to Db");
    } catch (error) {
        console.log(error);
        console.log("Problem in db");
    }
    console.log("4500 running");
})


