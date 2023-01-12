const express = require("express");
const app = express();

app.get('/', (req,res) => res.send('app funcionando troquei'));

app.listen("3000");
