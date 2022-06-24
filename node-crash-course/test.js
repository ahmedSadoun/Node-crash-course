const express = require('express')
const app = express();
const Blog=require('./model/blog')
app.use(express.json())
const mongoose=require('mongoose')
const dbURI='mongodb+srv://ahmed_saadoun:Mohands-2016@cluster0.tltlu.mongodb.net/node_tuts?retryWrites=true&w=majority'
mongoose.connect(dbURI).then(()=>console.log('connected to mongo db ...'), app.listen(3000) , console.log('listening to port 3000...')
)
    .catch((err)=>console.log(err))
    
app.get('/add.blog',(req, res)=>{
    const blog=new Blog({
        title : 'new blog',
        snippet:'about my new blog',
        body :'body of my new blog'
        });
    blog.save().then((result)=>{
        res.send(result);
    }).catch((err)=>{
        res.send(err)
    })

})



