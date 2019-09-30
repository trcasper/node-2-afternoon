const express = require("express");
const mc = require("./controllers/messages_controller");

const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));


const messageBaseUrl = "/api/messages";

app.post(messageBaseUrl, mc.create);
app.get(messageBaseUrl, mc.read);
app.put(`${messageBaseUrl}/:id`, mc.update);
app.delete(`${messageBaseUrl}/:id`, mc.delete);


const port = 3001;
app.listen(port, () => console.log("Node 2 is running on 3001"))