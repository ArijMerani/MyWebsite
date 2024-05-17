const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/projects', (req, res) => {
    res.sendFile(__dirname + '/public/projects.html');
});

app.get('/education', (req, res) => {
    res.sendFile(__dirname + '/public/education.html');
});

app.get('/certifications', (req, res) => {
    res.sendFile(__dirname + '/public/certifications.html');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

