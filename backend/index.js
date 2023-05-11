var express=require('express');
var mysql=require("mysql");
var app= express();
var connection=require('./database')
var cors=require('cors');

app.get('/', function(req, res){
    res.send('Hey');
})
app.get('/data', function(req,res){
    connection.query('SELECT * from linktable', 
    (error,result)=>{
        if(error){
            return res.json(error);
        }
        return res.json(result);
    }
    )
})
app.use(cors());
app.use(express.json());

app.post('/api/data',(req,res)=>{
    const{link, no_clicks, date}=req.body;

    connection.query('INSERT INTO linktable (LinkType, NoOfClicks, Time) VALUES (?,?,?)',
    [link, no_clicks,date], 
    (error, data)=>{
        if(error){
            console.log("backend error", error)
        }
        res.sendStatus(200)
    }
    
    )
})

app.listen(5001, function(){
    console.log('App listening on port 5001');
    
})