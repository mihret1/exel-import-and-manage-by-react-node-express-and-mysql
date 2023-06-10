const { models :{User}}=require('../models/indexx')

const controllers={}

module.exports={
    
    
    create:async(req,res)=>{
        const {itemNo,description,rate,qty,amount} =req.body

        try{
          const myuser= await User.create({
            itemNo,
            description,
            rate,
            qty,
            amount
           })
           res.json({myuser})
        }catch(error){
            res.send('not added to database')
            res.send('something wrong')
        }
    }

}
