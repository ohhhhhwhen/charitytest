import axios from 'axios';

export default {
    // Gets all books
    getCharity() {
        return axios.get(`/api/charities`);
    },
    // Gets the book with the given id
    getCharity(id) {
        return axios.get(`/api/charities/${id}`);
    },
    // Deletes the book with the given id
    deleteCharity(id) {
        return axios.delete(`/api/charities/${id}`);
    },
    // Saves a book to the database
    saveCharity(charityData) {
        return axios.post(`/api/charities`, charityData);
    }
};
