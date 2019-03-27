import React from "react"
import ReactDOM from "react-dom"

import Listing from "./Listing"

class App extends React.Component{
    
    render(){
        
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Basic Music Manager</a>
                        <div className="collapse navbar-collapse" id="navbarColor02">
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Albums</a>
                                
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Songs</a>
                            </li>
                            
                            </ul>
                        </div>
                    </div>
                </nav> 
                <div className="container">
                    <Listing />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))