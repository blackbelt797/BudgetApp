const express = require('express')
const app = express()
const port = 3000

const account = [{
  balance: 5000
}]

app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

app.post('/api/account', function (req, res) {
  res.send(account)
})

app.listen(port, () => {
  console.log(`Budget app listening onnode http://localhost:${port}`)
})