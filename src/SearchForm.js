import React, {Component} from 'react'
import "./SearchForm.css"
import Results from  "./Results"

class SearchForm extends Component{

   changeSelection = (value) =>{
       console.log("changeSelection ran")
       console.log("Here is the value: ")
       console.log(value)
       if(value === "none"){
           this.props.searchForChanged(null)
       }else{
            this.props.searchForChanged(value)
       }
   }

    render(){
        console.log("SearchForm render ran");

        return(
            <div> 
                <main className="searchFormDiv">

                <form>
                    <label htmlFor="searchFor">Select a topic to find books about: </label>
                    <select id="searchFor" name="searchFor"
                    onChange={e => this.changeSelection(e.target.value)}
                    >
                        <option value="none">Select one...</option>
                        <option value="illinois">Illinois</option>
                        <option value="kentucky">Kentucky</option>
                        <option value="indiana">Indiana</option>
                        <option value="wisconsin">Wisconsin</option>
                        <option value="iowa">Iowa</option>

                    </select>
                </form>
                
                </main>
                
                <Results books={this.props.books}/>

            </div>
        )
    }
}

export default SearchForm