const crypto= require('crypto')

// encrypts the password
function encrypt(key,iv,data){
  const dep= crypto.createCipheriv("aes-128-cbc", key,iv)
  return dep.update(data,'binary', 'hex')+ dep.final("hex")
}

// decrypts the password
function decrypt(key, iv, crypted) {
  let crypt= Buffer.from(crypted, 'hex').toString('binary')
  let dep = crypto.createDecipheriv('aes-128-cbc', key, iv)
  return dep.update(crypt,'binary','utf-8')+dep.final('utf-8')
}

let key= "abcdef1234567890"
let iv= "tbcyef1234567890"

let data="kerwin-aaa"

let crypted= encrypt(key,iv,data)
console.log('加密結果',crypted);

let decrypted= decrypt(key,iv, crypted)
console.log('解密結果', decrypted);