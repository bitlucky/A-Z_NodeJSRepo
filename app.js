const express = require('express');
const app = express();
const PORT = 3000

// app.get('/', (req,res) => {
//     res.send('Hello World')
// })

app.use((req,res,next) => {
    console.log('In a middleware!');
    next();
})

app.use((req,res,next) => {
    console.log('In another middleware!')
    res.send('Hello World');
})

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
})