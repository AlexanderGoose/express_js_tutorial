const express = require("express") //this is how we import
const router = express.Router() // works the same as the app()

// we can now replace app with router
// app.get('/users', (req, res) => {
router.get('/', (req, res) => {
    res.send(('User List'))
})


router.get('/new', (req, res) => {
    res.send('User New Form')
})

module.exports = router