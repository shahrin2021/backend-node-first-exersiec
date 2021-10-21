const express= require('express');
const cors =require('cors')
const app = express();
const port =5000;

app.use(cors())
app.use(express.json())
app.get('/',(req, res)=>{
    res.send('i am excited to learn node and express wow fanstactic')
});
const users = [
    {id:0,name:'shochorita',email:'shochorita@gmail.com',phone:0174523689},
    {id:1,name:'shahrin',email:'shahrin@gmail.com',phone:0174523689},
    {id:2,name:'srabonti',email:'srabonti@gmail.com',phone:0174523689},
    {id:3,name:'shabana',email:'shabana@gmail.com',phone:0174523689},
    {id:4,name:'kobita',email:'kobita@gmail.com',phone:0174523689}
];
// query parameter
app.get('/user', (req, res)=>{
    // const search= req.query;
    const search = req.query.search;
    if(search){
            const searchResult= users.filter(user=> user.name.toLocaleLowerCase().includes(search));
            res.send(searchResult)
    }else{
        res.send(users)
    }
    
});

app.post('/user', (req , res) => {
    const newUser = req.body;
    newUser.id=users.length;
    users.push(newUser)
    console.log('heating the post',req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)


})



// dynamic api 
app.get('/user/:id',(req,res) => {
    const id= req.params.id;
    const user= users[id]
    res.send(user)
});

app.get('/fruits', (req ,res)=>{
    res.send('anek amm')
});

app.get('/fruits/mangoes/fazli',(req, res) => {
res.send('tok amm')
});


;
app.listen(port ,()=>{
    console.log('welcome to my second node ' ,port)
})