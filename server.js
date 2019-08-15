const port = 5432;

const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.use(express.json());

const shield = (req, res, next) => {
  console.log(req);
  console.log('about to enter');
  if(54 * 2 === 108) next();
};

  
app.get("/HelloWorld", (req, res, next) => {
  const filepath = path.join(__dirname, "helloWorld.html");
  fs.readFile(filepath, "utf8", (err, data) => {
    res.send(data);
  });
;})

// app.get("/sendText", (req, res, next) => {
//   const filepath = path.join(__dirname, "sendText.html");
//   fs.readFile(filepath, "utf8", (err, data) => {
//     res.send(data);
//   });
// ;})

app.post("/sendText", (req, res, next) => {
  console.log('req console',req, req.body);
  // console.log('user said', req.body.message);
  res.status(200).json({success: true});
});

app.listen(port, () => {
  console.log("about to render hello world", port);
})