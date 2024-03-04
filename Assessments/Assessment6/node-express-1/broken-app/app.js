const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

app.use(bodyParser.json());

app.post('/', async function (req, res, next) {
  try {
    const results = await Promise.all(req.body.developers.map(async d => {
      const response = await axios.get(`https://api.github.com/users/${d}`);
      return response.data;
    }));
    const out = results.map(r => ({ name: r.name, bio: r.bio }));

    return res.send(JSON.stringify(out));
  } catch (err) {
    next(err);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});