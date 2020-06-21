import React from "react"
import "./Search.css"



export default function Search(props){

        return(
        <div className="userInput">
        <form onSubmit={(e)=> props.handleSearch(e)}> 
                <input 
                type="text" 
                placeholder="search for books"
                name="userInput"
                aria-label="User Input"        
                
                />
                <input
                type="submit"
                name="submit"
                value="Submit"
                aria-label="Submit User Info"
                />
            </form>
        </div>

        )
}