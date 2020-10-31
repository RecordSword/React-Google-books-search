import axios from "axios";

export default {
    searchForBookTitle: function(searchTerm) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
    },
    getSavedBooks: function() {
        return axios.get("/api/books/");
    },
    postNewBook: function(bookData) {
        return axios.post("/api/books/", bookData);
    },
    deleteBook: function(id) {
        return axios.delete(`/api/books/${id}`);
    }
}