var express = require("express");
const res = require("express/lib/response");
var app = express()
var port = process.env.port || 3000;

app.use(express.static(__dirname+'/public'))
app.use(express.json())
app.use(express.urlencoded({extends: false}))

const addNumbers= (number1, number2)  => {
    var num1 = parseInt(number1)
    var num2 = parseInt(number2)
    var result = num1 + num2 
    return result

}
app.get("/addTwoNumbers",(requ,resp) => {
    var number1 = requ.query.number1
    var number2 = requ.query.number2 

    var result = addNumbers(number1,number2)
    resp.json({Statuscode: 200, data: result, message: 'Sucesss'})


})

app.listen(port,()=>{

    console.log("App listening to: http://localhost:"+ port)

})

