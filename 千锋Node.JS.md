<!-- 爬虫 -->
- npm i cheerio
<!-- 安裝生成器 -->
npx express-generator
<!-- 生成器 以ejs為模板 -->
express myapp --view=ejs

<!-- mongoDB -->
mongod.exe --dbpath=E:\db
<!-- help査看命令提示 -->
help
db.help()
db.test.help()
db.test.find().help()
<!-- 創建資料庫/切换数据库 -->
use kerwin_test
<!-- 查看使用中資料庫 -->
db/db.getName()
<!-- 顯示資料庫 -->
show dbs
<!-- 看当前DB版本 -->
db.version()
<!-- 查看当前DB的链接机地址 -->
db.getMongo()
<!-- 創建集合 -->
db.createCollection("users")
- 刪除当前資料庫
db.dropDatabase()
- 刪除news集合
db.news.drop()

<!-- 得到指定名称的聚集集合 -->
db.getCollection("account");
db.users.find()
db.users.find({username:"kerwin", age:100})
<!-- 正則表達式 -->
db.users.find({username:/k/})
<!-- 以k結尾 -->
db.users.find({username:/k$/})
<!-- 只显示username -->
db.users.find({}, {username:1})
<!-- 不显示_id -->
db.users.find({}, {username: 1, _id: 0})
<!-- 以age排序 -->
db.users.find({}).sort({age: 1})
<!-- 以age排倒序 -->
db.users.find({}).sort({age: -1})
<!-- 査询 age = 22的记录 -->
db.users.find({age: {$gt: 22}});
<!-- 査询 age < 22的记录 -->
db.users.find({age: {$lt: 22}});
<!-- 査询 age >= 25的记录 -->
db.users.find({age: {$gte: 25}});
<!-- 査询 age <= 25的记录 -->
db.users.find({age: {$lte: 25}});
<!-- 得到当前db的所有聚集集合 -->
db.getCollectionNames()
<!-- 显示当前db所有聚集的状态 -->
db.printCollectionStats();
<!-- 创建聚集集合 -->
db.users.save({username:"kerwin", age:100})
db.users.save([{username:"tiechui", age:28},{username:"xiaoming", age:18}])
<!-- 刪除 -->
db.users.remove({myage:100})
<!-- 全部刪除 -->
db.users.remove({})
<!-- 更新會刪除其它欄位 -->
db.users.update({username:"kerwin"}, {age:200})
db.users.update({age:200}, {$set:{username:"kerwin"}})
<!-- 更新指定欄位 -->
db.users.update({username:"tiechui"}, {$set:{age:288}})
<!-- 更新欄位加值 -->
db.users.update({username:"xiaoming"}, {$inc:{age:20}})
db.users.update({username:"xiaoming"}, {$inc:{age:-10}})
<!-- 査询前5条数据 -->
db.userlnfo.find().limit(5);
相当于：select top 5 * from userlnfo;
<!-- 査询10条之後的数据 -->
db.userlnfo.find().skip(10);
祖当于：select ‘ from userlnfo where id not in ( select top 10 * from userlnfo
)；
<!-- 查询在5-10之间的数据 -->
db.userlnfo.find().skip(5).limit(5);
<!-- or查询 -->
 db.userlnfo.find({$or：[{age：22}, {age：25}]});
相当于：select * from userlnfo where age = 22 or age = 25;
<!-- 查询第一条数据 -->
db.userlnfo.findOne()；
相当于：selecttop 1 * from userlnfo;
db.userlnfo.find().limit(1);
<!-- 查询某个结果集的記录条数 -->
db.userlnfo.find({age： {$gte： 25}}).count()；
相当于：select count(*) from userlnfo where age >= 20;

# 安裝Mongoose
- npm i mongoose
# session
- npm i express-session
# session存入mongo
- npm i connect-mongo
- npm i jsonwebtoken
# multipart/form-data
- npm i --save multer
# apidoc
- npm i -g apidoc
- apidoc -i .\routes\ -o .\doc

- koa-router
- koa-static
- koa-bodyparser
- koa-views <!-- for ejs module -->
- koa-session-minimal
- npm i --save @koa/multer multer