import React, { Component } from "react";
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredBooks: this.props.books
    };

    this.filterBooks = this.filterBooks.bind(this);
    // this.filterBooksByColor = this.filterBooksByColor.bind(this);
  }

  //   componentDidMount() {
  //     if (this.props.match.params.colorID) {
  //       this.filterBooksByColor(this.props.match.params.colorID);
  //     } else this.setState({ filteredBooks: this.props.books });
  //   }

  //   componentDidUpdate(prevProps) {
  //     if (prevProps.match.params.colorID !== this.props.match.params.colorID) {
  //       this.filterBooksByColor(this.props.match.params.colorID);
  //     }
  //   }

  filterBooksByColor(color) {
    let filteredBooks = this.props.books.filter(book => {
      return book.color === color;
    });
    this.setState({ filteredBooks: filteredBooks });
  }

  filterBooks(query) {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book => {
      return `${book.title}`.toLowerCase().includes(query);
    });
    this.setState({ filteredBooks: filteredBooks });
  }

  render() {
    const color = this.props.match.params.colorID;
    let books = this.state.filteredBooks;
    if (color) books = books.filter(book => book.color === color);

    return (
      <div>
        <SearchBar changeHandler={this.filterBooks} />
        <div className="row" />
        <div>
          <BookTable books={books} />{" "}
        </div>
      </div>
    );
  }
}

export default BookList;
