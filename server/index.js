const express=require("express")
const cors=require("cors")
const bodyparser=require("body-parser")
const database=require("mysql")

const connect=express()
connect.use(cors())
connect.use(bodyparser.json())
connect.use(express.json())
connect.use(express.static('public'))
connect.use(bodyparser.urlencoded({extended:true}))

let databaseconnection=database.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"Boo#1234",
    database:"emp"
})

databaseconnection.connect(function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("database is connected")
    }
})

connect.post('/inserted',(request,response)=>{
    let {name,phoneno,city,email,designation,password}=request.body
    let sql='insert into svj(name,phoneno,city,email,designation,password)values(?,?,?,?,?,?)'
    databaseconnection.query(sql,[name,phoneno,city,email,designation,password],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
        }
    })
})

connect.post('/login',(request,response)=>{
    let {email,password}=request.body
    let sql='select * from svj where email=?'
    databaseconnection.query(sql,[email],(error,result)=>{
        if(error){
            response.send({"status":"empty_set"})
        }
        else if(result.length>0){
            let dbusername=result[0].email
            let dbpassword=result[0].password
            if(dbusername===email && dbpassword===password){
                response.send({"status":"success"})
            }
            else{
                response.send({"status":"invalid_user"})
            }
        }
        else{
            response.send({"status":"error"})
        }
    })
})

connect.get('/getdata',(request,response)=>{
    let sql='select * from svj'
    databaseconnection.query(sql,(error,result)=>{
        if(error){
            response.send(error)
            console.log(error)
        }
        else{
            response.send(result)
        }
    })
})

connect.listen(1018,()=>{
    console.log("Your server is running in port 1018")
})