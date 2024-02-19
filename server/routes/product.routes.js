const allcarsRouter = require('express').Router();
const {Allallcars,Getallcars,GetSellerProd,Addallcars,Updateallcars,Deleteallcars} = require('../controllers/product.controllers');



allcarsRouter.get('/allcarss',Allallcars)
allcarsRouter.get('/allcarss/:id',Getallcars)
allcarsRouter.get('/seller/allcarss/:id',GetSellerProd)
allcarsRouter.post('/allcars',Addallcars)
allcarsRouter.put('/allcars/:id',Updateallcars)
allcarsRouter.delete('/allcars/:id',Deleteallcars)


module.exports=allcarsRouter;