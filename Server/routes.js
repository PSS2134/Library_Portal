const express = require("express");
const User = require("./models/userModel");
const Book = require("./models/bookModel");
const router = express.Router();

router.post("/api/signup", async (req, res) => {
  const { name, contact, email, password, course, year, room } = req.body;
  const user_exist = await User.findOne({ email: email });
  if (user_exist) {
    return res.json("user exists");
  } else {
    const user = new User({
      name,
      contact,
      email,
      password,
      course,
      year,
      room,
    });
    await user.save();
    return res.json("new user");
  }
});

router.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  //  console.log(req.body);
  const email_exist = await User.findOne({ email: email });
  console.log(email_exist);
  if (email_exist) {
    const password_correct = await User.findOne({
      email: email,
      password: password,
    });
    // console.log(password_correct);
    if (password_correct) {
      // console.log(password_correct);
      return res.json("user exists");
    } else {
      return res.json("password incorrect");
    }
  } else {
    return res.json("user not found");
  }
});

router.get("/api/login", async (req, res) => {
  const email = req.query.email;
  const user = await User.findOne({ email: email });
  return res.json({ name: user.name });
});

router.post("/api/add", async (req, res) => {
  try{
    const date=new Date().toLocaleDateString();
  const time=new Date().toLocaleTimeString();
  const book=req.body;
  const email=req.query.email;
  // console.log(book);
const checkUser=await Book.findOne({ email: email});
if(checkUser) {
  let count=0;
  checkUser.book.map((singleBook)=>{
       if(singleBook.returned==0)
       {
        count++;
       }
  });
  if(count<2)
  {
    checkUser.book.push({...book,issued:0,returned:0,date:date,time:time,});

    await checkUser.save();
    return res.json({message:'Added Successfully',title:book.name});
  }
  else{
    return res.json({message:'greater than 2'});
  }
        
        

}
else{
  const bookUpdated=[{...book,issued:0,returned:0,date:date,time:time}]
  // console.log(bookUpdated)
  // book.push({issued:0,returned:0,date:date,time:time})
  const bookdata= new Book({email:email,book:bookUpdated});
  await bookdata.save();
  // console.log({message:'new Added',title:book.name});
  res.json({message:'new Added',title:book.name});  
  }
}
  catch(err){
    console.log(err);
  }
})

router.get('/api/profile',async(req,res)=>{
  const email=req.query.email;
  const userData= await User.findOne({email:email});
  const {book}=await Book.findOne({email:email});
  // console.log(book);
  return res.json({userData,book});
})
router.get('/api/admin_issue',async(req,res)=>{
// const userData= await User.find({});
  const book=await Book.find({});
  // console.log(book);
  let arr=[];
  book.map(async(single)=>{
       const {name}=await User.findOne({email:single.email});
       arr.push({...single,name:name});
       console.log(arr);
  })
  return res.json(arr);
})
module.exports = router;
