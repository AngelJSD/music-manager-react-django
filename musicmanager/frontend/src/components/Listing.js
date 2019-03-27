import React from "react"

import Album from "./Album"
import AlbumForm from "./AlbumForm"

class Listing extends React.Component{

    constructor(){

        super()
        this.state = {
            albums: []
        }
        this.newAlbum = this.newAlbum.bind(this)
    }

    componentDidMount(){

        fetch("http://127.0.0.1:8000/api/albums/")
        .then(response =>{
            return response.json()
        })
        .then(data => {
            console.log(data)
            this.setState({albums: data})
        })
    }

    newAlbum(){
        window.location.reload()
    }

    render(){

        const showAlbums = this.state.albums.map(album =>{
            return <Album album={album}/>
        })
        return(
            <div className="container">
                <AlbumForm newAlbum={this.newAlbum}/>
                <div className="row">
                    {showAlbums}
                </div>
                
            </div>
            
        )
    }
}

export default Listing