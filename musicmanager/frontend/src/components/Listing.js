import React from "react"

import Album from "./Album"
import AlbumForm from "./AlbumForm"

class Listing extends React.Component{

    render(){
        return(
            <div className="container">
                <AlbumForm />
                <div className="row">
                    <Album />
                    <Album />
                    <Album />
                </div>
                
            </div>
            
        )
    }
}

export default Listing