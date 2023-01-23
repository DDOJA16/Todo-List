const userDatabase = require('../Database');
const jwt = require("jsonwebtoken");


// id,pw 입력해서 로그인요청을 하면 서버에서는 사용자로부터 받은 정보를 가지고 access token을 발급해줘야함 -> req body를 parsing해온다
// parsing해온 정보를 토대로 현재 Database에 저장되어 있는 사용자 정보를 필터링을 거쳐서 어떤 유저가 로그인했는지 특정을 할 수 있어야한다
const login = (req, res, next) => {
  const {email, password} = req.body;

  const userInfo = userDatabase.filter(item => {
    return item.email === email;
  })[0]
  console.log(userInfo);
  next()
}

const accesstoken = (req, res) => {
  
}

const refreshtoken = (req, res) => {
  
}

const loginsuccess = (req, res) => {

}

const logout = (req, res) => {

}

module.exports = {
  login,
  accesstoken,
  refreshtoken,
  loginsuccess,
  logout,
}