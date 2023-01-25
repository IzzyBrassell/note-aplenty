const express = require('express')
const app = express()

const PORT = process.env.PORT || 5001

app.use(express.static('public'))
app.use(express.static('db'))

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

// app.get('/notes', (req, res) => {
//     res.sendFile(`notes.html`)
// })  

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));