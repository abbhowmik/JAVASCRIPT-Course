console.log("This is tutorial 32");
// create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)
class library {
  constructor(booklist) {
    this.booklist = booklist;
    this.issuedBooks = {};
  }
  getBooksList() {
    this.booklist.forEach((element) => {
      console.log(element);
    });
  }

  issueBook(bookname, user) {
    if (this.issuedBooks[bookname] == undefined) {
      this.issuedBooks[bookname] = user;
      console.log("success");
    } else {
      console.log("This book is already issued");
    }
  }

  returnBook(bookname) {
    delete this.issuedBooks[bookname];
    console.log("returning success");
  }
}

lib = new library(["math", "physics", "computer"]);
lib.getBooksList();
lib.issueBook("math", "ashis");
//can't be issued as he issued the same book before
// lib.issueBook("math", "ashis");
lib.returnBook("math");
lib.issueBook("math", "ashis");
lib.getBooksList();
