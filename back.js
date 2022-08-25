const express = require('express')
const app= express();
const path = require('path')



app.set('appName','Servidor Grupo-2')
app.set('Port',3000)
app.set('view engine','html')

app.use(express.urlencoded({
    extended:false}))


app.post('/form',(req,res)=>{
    const name = req.body.nombre
    const nameclient= req.body.nombrecliente
    const lastN = req.body.apellido
    const direct = req.body.direccion 

    console.log(name)
})


app.use(express.static(__dirname+'/public'));



app.listen(app.get('Port'),()=>{
    console.log(app.get('appName'))
    console.log('server on port', app.get('Port'))

})

