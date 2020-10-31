import React, { useState } from "react";
import API from "../utils/API";
import { Container, Row } from "../components/Grid";
import BookCard from "../components/BookCard";


function Search() {
    const [searchTerm, setSearchTerm] = useState();
    const [bookFromSearch, setBookFromSearch] = useState();

    const handleInputChange = event => {
        return setSearchTerm(event.target.value);
    }

    const handleBookSave = async (data) => {
        try {
            const response = await API.postNewBook(data);
            // change then response to socket.io notification
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleFormSubmit = async () => {
        try {
            const { data: { items } } = await API.searchForBookTitle(searchTerm);
            if (items.length === 0) return;
            const arrayOfBookResults = await items.map(book => {
                return {
                    _id: book.id,
                    title: book.volumeInfo.title,
                    author: (!("authors" in book.volumeInfo) ?
                        ["Unknown"] :
                        book.volumeInfo.authors),
                    image: (!("imageLinks" in book.volumeInfo) ?
                        "https://via.placeholder.com/150" :
                        book.volumeInfo.imageLinks.smallThumbnail),
                    link: book.volumeInfo.infoLink,
                    description: book.volumeInfo.description
                }
            });
            setBookFromSearch(arrayOfBookResults);
        }
        catch (error) {
            console.log(error);
        }
        
    }


    return (
        <div>
            <Container>
                <Row>
                    <h3 id="content-title">Search For A Book Title.</h3>
                </Row>
                <Row >
                    <input
                        onChange={handleInputChange}
                    ></input>
                    <button
                        className="button"
                        onClick={handleFormSubmit}
                    >Search</button>
                </Row>
                <Row>
                    {!bookFromSearch ?
                        undefined :
                        bookFromSearch.length === 0 ?
                            <h3>No books found</h3> :
                            bookFromSearch.map(book =>
                                <BookCard
                                    {...book}
                                    handleBookSave={handleBookSave}
                                    key={book._id}
                                    location="Search"></BookCard>)
                    }
                </Row>
            </Container>

        </div>
    )
}

export default Search;