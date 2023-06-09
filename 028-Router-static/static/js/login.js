var ologin = document.querySelector("#login")
var ologin_post = document.querySelector("#login_post")
var username = document.querySelector("#username")
var password = document.querySelector("#password")

ologin.onclick = () => {
  // get請求
  fetch(`/api/login?username=${username.value}&password=${password.value}`)
    .then(res => res.json())
    .then(res => {
      console.log(res);
    })
}

ologin_post.onclick = () => {
  // get請求
  fetch(`/api/loginpost`, {
    method: "POST",
    body: JSON.stringify({
      username:username.value,
      password:password.value
    }),
    headers:{
      "Content-Type":"application/json"
    }
  }).then(res => res.json())
    .then(res => {
      console.log(res);
    })
}