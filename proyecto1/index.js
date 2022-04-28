//imports 
import express from "express";
import  config  from './config/index.config.js'


//settings 
const app = express();
let users = []

//middlewares
app.use(express.json())

//routes
app.get("/", (req, res) => {
  return res.json(users);
});

app.post('/', (req,res)=>{
  const user = req.body
  users.push(user)

  return res.status(201).json(users)
})

app.put('/:id', (req,res)=>{
  const {body,params:{id}} = req

  users = users.map(user=>{
    if(user.id === id){
      return body
    }else{
      return user
    }


  })
  

  return res.status(201).json(users)
})

app.delete('/:id', (req,res)=>{
  
  const id = req.params.id
  users = users.filter(user=> id !== user.id)


  return res.json(users)
})




//initializing server
app.listen(process.env.PORT, () => {
  console.log(`server on: http://localhost:${process.env.PORT}`);
});
