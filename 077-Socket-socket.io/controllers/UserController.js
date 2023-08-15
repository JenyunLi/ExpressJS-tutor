const UserService = require("../services/UserService");
const JWT = require("../util/JWT");

const UserController = {
  addUser: async (req, res) => {
    console.log(req.body, req.file);
    // insert into db
    // 创建一𠆤模型(user) 对应数据库的集合(users)
    // user.Create Find Delete Update
    const avatar = req.file ? `/uploads/${req.file.filename}`
      :`/images/default.png`
    const { username, password, age } = req.body;
    await UserService.addUser(username, password, age, avatar)
    res.send({ ok: 1 })
  },
  updateUser: async (req, res) => {
    console.log(req.body, req.params.myid);
    const { username, password, age } = req.body;
    await UserService.updateUser(req.params.myid, username, password, age);
    res.send({ ok: 1 });
  },
  deleteUser: async (req, res) => {
    console.log(req.body, req.params.myid);
    await UserService.deleteUser(req.params.myid);
    res.send({ ok: 1 });
  },
  getUser: async (req, res) => {
    console.log(req.query);
    let { page, limit } = req.query;
    const data = await UserService.getUser(page, limit);
    res.send(data);
  },
  login: async (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;
    const data = await UserService.login(username, password);

    if (data.length === 0) {
      res.send({ ok: 0 });
    } else {
      // 設置token
      console.log(data[0]);
      const token = JWT.generate({
        _id: data[0]._id,
        username: data[0].username,
      }, "1h");
      // token返回在header
      res.header("Authorization", token);
      // 将用户信息存入session{}
      // req.session.user = data[0]; // 設置session对象
      // 默認存在內存中
      res.send({ ok: 1 })
    }
  },
  logout: async (req, res) => {
    req.session.destroy();
    res.send({ ok: 1 })
  }
}

module.exports = UserController