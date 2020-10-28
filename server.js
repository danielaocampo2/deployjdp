const path = require('path');
const express = require('express');
const app = express();


app.use(express.static(__dirname + '/dist/deployjdp'));

// Send all requests to index.html
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/deployjdp/index.html'));
});

// default Heroku port
app.listen(process.env.PORT || 5000);