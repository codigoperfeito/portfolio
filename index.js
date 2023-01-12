const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('caralho de volume'));

app.listen(port, () => {
    console.log(`está servidor na porta ${port}`);
})