const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

/// Import Routes
const categoriesRoutes = require('./api/routes/categories');
const productsRoutes = require('./api/routes/products');
const userRoutes = require('./api/routes/users');
const heroRoutes = require('./api/routes/heroes');

//Connect
mongoose.connect('mongodb://demrich:'+ process.env.MONGO_PASS +'@node-rest-shop-shard-00-00-a8cxc.mongodb.net:27017,node-rest-shop-shard-00-01-a8cxc.mongodb.net:27017,node-rest-shop-shard-00-02-a8cxc.mongodb.net:27017/test?ssl=true&replicaSet=node-rest-shop-shard-0&authSource=admin&retryWrites=false'); 


// Enable Uploads
app.use('/uploads',express.static('uploads'));

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Header Config
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if(req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({}); 
  }
  next();
});

// Apply Routes for Backend 
app.use('/categories', categoriesRoutes);
app.use('/products', productsRoutes);
app.use('/user', userRoutes);
app.use('/heroes', heroRoutes);


// Response Handling
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
})

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
});

module.exports = app;