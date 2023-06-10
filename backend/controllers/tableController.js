const { models :{Table}, models}=require('../models/index')

// const controllers={}


    
 const  create=async(req,res)=>{
        datas={
            itemNo:req.body.itemNo,
            description:req.body.description,
            rate:req.body.rate,
            qty:req.body.qty,
            amount:req.body.amount
        }

        try{
          const mytable= await Table.create(datas)
           res.status(200).json(mytable)
           console.log(mytable)
        }catch(error){
            res.send('not added to database')
            res.send('something wrong')
        }
    

}


const getAll=async(req,res)=>{
    let table=await Table.findAll({})
    res.status(200).send(table)
}


const updateTable=async(req,res)=>{
  let id=req.params.id
   const table= await Table.update(req.body,{where:{id:id}})
    res.status(200).json(table)

}


const deleteTable=async(req,res)=>{
    let id=req.params.id
    await Table.delete({where:{id:id}})
    res.status(200).json({msg:'deleted'})


}

module.exports={create,getAll,deleteTable,updateTable}





// const readXlsxFile =require ('read-excel-file/node')
// const writeXlsxFile = require('write-excel-file/node')

// const fs=require('fs')
// const { FLOAT } = require('sequelize')
// const { table } = require('console')


// const schema = [
//     {
//       column: 'ItemNo',
//       type: FLOAT,
//       value: table => table.name
//     },
//     {
//       column: 'Date of Birth',
//       type: Date,
//       format: 'mm/dd/yyyy',
//       value: student => student.dateOfBirth
//     },
//     {
//       column: 'Cost',
//       type: Number,
//       format: '#,##0.00',
//       value: student => student.cost
//     },
//     {
//       column: 'Paid',
//       type: Boolean,
//       value: student => student.paid
//     }
//   ]



// readXlsxFile('Taskfile.xlsx')
// .then((rows)=>{console.log(rows)})




// // readXlsxFile(fs.createReadStream('Taskfile.xlsx'))
// //  .then((row)=>{console.log(row)})







