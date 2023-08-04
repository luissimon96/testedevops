const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const name = process.env.NAME || 'candidato';
    res.send(`Olá ${name}!`);
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})