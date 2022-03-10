const express = require('express')
const app = express()
const port = 3000

var xmlparser = require('express-xml-bodyparser');
app.use(xmlparser());

app.post('/test', function(req, res, next) {
      console.log(req.body)
  res.send("ok")
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })