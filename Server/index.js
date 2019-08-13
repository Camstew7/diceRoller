const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors')

app.use(express.static(__dirname + '/../Public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

app.get('/rules', (req, res) => {
  //handle request for saved rulesets
})

app.post('/rules', (req, res) => {
  // handle adding new rule to DB
})

app.put('/rules', (req, res) => {
  // handle changing existing ruleset
})

app.listen(port, function() {
    console.log(`listening on port ${port}`);
  });