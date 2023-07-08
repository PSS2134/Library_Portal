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
    const date=new Date();
    const issuedate=date.toLocaleDateString();
    const issuetime=date.toLocaleTimeString();
    // const month=date.getMonth();
    // console.log(month);
    // let returndate=new Date().setMonth(month+1);
    // console.log(returndate);
    let dt = new Date();
            let no_of_months = 1;
            dt.setMonth(dt.getMonth() + no_of_months)
             const returndate= dt.toLocaleDateString();
  
    // console.log(returndate);
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
    checkUser.book.push({...book,issued:0,returned:0,issuedate:issuedate,issuetime:issuetime,returndate:returndate});

    await checkUser.save();
    return res.json({message:'Added Successfully',title:book.name});
  }
  else{
    return res.json({message:'greater than 2'});
  }
        
        

}
else{
  const bookUpdated=[{...book,issued:0,returned:0,issuedate:issuedate,issuetime:issuetime,returndate:returndate}]
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
  // console.log(email);
  const userData= await User.findOne({email:email});
  // console.log(userData);
  const resnew=await Book.findOne({email:email});
  // console.log(resnew);
  
  if(resnew)
  {
    const {book}=resnew;
    // console.log("sent data");
    return res.json({userData,book});
   
  }
  else{
    console.log({userData:userData})
    console.log("no sent data");
    return res.json({userData:userData});
    
  }
  // console.log(book);
  
})


router.delete('/api/remove',async(req,res)=>{
 const {email,id}=req.query;
//  console.log(req.query)
//  console.log(email,id);
// console.log(String(id));
 const Bookdetails=await Book.findOne({email:email});
 console.log(Bookdetails);
// console.log(Bookdetails.book);
Bookdetails.book.map(async(singleBook)=>{
  if(singleBook.id==String(id)){
    console.log(singleBook);
    const index=Bookdetails.book.indexOf(singleBook);
    console.log(index);
    if (index > -1) { // only splice array when item is found
      Bookdetails.book.splice(index, 1); 
      console.log("deleted Successfully");
      // 2nd parameter means remove one item only
    }
  }
   
})
await Bookdetails.save();
 
  res.json("deleted")

})
// router.get('/api/admin_issue',async(req, res_)=>{
 
//   const res

// })
module.exports = router;
