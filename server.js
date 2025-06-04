console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();
const http = require('http');
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("error:", err);
    } else {
        user = JSON.parse(data)
    }
});

//1 Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.set("views", "views");
app.set("view engine", "ejs");



app.get('/author', (req, res) => {
    res.render("author", {user: user});
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The sever is running successfully on port: ${PORT}`);
});
