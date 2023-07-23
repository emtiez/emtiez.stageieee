const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userRouter = require('./routes/user');

app.use(express.json());
app.use('/', userRouter);

mongoose.connect('mongodb://127.0.0.1:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
})
.catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});
