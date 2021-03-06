const express = require("express");
const cors = require('cors');
const { get } = require("http");
const app = express();

app.use(express.json());
app.use(cors())
app.listen(4000, () => console.log('server is running on port 4000'));

app.get('/api/users', (req, res) => {
    let friends = ['Nitin', 'Eric', 'Jeddy', 'Cameron', 'Riley'];
    res.status(200).send(friends)
})

app.get('/weather/:temperature', (req, res) => {
    if(temperature === 'HOT'){
        const { temperature } = req.params;
        const phrase = `<h3> It was ${temperature} today</h3>`;
    }else {
        const { temperature } = req.params;
        const phrase = `<h3> It was ${temperature} today</h3>`;
    
    }
    
    res.status(200).send(phrase);
})

