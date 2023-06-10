const express=require('express')
const tableRoute=require('./routes/tableRoute')
const app=express()
const PORT=6000
const db=require('./models')
const cors=require('cors')
// (async ()=>{
//     await db.sequelize.sync()
// })();


app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use('/table',tableRoute)
const dbb=async()=>{
    await db.sequelize.sync()

}


dbb()

app.listen(PORT,()=>{console.log(`server is  runing on port ${PORT}`)})



// const express=require('express')
// const app=express()
// const PORT=6000
// const mysql=require('mysql')
// const xlsx=require('xlsx')
// const dbConfig=require('./config/db-config')

// app.use(express.json())

// const db=mysql.createConnection({
//     host:dbConfig.HOST,
//     user:dbConfig.USER,
//     password:dbConfig.PASSWORD,
//     database:dbConfig.DATABASE

// })


// app.listen(PORT,()=>{console.log(`server is  runing on port ${PORT}`)})