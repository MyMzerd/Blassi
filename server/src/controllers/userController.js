const User = require('../models/userModel');

//Add user addUser
exports.addUser = async (req, res, next)=>{
  try{
    const newUser = new User({
      firstName : req.body.firstName,
      lastName : req.body.lastName,
      email : req.body.email,
      password : req.body.password,
      profile : {
        adress : req.body.adress,
        city : req.body.city,
        telephone : req.body.telephone,
      }
    });

    res.status(200).json(newUser);
    console.log('Added successfully');
  }catch(error){
    console.log("error", error.message)
    res.status(500).json({message: "Internal server error"})
  }
}

//Get users

exports.getUsers = async (req, res, next) => {
  try{
    const users = await User.find({});
    res.status(200).json(users);
  } catch(error) {
    console.log("error", error.message);
    res.status(500).json({message :"Internal server error"})
  }
}


//Get a single user
exports.getUserById = async (req, res, next)=>{
  try{
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      console.log('User not found!');
      return res.status(404).json({message :"User Not Found!"});
    }
    res.status(200).json(user);

  }catch(error){
    console.log("error", error.message)
    res.status(500).json({message : "Internal server error"})
  }
}
// Update user
// delete user 



// const adduser =  async (req,res) =>{
//   // res.send('hi');
//     const  newUser = new User({
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password,
//       });
  
//       res.json(newUser);
//     await newUser.save()
 
//     .then((user) => console.log("User created succesfully: ", user))
//     .catch((error) => {
//         res.json(error.message),
//         console.log("Error creating user: ", error)});


// } 


// const findall =  async (req,res)=>{
//     const users = await User.find({});
//     res.json(users);
//     console.log(users);
  
//   // .then((users) => console.log(users))
//   // .catch((error) => console.log("Error fetching users: ", error));
// }

// const findbyid = async (req,res) =>{
//   try{

//     const userid = req.params.id;

//     const users = await User.findById(userid);
//     res.json(users);
//   } catch {
//     console.error("Error finding user:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
 
// }
// const updateone = async (req, res) => {
//   try {
//     // Extracting the user ID from the request parameters
//     const userid = req.params.id;

//     // Updating the user information using the Mongoose model (User)
//     const updateuser = await User.findByIdAndUpdate(
//       userid,
//       { $set: { email: "user@arkx.group", age: 20 } },
//       // { new: true } // To get the updated document as the result
//     );

//     // Sending the updated user information as a JSON response
//     res.json(updateuser);
//   } catch (error) {
//     // Handling errors, if any
//     console.error("Error updating user:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };


// const deleteone = async (req,res) =>{
//   try {
//   const userid = req.params.id;

//   const deleduser=  await User.findOneAndDelete(userid)
//   // .then((user) => {
//   //   if (user) console.log("User deleted successfully: ", user);
//   //   else console.log("User not found");
//   // })
//   res.json(deleduser);
//   } catch(error){
//   console.log("Error deleting user: ", error);
//   res.status(500).json({ error: "Internal Server Error" });
//   }

// }

// module.exports = {
//     adduser,
//     findall,
//     findbyid,
//     updateone,
//     deleteone,
// }
  