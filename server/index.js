const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000



// We are using our packages here
app.use( bodyParser.json() );       // to support JSON-encoded bodies

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
 extended: true})); 
app.use(cors())

//You can use this to check if your server is working
app.get('/', (req, res)=>{
res.send("Welcome to your server")
})


//Route that handles login logic
app.get('/login', (req, res) =>{
    res.sendFile("/Users/luthertran/Desktop/testapp/client/login.html")
})



//Route that handles login logic
app.post('/login', (req, res) =>{
    var test = req.body.username;
    console.log(req.body.username)
    console.log(req.body.password) 
    res.send("SIUUUU")
})

//Route that handles signup logic
app.get('/signup', (req, res) =>{
    res.sendFile("/Users/luthertran/Desktop/testapp/client/signup.html")
})

//Route that handles signup logic
app.post('/signup', (req, res) =>{
console.log(req.body.fullname) 
console.log(req.body.username)
console.log(req.body.password) 
res.send("hallo")
})

//Start your server on a specified port
app.listen(port, ()=>{
    console.log(`Server is runing on port ${port}`)
})

