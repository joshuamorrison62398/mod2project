const express = require('express')

const port = 3000

const app = express()


app.get('/', (req, res) => {
    res.send('<h1>Shoe Store</h1>')
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})

