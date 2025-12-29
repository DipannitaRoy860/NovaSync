const User = require("../models/user");
const bcrypt = require("bcrypt");
exports.signup = async(req,res)=>{
  try{
    console.log("1.Controller reached");
  const{name, email, password} = req.body;
  console.log("2.Finding user..");
  const existingUser = await
  User.findOne({email});
  console.log("3.Existing user check done");
  if (existingUser) {
    console.log("4.User exist");
    return res.status(400).json({error:"Email already registered"});
  }
  console.log("5.Hashing password...");
  const hashedPassword = await
  bcrypt.hash(password, 10);
console.log("6.Creating user..");
  const newUser= new User({
    name,
     email, 
     password:hashedPassword,
  });
  console.log("7.Saving user..");
  await newUser.save();
  console.log("8.User saved successfully");
  return res.status(201).json({message: "User registered", user:newUser});
  
}catch(error) {
  console.error("Error in signup:",error.message);
  res.status(500).json({error:"Cannot save user"});
}
};
exports.login = async (req,res) =>{
  try{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user) return res.status(400).json({error:"User not found"});
    const isMatch = await
    bcrypt.compare(password,user.password);
    if(!isMatch) return res.status(400).json({error:"Invalid password"});
    res.json({message:"Login successful",user});
  }
  catch(error) {
    console.error("Error in login:",error.message);
    res.status(500).json({error:"Login failed"});
  }
};
