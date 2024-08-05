import express from "express";

//set port 
const PORT = 3000;
const app = express();
const urlprefix = '/api';

app.use(express.json());
app.get('/',(req,res)=>{
    res.send ('I GOT THIS')
})


app.get('/test',(req,res)=>{
    res.send('testing the /test endpoint')
})

app.get(urlprefix+'/orders',(req,res)=>{
    const orders = [

        {
            id:"1",
            name:"orange"
        },
        {
            id:"1",
            name:"orange"
        },
        {
            id:"1",
            name:"orange"
        },
        {
            id:"2",
            name:"Apple"
        },

        {
            id:"3",
            name:"Pear"
        },
    ]
    res.json(
        {
            message:"Fruits",
            orders:orders
        },
    )
        }
    
)



app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
});