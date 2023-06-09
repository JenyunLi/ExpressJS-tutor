const fs=require('fs');

//创建目录
try {
  fs.mkdirSync("./avatar")
  //阻塞後面代碼執行
  fs.writeFileSync("./avatar/1.txt","大家奋斗", "utf-8")
  fs.writeFileSync("./avatar/2.txt","大家奋斗", "utf-8")
  fs.writeFileSync("./avatar/3.txt","大家奋斗", "utf-8")
} catch (error) {
  console.log(error);
}

//     console.log("目录已存在");
