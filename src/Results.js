import React, { Component } from 'react';
import "./Results.css"

class Results extends Component{
  
    render(){

        console.log("From Results component: ")
        console.log(this.props.books)
        const listItems = this.props.books.map(
            (item, i) => <li key={i}>
            {item.volumeInfo.title}<br/>
            {item.volumeInfo.authors}<br/>
            <br/>
            <br/>
            </li>
          );
        
        return(
            <div className="resultsDiv">
                 <ul>
                     {listItems}
                 </ul>
            </div>
        );
    }
}

Results.defaultProps = {
    books: []
  };

export default Results