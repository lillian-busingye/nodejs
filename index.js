
//Dependincies
const express = require('express'); // for posting
const mongoose = require("mongoose") // for mongodb
const path = require('path');


require('dotenv').config();

// const registerRoute = require('./routes/registerRoutes')

//Instatiations
const app = express();


//configurations
mongoose.connect(process.env.DATABASE,{
  useNewUrlParser: true,
  useUnifiedTopology: true, 
});

mongoose.connection
  .once("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", err => {
    console.error(`Connection error: ${err.message}`);
 });

 app.set('view engine', 'pug') //setting the view engine to pug
 app.set('views', path.join(__dirname, 'views')) //specifying the directory where the views are found


//middleware
app.use(express.static(path.join(__dirname, 'public'))) //set directory for static files

app.use(express.urlencoded({extended:true}))
// routes
app.get('/register', (req, res) => {
  res.render('register')
})

// app.use('/', registerRoutes);

//This is a route (req is request and res is response )
// app.get('/', (req, res) => {
//     res.send('Homepage! Hello lillian.');
//   });

//   app.get('/about', (req, res) => {
//     res.send('About page! Nice.');
//   }); 




// //   //syntax of a route
// //   app.METHOD(PATH, HANDLER);

// app.get('/path', (req, res) => {
//   res.send("Welcome");
// })

// app.get('/books/:bookId', (req, res) => {
//   res.send(req.params.bookId);
//   console.log(req.params.bookId)
// });

// // app.get('/students/:name', (req, res) => {
// //   res.send("This is my students name " + req.params.name);
// // });

// app.get('/students/:id', (req, res) => {
//   res.send("This is my students id " + req.params.id);
// });

//query params
//under query params in the server we only use / only at the beginning plus no spaces and the first query is preceded by ? and followed by = then &
app.get('/students', (req, res) => {
  res.send("This is class " + req.query.class + "cohort " + req.query.cohort)
})

app.get('/babies', (req, res) => {
  res.send("This is baby " + req.query.name + "age " + req.query.age)
})



app.get('/index', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})
// the get route name must be the same as the post route name
app.get('/loginform', (req, res) => {
  res.sendFile(__dirname + "/login_form.html")
});

app.post("/loginform", (req, res) => {
  // req.body means all the data in our body 
  console.log(req.body)
  // res.redirect("/index")
  res.send("You have logged in.")
})


// For invalid routes
app.get('*', (req, res) => {
  res.send('404! This is an invalid URL.');
});


//Bootstrapping the server
//This should always be the last line in our code.
app.listen(3000, () => console.log('listening on port 3000')); 