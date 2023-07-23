const User=require('../models/UserModel')

const user = async (req, res, next) => {
    try {
      const newUser = await User.create({
        name:req.body.name,
        cin:req.body.cin,
      })
      
      console.log(newUser);
      res.status(200).json("user added ");
     
    } catch (error) {
      console.error("Error Message: " + error);
      next(error); 
    }
  }
  const list = async (req, res, next) => {
    try {
     const users = await   User.find();
      res.status(200).json(users)
    } catch (error) {
      console.error(error);
      res.status(500).send("Error retrieving message list");
    }
  };
  module.exports={user,list};
