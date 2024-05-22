const usersRoute = require('express').Router();
const { AllUsers,UpdateUser,DeleteUser } = require('../controllers/users.controller');
const{signUp}=require('../controllers/auth.controller')

usersRoute.post('/signup',signUp)
usersRoute.get('/users',AllUsers)
usersRoute.put('/users/:id',UpdateUser)
usersRoute.delete('/users/:id',DeleteUser)


module.exports=usersRoute;