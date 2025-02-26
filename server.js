const express = require("express")
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;

app.get('^/$|index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
})

//handle redirects. You must specify the redirect page.

app.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, 'new-page.html');
})

//handles 404

app.get('/*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

//Route handlers.



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));