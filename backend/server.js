const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Backend running successfully");
});
app.post("/api/register", (req,res) =>{
    console.log(req.body);
    res.send("registration API working")

} );





app.listen(5000, () => {
    console.log("Server running on port 5000")
});

