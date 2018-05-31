const express = require('express');
const path = require('path')

const app = express();

const port = process.env.PORT || 8080

//Serve static files
app.use(express.static(path.join(__dirname, '/public')))

//Route
app.get('/package', (req, res) => {
    res.sendFile(path.join(__dirname+ '/views/package.html'))
})

app.get('/developer', (req, res) => {
    res.sendFile(path.join(__dirname+ '/views/developer.html'))
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+ '/views/split.html'))
})

app.listen(port, () => console.log(`App listening on port ${port}`));
