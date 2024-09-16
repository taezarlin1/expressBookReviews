const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(200).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
  return res.status(200).send(JSON.stringify(books, null, 4));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  
  let isbn = parseInt(req.params.isbn);

  return res.status(200).send(books[isbn]);
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  
  let author = req.params.author;
  let bookKeys = Object.keys(books);
  let filterBooks = {};
  for (i of bookKeys){
    if(books[i].author===author){
      filterBooks[i] = books[i]
    }
  }
  return res.status(200).send(filterBooks);
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  let title = req.params.title;
  let bookKeys = Object.keys(books);
  let filterBooks = {};
  for (i of bookKeys){
    if(books[i].title===title){
      filterBooks[i] = books[i]
    }
  }
  return res.status(200).json(filterBooks);
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  let isbn = parseInt(req.params.isbn);
  return res.status(200).json(books[isbn]);
});

module.exports.general = public_users;
