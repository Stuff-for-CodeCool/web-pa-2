const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { connect, insertAll } = require("./data/dataHandler");

connect("pasim");
insertAll();

const port = 9002;

const app = express()
    .use(cors())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(express.json())
    .use(express.static("public"))
    .set("views", "./views")
    .set("view engine", "pug")
    .get("/", (req, res) => {
        res.render("index");
    })
    .get("/add-user", (req, res) => res.render("addUser"))
    .listen(port, () => console.log(`http://localhost:${port}/`));
