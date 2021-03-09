import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { booksLoaded } from "../../actions";
import { withBookstoreService } from "../hoc";
import { compose } from "../../utils";
import BookListItem from "../book-list-item";
import "./book-list.css";

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();
    console.log(data);

    this.props.booksLoaded(data);
  }
  render() {
    const { books } = this.props;
    return (
      <div>
        {books.map((book) => {
          return (
            <div key={book.id}>
              <BookListItem book={book} />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapDispatchToProps = {
  booksLoaded,
};

const mapStateToProps = ({ books }) => {
  return {
    books,
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
