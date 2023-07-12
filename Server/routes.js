const express = require("express");
const User = require("./models/userModel");
const Book = require("./models/bookModel");
const Admin = require("./models/adminbookModel");
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
  const date = new Date();
  const issuedate = date.toLocaleDateString();
  const issuetime = date.toLocaleTimeString();
  // const month=date.getMonth();
  // console.log(month);
  // let returndate=new Date().setMonth(month+1);
  // console.log(returndate);
  let dt = new Date();
  let no_of_months = 1;
  dt.setMonth(dt.getMonth() + no_of_months);
  const returndate = dt.toLocaleDateString();

  // console.log(returndate);
  const book = req.body;
  const email = req.query.email;
  const bookname = book.name;
  const genre = book.genre;
  const id = book.id;
  const { name } = await User.findOne({ email: email });
  const ifPresent = await Admin.findOne({});
  console.log(ifPresent);

  // console.log(book);
  const checkUser = await Book.findOne({ email: email });
  if (checkUser) {
    console.log("hi");
    let count = 0;
    checkUser.book.map((singleBook) => {
      if (singleBook.return_requested == 0) {
        count++;
      }
    });
    console.log(count);
    if (count < 2) {
      console.log("hemlo");
      checkUser.book.push({
        ...book,
        issued: 0,
        returned: 0,
        issuedate: issuedate,
        issuetime: issuetime,
        returndate: returndate,
        return_requested: 0,
      });

      await checkUser.save();
      console.log(returndate);

      const { allbooks } = ifPresent;
      allbooks.push({
        email: email,
        username: name,
        bookname: bookname,
        genre: genre,
        bookid: id,
        issued: 0,
        returned: 0,
        issuedate: issuedate,
        issuetime: issuetime,
        returndate: returndate,
        return_requested: 0,
      });
      await ifPresent.save();
      console.log("pushed");
      return res.json({ message: "Added Successfully", title: book.name });
    } else {
      console.log("hlo");
      return res.json({ message: "greater than 2" });
    }
  } else if (!checkUser) {
    const bookUpdated = [
      {
        ...book,
        issued: 0,
        returned: 0,
        issuedate: issuedate,
        issuetime: issuetime,
        returndate: returndate,
        return_requested: 0,
      },
    ];
    // console.log(bookUpdated)
    // book.push({issued:0,returned:0,date:date,time:time})
    const bookdata = new Book({ email: email, book: bookUpdated });
    await bookdata.save();
    if (!ifPresent) {
      const adminBook = new Admin({
        allbooks: [
          {
            email: email,
            username: name,
            bookname: bookname,
            genre: genre,
            bookid: id,
            issued: 0,
            returned: 0,
            issuedate: issuedate,
            issuetime: issuetime,
            returndate: returndate,
            return_requested: 0,
          },
        ],
      });
      await adminBook.save();
      console.log("Book saved to admin");
    } else {
      const { allbooks } = ifPresent;
      allbooks.push({
        email: email,
        username: name,
        bookname: bookname,
        genre: genre,
        bookid: id,
        issued: 0,
        returned: 0,
        issuedate: issuedate,
        issuetime: issuetime,
        returndate: returndate,
        return_requested: 0,
      });
      await ifPresent.save();
      console.log("pushed");
    }

    // console.log({message:'new Added',title:book.name});
    return res.json({ message: "new Added", title: book.name });
  }
});

router.get("/api/profile", async (req, res) => {
  const email = req.query.email;
  // console.log(email);
  const userData = await User.findOne({ email: email });
  // console.log(userData);
  const resnew = await Book.findOne({ email: email });
  // console.log(resnew);

  if (resnew) {
    const { book } = resnew;
    // console.log("sent data");
    return res.json({ userData, book });
  } else {
    console.log({ userData: userData });
    console.log("no sent data");
    return res.json({ userData: userData });
  }
  // console.log(book);
});

