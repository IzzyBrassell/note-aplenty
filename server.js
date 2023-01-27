const express = require('express')
const path = require('path');
const fs = require('fs')
const app = express()

const PORT = process.env.PORT || 5001

app.use(express.static('public'))
app.use(express.static('db'))

app.get('/', (req, res) => {
    res.send('index.html')
})

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,'public','notes.html'))
});



app.listen(PORT, () => console.log(`App listening on port ${PORT}`));