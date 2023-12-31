require("dotenv").config();

const express = require("express");
const expressLayout = require('express-ejs-layouts')

const app = express ();
const PORT = 6556 || process.env.PORT;

app.use(express.static('public'))

// templating engine
app.use(expressLayout)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

app.use("/", require("./routes/main"))


app.listen(PORT, () => {
    console.log(`Server is listening to ${PORT}`)
});

