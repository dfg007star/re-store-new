import React from "react";

import "./book-list-item.css";

const BookListItem = ({ book }) => {
  const { title, author } = book;
  return (
    <div className="card text-center">
      <img src="#" className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{author}</p>
        <button href="!#" className="btn btn-primary">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default BookListItem;
