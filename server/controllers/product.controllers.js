const {allcars, Categories}=require('../database-Sequelize/index')

const Allallcars = async(req,res) => {
    try {
    const result=await allcars.findAll();
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const Getallcars=async(req,res) => {
    try {
    const result=await allcars.findOne({where:{id:req.params.id}})
    res.json(result) 
    } catch (error) {
        res.send(error)
    }
}

const GetSellerProd=async(req,res) => {
    try {
    const result=await allcars.findAll({where:{seller_id:req.params.id}},{
        include:{model:Categories}
    });
    res.json(result) 
    } catch (error) {
        res.send(error)
    }
}

const Addallcars = async(req,res) => {
    try {
    const result=await allcars.create(req.body)
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const Updateallcars = async(req,res) => {
    try {
    const result=await allcars.update(req.body,{where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const Deleteallcars= async(req,res) => {
    try {
    const result=await allcars.destroy({where:req.params})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

module.exports={Allallcars,Getallcars,GetSellerProd,Addallcars,Updateallcars,Deleteallcars}