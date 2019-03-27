import React from "react"
import ReactDOM from "react-dom"

import Listing from "./Listing"

class App extends React.Component{
    
    constructor(){

        super()
        this.state = {
            show: "Albums"
        }
        this.showAlbums = this.showAlbums.bind(this)
        this.showSongs = this.showSongs.bind(this)
        this.showArtists = this.showArtists.bind(this)
    }

    showAlbums(){
        this.setState({show:"Albums"})
    }

    showSongs(){
        this.setState({show:"Songs"})
    }

    showArtists(){
        this.setState({show:"Artists"})
    }

    render(){
        const style = {
            
            "textAlign": "center"
            
        }
        return(
            <div>
                <div style={style}><h3>Basic Music Manager</h3></div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        
                        <div className="navbar-collapse" id="navbarColor02">
                            <ul className="navbar-nav mx-auto">
                            <li  className={"nav-item " + (this.state.show==="Albums" ? "active" : "")}>
                                <a className="nav-link" href="#" onClick={this.showAlbums}>Albums</a>
                                
                            </li>
                            
                            <li className={"nav-item " + (this.state.show==="Songs" ? "active" : "")}>
                                <a className="nav-link" href="#" onClick={this.showSongs}>Songs</a>
                            </li>

                            <li className={"nav-item " + (this.state.show==="Artists" ? "active" : "")}>
                                <a className="nav-link" href="#" onClick={this.showArtists}>Artists</a>
                            </li>
                            
                            </ul>
                        </div>
                        
                    </div>
                </nav> 
                <div className="container">
                    <Listing show={this.state.show}/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))