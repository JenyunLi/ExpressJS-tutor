const UserModel= require('../models/userModel');

const userService={
  loging:(username, password) => { 
    return UserModel.find({username, password})
   }
}