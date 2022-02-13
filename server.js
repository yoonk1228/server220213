const express = require('express')
const nunjucks = require('nunjucks')
const router = require('express-session')
const app = express()

app.set('view engine','html')
nunjucks.configure('views',{express:app})

app.get('/',(req,res)=>{
  console.log("'/'로 get 요청")
  res.render('index')
})

app.listen(3000,()=>{
  console.log('server220213 시작!')
})