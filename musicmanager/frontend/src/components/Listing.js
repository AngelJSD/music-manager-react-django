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
            songs: [],
            showAlbumForm: false,
            showSongForm: false,
        }
        this.newAlbum = this.newAlbum.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleClose = this.handleClose.bind(this)
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

    handleClick(event){
        if(event.target.name === "newAlbum"){
            this.setState({showAlbumForm: true})
        }
        else if(event.target.name === "newSong"){
            this.setState({showSongForm: true})
        }
    }

    handleClose(formName){
        if(formName==="Album"){
            this.setState({showAlbumForm: false})
        }
        else if(formName==="Song"){
            this.setState({showSongForm: false})
        }
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
                {this.state.showSongForm && this.props.show === "Songs" && <SongForm handleClose={this.handleClose} albums={this.state.albums} newSong={this.newAlbum}/>}
                {this.state.showAlbumForm && this.props.show === "Albums" && <AlbumForm  handleClose={this.handleClose} newAlbum={this.newAlbum}/>}
                {this.props.show === "Songs" && <div className="row mt-3">
                    <div className="col-sm-12">
                        
                        <div className="float-left">
                        <h4>Songs</h4>
                        </div>
                        <div className="float-right">
                            <h5><button className="btn-primary listing-button" name="newSong" onClick={this.handleClick}>New Song</button>
                            </h5>
                        </div>
                        
                    </div>
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
                </div>}

                {this.props.show === "Albums" &&<div className="row mt-3">
                    <div className="col-sm-12">
                    
                        <div className="float-left">
                        <h4>Albums</h4>
                        </div>
                        <div className="float-right">
                            <h5><button className="btn-primary listing-button" name="newAlbum" onClick={this.handleClick}>New Album</button>
                            </h5>
                        </div>
                        
                    </div>
                    
                    {showAlbums}
                </div>}
                
            </div>
            
        )
    }
}

export default Listing