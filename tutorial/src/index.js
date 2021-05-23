import React from 'react';
import ReactDOM from 'react-dom';
import {books} from "./books";
import Book from "./Book";
//CSS
import "./index.css"
//set up vars
//3:25

function BookList(){
  return (
    <section className="bookList">
      {books.map(book => {
        return (
          <Book key={book.id} {...book}/>
        )
      })}
    </section>
  )
}





ReactDOM.render(<BookList />, document.getElementById("root"));