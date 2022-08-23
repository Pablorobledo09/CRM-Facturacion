const express = require('express')
const app= express();
const path = require('path')

app.set('appName','Servidor Grupo-2')
app.set('Port',3000)
app.set('view engine','html')
app.listen(app.get('Port'),()=>{
    console.log(app.get('appName'))
    console.log('server on port', app.get('Port'))

})


app.use(express.static(__dirname+'/public'));