const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000

const { exec } = require("child_process");

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

const fs = require("fs");

//Route that handles login logic
app.post('/login', (req, res) =>{
    var test = req.body.username;
    var test2 = req.body.password;
    fs.writeFile('/Users/luthertran/Desktop/testapp/test.java', test, err => {
        if (err) {
          console.error(err)
        }
        //file written successfully
      })
      exec("java " + "/Users/luthertran/Desktop/testapp/test.java", (error,stdout,stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            res.send(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        // WENN DAS ERGEBNIS EIN STRING IST, GEHT DAS NICHT
        if (`${stdout}` != `Hello World`) {
            res.send("Unexpected output \n Expected output: 5\n Output was: "+ `${stdout}`);
        }
            else {
              res.send(`${stdout}` +  "Test passed")
            }
    });
})

//Route that handles login logic
app.get('/login2', (req, res) =>{
  res.sendFile("/Users/luthertran/Desktop/testapp/client/login2.html")
})

const pt = require("fs");

//Route that handles login logic
app.post('/login2', (req, res) =>{
  var test = req.body.username;
  var test2 = req.body.password;
  fs.writeFile('/Users/luthertran/Desktop/testapp/test.python', test, err => {
      if (err) {
        console.error(err)
      }
      //file written successfully
    })
    exec("python " + "/Users/luthertran/Desktop/testapp/test.python", (error,stdout,stderr) => {
      if (error) {
          console.log(`error: ${error.message}`);
          res.send(`error: ${error.message}`);
          return;
      }
      if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
      }
      // WENN DAS ERGEBNIS EIN STRING IST, GEHT DAS NICHT
      if (`${stdout}` != 4) {
          res.send("Unexpected output \n Expected output: 5\n Output was: "+ `${stdout}`);
      }
          else {
            res.send("Output was: "+`${stdout}` +  ", Test passed")
          }
  });
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

//Route that handles signup logic
app.get('/java_intro', (req, res) =>{
  res.sendFile("/Users/luthertran/Desktop/testapp/client/java_intro.html")
})

//Route that handles signup logic
app.post('/java_intro', (req, res) =>{
console.log(req.body.fullname) 
console.log(req.body.username)
console.log(req.body.password) 
res.send("hallo")
})

//Route that handles signup logic
app.get('/python_intro', (req, res) =>{
  res.sendFile("/Users/luthertran/Desktop/testapp/client/python_intro.html")
})

//Route that handles signup logic
app.post('/python_intro', (req, res) =>{
console.log(req.body.fullname) 
console.log(req.body.username)
console.log(req.body.password) 
res.send("hallo")
})

//Route that handles signup logic
app.get('/java_aufgaben', (req, res) =>{
  res.sendFile("/Users/luthertran/Desktop/testapp/client/java_aufgaben.html")
})

//Route that handles signup logic
app.post('/java_aufgaben', (req, res) =>{
console.log(req.body.fullname) 
console.log(req.body.username)
console.log(req.body.password) 
res.send("hallo")
})

//Route that handles signup logic
app.get('/python_aufgaben', (req, res) =>{
  res.sendFile("/Users/luthertran/Desktop/testapp/client/python_aufgaben.html")
})

//Route that handles signup logic
app.post('/python_aufgaben', (req, res) =>{
console.log(req.body.fullname) 
console.log(req.body.username)
console.log(req.body.password) 
res.send("hallo")
})

//Route that handles signup logic
app.get('/homepage', (req, res) =>{
  res.sendFile("/Users/luthertran/Desktop/testapp/client/homepage.html")
})

//Route that handles signup logic
app.post('/homepage', (req, res) =>{
res.send("hallo")
})

//Start your server on a specified port
app.listen(port, ()=>{
    console.log(`Server is runing on port ${port}`)
})

