const express = require('express');
const app = express();

// console.log('testing')

app.set('view engine', 'ejs') //gotta do this

app.get('/', (req, res) => {
    console.log('Here');
    // res.send('Hi');
    // res.sendStatus(500)
    // res.status(404).send("Oops, can't find that page...")

    // res.status(500).json({ message: "Error" })
    // res.download('server.js')
    res.render('index', { text: 'World' })
});

const userRouter = require('./routes/users')

app.use('/users', userRouter)

// lets me port the code
const PORT = 5500;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
