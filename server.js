const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('./dist/deployjdp'));

// Send all requests to index.html
app.get('/*', function(req, res) {
    res.sendFile('index.html', { root: 'dist/deployjdp/' });
});


// default Heroku port
app.listen(process.env.PORT || 8080);