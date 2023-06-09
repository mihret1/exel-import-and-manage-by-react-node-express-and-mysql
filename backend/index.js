const express=require('express')

const app=express()
const PORT=6000

const db=require('./models')

// (async ()=>{
//     await db.sequelize.sync()
// })();

const dbb=async()=>{
    await db.sequelize.sync()

}

dbb()


app.listen(PORT,()=>{console.log(`server is  runing on port ${PORT}`)})