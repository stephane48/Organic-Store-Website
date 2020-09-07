const mongoose= require('mongoose');
mongoose.connect('mongodb+srv://stephane48:Jatravas48*@senecaweb.uvdbz.mongodb.net/web322_week8?retryWrites=true&w=majority',{useNewUrlParser:true},(err)=>{
    if (!err) {
        console.log('MongoDB connected');
    } else {
        console.log('error: '+err);
    }
});
require('./order.model');