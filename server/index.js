const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api", (req,res) => {
    res.json({message: "This is the backend for BudgetBuddy!"})
});

app.get("/expenses", (req, res) => {
    res.json({message: "User expenses will be retrieved from this endpoint"})
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})