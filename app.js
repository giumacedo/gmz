const express = require('express')
const path = require("path");
const port = 8080

const app = express()

app.use('/public', express.static('./public'))

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});


console.log('listening on ' + port)
app.listen(port)
