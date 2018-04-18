const express = require('express');
const path = require('path')

const app = express();

const port = process.env.PORT || 8080

//Serve static files
app.use(express.static(path.join(__dirname, '/public')))

//Route
app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.listen(port, () => console.log(`App listening on port ${port}`));