router.delete("/api/remove", async (req, res) => {
  const { email, id } = req.query;
  //  console.log(req.query)
  //  console.log(email,id);
  // console.log(String(id));
  const Bookdetails = await Book.findOne({ email: email });
  //  console.log(Bookdetails);
  // console.log(Bookdetails.book);
  let a = true;
  Bookdetails.book.map(async (singleBook) => {
    if (a == true) {
      if (singleBook.id == String(id)) {
        // console.log(singleBook);

        const index = Bookdetails.book.indexOf(singleBook);
        // console.log(index);
        if (index > -1) {
          // only splice array when item is found
          Bookdetails.book.splice(index, 1);
          console.log("deleted Successfully from bookModel");
          a = false;
          // 2nd parameter means remove one item only
        }
      }
    }
  });
  await Bookdetails.save();

  const resadmin = await Admin.findOne({});
  console.log(resadmin);
  resadmin.allbooks.map(async (singleBook) => {
    // console.log(singleBook.bookid);
    if (singleBook.bookid == String(id)) {
      console.log(singleBook);
      const index = resadmin.allbooks.indexOf(singleBook);
      console.log(index);
      if (index > -1) {
        // only splice array when item is found
        resadmin.allbooks.splice(index, 1);
        console.log("deleted Successfully from admin");
        // 2nd parameter means remove one item only
      }
    }
  });
  await resadmin.save();

  console.log("saved");

  res.json("deleted");
});
router.get("/api/admin", async (req, res) => {
  const { allbooks } = await Admin.findOne({});
  console.log("get request received");
  return res.json(allbooks);
});

router.put("/api/admin/:id", async (req, res) => {
  console.log(req.query);
  const object_id = req.params.id;
  let email, book_id;
  const resadmin = await Admin.findOne({});
  if (req.query.action == "issued") {
    console.log("hello...");
    resadmin.allbooks.map((singleAdminBook) => {
      if (singleAdminBook._id == object_id) {
        (email = singleAdminBook.email), (book_id = singleAdminBook.bookid);
        singleAdminBook.issued = 1;
        singleAdminBook.issuedate = new Date().toLocaleDateString();
      }
    });
    await resadmin.save();

    const resbookmodel = await Book.findOne({ email: email });
    resbookmodel.book.map((singleBook) => {
      if (singleBook.id == String(book_id) && !singleBook.issued) {
        singleBook.issued = 1;
        singleBook.issuedate = new Date().toLocaleDateString();
      }
    });
    await resbookmodel.save();
    console.log("updated");
    return res.json("issued");
  } else {
    resadmin.allbooks.map((singleAdminBook) => {
      if (singleAdminBook._id == object_id) {
        (email = singleAdminBook.email), (book_id = singleAdminBook.bookid);
        singleAdminBook.returned = 1;
        // singleAdminBook.issuedate=new Date().toLocaleDateString();
      }
    });
    await resadmin.save();
    const resbookmodel = await Book.findOne({ email: email });
    resbookmodel.book.map((singleBook) => {
      if (singleBook.id == String(book_id) && !singleBook.returned) {
        singleBook.returned = 1;
        // singleBook.issuedate=new Date().toLocaleDateString();
      }
    });
    await resbookmodel.save();
    console.log("updated");
    return res.json("returned");
  }
  // console.log(resadmin);
});
router.put("/api/image", async (req, res) => {
  const { email, picture } = req.body;
  console.log(picture);
  const imageUpdate = await User.findOne({ email: email });
  console.log(imageUpdate);
  imageUpdate.picture = picture;
  imageUpdate.save();
  return res.json("image Uploaded succesfully");
});

router.post("/api/books", async (req, res) => {
  const email = req.query.email;
  const findUser = await Book.findOne({ email: email });
  console.log(findUser);
  let cnt;
  findUser.book.map((singleBook) => {
    if (singleBook.issued === 1) cnt++;
  });
  if (cnt == 2) return res.json("2");
  else if (cnt == 1) return res.json("1");
});

router.put("/api/return", async (req, res) => {
  const { email, id } = req.query;
  const returndate = new Date().toLocaleDateString();
  console.log(returndate);
  //  console.log(req.query)
  //  console.log(email,id);
  // console.log(String(id));
  const Bookdetails = await Book.findOne({ email: email });
  //  console.log(Bookdetails);
  // console.log(Bookdetails.book);
  Bookdetails.book.map(async (singleBook) => {
    if (singleBook.id == String(id)) {
      // console.log(singleBook);
      singleBook.return_requested = 1;
      singleBook.returndate = returndate;
    }
  });
  await Bookdetails.save();

  let expected;
  const resadmin = await Admin.findOne({});
  console.log(resadmin);
  resadmin.allbooks.map(async (singleBook) => {
    if (singleBook.bookid == String(id) && singleBook.email == email) {
      singleBook.return_requested = 1;
      singleBook.returndate = returndate;
    }
  });
  await resadmin.save();

  console.log("returned");

  res.json("returned");
});

router.get("/api/return", async (req, res) => {});
router.post("/api/order", async (req, res) => {
  const email = req.query;
  const Formdata = req.body;
  const newOrder = new Order({
    name: Formdata.name,
    genre: Formdata.genre,
    author: Formdata.author,
  });
  await newOrder.save();
  res.json("new Order");
});
module.exports = router;
