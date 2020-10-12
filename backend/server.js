const express = require("express");
const { products } = require("./data");
const data = require("./data");
const mongoose = require('mongoose')
const app = express();
const userRoute = require("./routes/userRoutes")
const bodyParser = require('body-parser')


const mongodbUrl = process.env.MONGO_DB_URL || "mongodb://localhost/amazon-clone"

mongoose.connect(mongodbUrl , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).catch(error => console.log(error.reason))

const db = mongoose.connection

db.on('open', () => console.log('Connected To MongoDB'))


app.use(bodyParser.json())
app.use('/api/users', userRoute)


app.get("/api/products", (req, res) => {
  try {
    
    res.send(data.products);
  } catch (error) {
    console.log(error)
  }
});


app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id
  let product = data.products.find(product => product._id === productId)
  if(product) {
    

    res.send(product)
  }
  else{
    res.status(404).send({
      message:"Product not found!"
    })
  }
  
})

app.listen(9000, () => {
  console.log("Server started at 9000");
});
