import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import SearchForm from './SearchForm';

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      searchFor: "Obama",
      books: [],
      id: 1,
      title: "state Book Title",
      author: "state author",
      price: 70,
      description: "state description"
    }
  }

  componentDidMount(){
    console.log("App componentDidMount ran");
  }

  searchForChanged = (value) => {
    console.log("searchForChanged ran; value passed in below: ")
    console.log(value)
    let v = value
    /* this.setState(
      {searchFor: v}
    )
    console.log(this.state.searchFor)

    const searchFor = this.state.searchFor */
    const searchURL = `https://www.googleapis.com/books/v1/volumes?q=${v}+subject&key=AIzaSyDb08v7rFWLcTWuiA8le49qABV_LCz-8s8`
    fetch(searchURL)
    .then(response => {
      if(!response.ok) {
        throw new Error('Something went wrong, please try again later.');
      }
      return response;
    })
    .then(response => response.json())
    .then(response => {
      console.log("Here is the response fetched from the server: ")
      console.log(response)
      const r = response
      console.log("Here is the response after being set to a variable named r: ")
      console.log(r)
      console.log("Here is r.items[0]: ")
      console.log(r.items[0])

      const books = []

      for(let i=0; i<10; i=i+1){
        books.push(r.items[i])
      }
      
      console.log("Here is an array named books of the first ten r.items[i] items in the response object")
      console.log(books)

      this.setState({
        books: books
      })
    })
    .catch(err => console.log(err.message))

  }

  render(){
    console.log("App render ran")

  return (
      <div className="appDiv">
      <Header/>
      <SearchForm books={this.state.books}
      changeSearchFor={this.changeSearchFor}
      searchFor={this.state.searchFor}
      searchForChanged={this.searchForChanged}/>
      </div>
    );
  }
}

export default App;
