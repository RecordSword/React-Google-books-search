import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { Container, Row } from "../components/Grid";
import BookCard from "../components/BookCard";

function Saved() {
    const [savedBooks, setSavedBooks] = useState("");

    useEffect(() => {
        loadBooks();
    }, [setSavedBooks]);

    const loadBooks = async () => {
        try {
            const response = await API.getSavedBooks();
            setSavedBooks(response.data);
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    const handleBookDelete = async ({ _id }) => {
        try {
            await API.deleteBook(_id);
            loadBooks();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Container>
                {savedBooks.length === 0 ?
                    <Row><h3 id="content-title">No Saved Books To Display.</h3></Row> :   
                    <div>
                        <Row><h3 id="content-title">Your Saved Books: {savedBooks.length}</h3></Row>
                        <Row>{savedBooks.map(book => <BookCard
                            {...book}
                            key={book._id}
                            handleBookDelete={handleBookDelete}
                            location="Saved"></BookCard>)}
                        </Row>
                    </div>    
                }
            </Container>
        </div>
    )
}

export default Saved;