const express = require('express')
require("dotenv").config();
const app = express()

const dbConfig = require("./config/dbConfig");

const protfolioRoute = require("./routes/portfolioRoute");

app.use(express.json());
app.use('/api/portfolio', protfolioRoute);

const port = process.env.PORT || 5000;

// deployment code start
            // const path = require("path");
            // if (process.env.NODE_ENV === "production") {
            //     app.use(express.static(path.join(__dirname, "portfolio/build")));
            //     app.get("*", (req, res) => {
            //         res.sendFile(path.join(__dirname, "portfolio/build/index.html"));
            //     });
            // }
// deployment code end
app.listen(port, () => {
    console.log(`Server Running On Port ${port}`);
});