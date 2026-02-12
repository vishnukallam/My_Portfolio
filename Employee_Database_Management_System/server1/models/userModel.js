const moongose = require('mongoose')
const userSchema=new moongose.Schema({
    userId:{type:Number,required:true,unique:true},
    fullName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:Number,required:true,}
})

module.exports=moongose.model('User',userSchema)