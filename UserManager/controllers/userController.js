// 先從 model 引入 todos 資料
const  userService= require('../services/UserService');

const userController = {
  getUser: async(req, res) => {
    console.log(req.query);
    const {page,limit} = req.query
    const data= await userService.getUser(page,limit)
    res.send(data)
  },
  login: async(req, res) => {
    const {username,password} = req.body
    const data= await userService.login(username,password)
    if (data.length===0) {
      res.send({
        ok:0
      })
    }
    else{
      res.send({
        ok:1
      })      
    }
  }
};