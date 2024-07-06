const express = require("express") //this is how we import
const router = express.Router() // works the same as the app()

// add static routes like /new above dynamic routes like /:id
// otherwise users/new could be interpreted as /new as an id 

// we can now replace app with router
// app.get('/users', (req, res) => {
router.get('/', (req, res) => {
    res.send(('User List'))
})


router.get('/new', (req, res) => {
    res.send('User New Form')
})

router.post('/', (req, res) => {
    res.send('create user')
})

router
    .route('/:id')
    .get((req, res) => {
        res.send(`Get User with ID ${req.params.id}`)
    .put((req, res) => {
        res.send(`Update User with ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete User with ID ${req.params.id}`)
    })
})

// router.get('/:id', (req, res) => {
//     res.send(`Get User with ID ${req.params.id}`)
// })

// router.put('/:id', (req, res) => {
//     res.send(`Update User with ID ${req.params.id}`)
// })

// router.delete('/:id', (req, res) => {
//     res.send(`Delete User with ID ${req.params.id}`)
// })

router.param("id", (req, res, next, id) => {
    console.log(id)
    next()
})

module.exports = router