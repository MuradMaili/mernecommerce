const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const http=require('http')
const app=express()
const userRoute=require('./routes/userRoute')
const productRoute=require('./routes/productRoute')
const imageRoutes=require('./routes/imageRoutes')
const server=http.createServer(app)
const {Server} = require('socket.io')
const io = new Server(server, {
    cors: '*',
    methods: '*'
  })

app.use(cors())
app.use(express.json())
app.use("/api/users",userRoute)
app.use('/api/products',productRoute)
app.use('/api/images',imageRoutes)
require('dotenv').config()
const uri="mongodb://127.0.0.1:27017"
mongoose.connect(uri,{useNewUrlParser: true})
.then(()=>console.log("connected to mongo",))

port=8000;
server.listen(port,()=>{
    console.log("backend connected:",port)
})
app.set('socketio', io);