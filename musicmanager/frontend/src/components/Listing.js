import React from "react"

import Album from "./Album"
import AlbumForm from "./AlbumForm"
import Song from "./Song"
import SongForm from "./SongForm"

class Listing extends React.Component{

    constructor(){

        super()
        this.state = {
            albums: [],
            songs: []
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
        fetch("http://127.0.0.1:8000/api/songs/")
        .then(response =>{
            return response.json()
        })
        .then(data => {
            console.log(data)
            this.setState({songs: data})
        })
    }

    newAlbum(){
        window.location.reload()
    }

    render(){
        
        const showSongs = this.state.songs.map(song =>{
            return <Song song={song}/>
        })

        const showAlbums = this.state.albums.map(album =>{
            return <Album album={album}/>
        })
        return(
            <div className="container">
                <SongForm albums={this.state.albums} newSong={this.newAlbum}/>
                <AlbumForm newAlbum={this.newAlbum}/>
                <div className="row">
                    <div className="col-sm-12 mt-3">
                        <div className="card text-white bg-light mb-3">
                        <table class="table text-white">
                            <thead >
                            <tr>
                                <th>Ttile</th>
                                <th>Album</th>
                                <th>Duration</th>
                            </tr>
                            </thead>
                            
                            <tbody>
                                {showSongs}
                            </tbody>
                    
                        </table>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {showAlbums}
                </div>
                
            </div>
            
        )
    }
}

export default Listing