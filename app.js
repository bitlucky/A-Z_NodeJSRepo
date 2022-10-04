const express = require('express');
const app = express();
const PORT = 3000

app.use('/add-product', (req, res, next) => {
    res.send('<h1>The "Add Product" Page</h1>');
})

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from express</h1>');
})

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
})