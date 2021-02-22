// Require express 
const express =  require('express')
//Require concteDb 
const connectDB = require('./config/connectDB')
const AuthProduct = require('./routes/Product')
const authRouter = require('./routes/auth')
const AuthPersonlise = require('./routes/Personlise')
const AuthFormulaire= require('./routes/formulPersonalier')
const AuthForum= require('./routes/forum')
const Admins = require('./routes/Admin')
const Val = require('./routes/Validation')
const app = express()


app.use(express.json())

connectDB()

app.use('/api/auth',authRouter)
app.use('/api/auth',AuthProduct)
app.use('/api/auth',AuthPersonlise)
app.use('/api/auth',AuthFormulaire)
app.use('/api/auth',AuthForum)
app.use('/api/',Admins)
app.use('/api/',Val)

const port = process.env.PORT || 5000

app.listen(port , (error)=>{
    error ? 
    console.log(error)
    :console.log("the server is runnig on port ",port)
})
