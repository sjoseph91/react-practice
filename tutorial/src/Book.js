import React from 'react';

const Book = ({img, title, author}) => {
  //attribute, eventHandler
  //onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e)
    console.log(e.target);
    alert("hello");
  }
  const complexExample = (author) => {
    console.log(author)
  }
  return (
    <article onMouseOver={() => {
      console.log(title);
    }} className="book">
      <img alt="moon" src={img}></img>
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>Reference example</button>
      <button type="button" onClick={() => complexExample(author)}>More complex example</button>
    </article>
  )
}
export default Book;