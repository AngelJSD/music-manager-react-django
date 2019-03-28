import React from "react"

import Album from "./Album"
import AlbumForm from "./AlbumForm"
import Song from "./Song"
import SongForm from "./SongForm"
import Artist from "./Artist";
import ArtistForm from "./ArtistForm";

class Listing extends React.Component{

    constructor(){

        super()
        this.state = {
            albums: [],
            songs: [],
            artists: [],
            showAlbumForm: false,
            showSongForm: false,
            showArtistForm: false
        }

        // Binding 'this' to prevent 'undefined' error
        this.reloadPage = this.reloadPage.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    componentDidMount(){
        
        // Fetching all the albums
        fetch("/api/albums/")
        .then(response =>{
            return response.json()
        })
        .then(data => {
            console.log(data)
            this.setState({albums: data})
        })
        // Fetching all the songs
        fetch("/api/songs/")
        .then(response =>{
            return response.json()
        })
        .then(data => {
            console.log(data)
            this.setState({songs: data})
        })
        // Fetching all the artists
        fetch("/api/artists/")
        .then(response =>{
            return response.json()
        })
        .then(data => {
            console.log(data)
            this.setState({artists: data})
        })
    }

    // Reload all components
    reloadPage(){
        
        window.location.reload()
    }

    // Handle what form to show
    handleClick(event){
        if(event.target.name === "newAlbum"){
            this.setState({showAlbumForm: true})
        }
        else if(event.target.name === "newSong"){
            this.setState({showSongForm: true})
        }
        else if(event.target.name === "newArtist"){
            this.setState({showArtistForm: true})
        }
    }

    // Handle what form to close
    handleClose(formName){
        if(formName==="Album"){
            this.setState({showAlbumForm: false})
        }
        else if(formName==="Song"){
            this.setState({showSongForm: false})
        }
        else if(formName==="Artist"){
            this.setState({showArtistForm: false})
        }
    }

    render(){
        
        // Creating an array of 'Song' components
        const showSongs = this.state.songs.map(song =>{
            return <Song key={song.id} song={song}/>
        })

        // Creating an array of 'Album' components
        const showAlbums = this.state.albums.map(album =>{
            return <Album key={album.id} album={album}/>
        })

        // Creating an array of 'Artists' components
        const showArtists = this.state.artists.map(artist =>{
            return <Artist key={artist.id} artist={artist}/>
        })
        return(
            <div className="container">
                {
                // Show a form only if the corresponding attribute in state is true and the navigation is in the correct nav-item (this.props.show)
                }
                {this.state.showArtistForm && this.props.show === "Artists" && <ArtistForm handleClose={this.handleClose} newArtist={this.reloadPage}/>}
                {this.state.showSongForm && this.props.show === "Songs" && <SongForm handleClose={this.handleClose} albums={this.state.albums} newSong={this.reloadPage}/>}
                {this.state.showAlbumForm && this.props.show === "Albums" && <AlbumForm artists={this.state.artists}  handleClose={this.handleClose} newAlbum={this.reloadPage}/>}
                
                {
                // Show a component according to the navigation bar nav-item (this.props.show)
                }
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
                        <table className="table text-white">
                            <thead >
                            <tr>
                                <th>Title</th>
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
                {this.props.show === "Artists" &&<div className="row mt-3">
                <div className="col-sm-12">
                        
                        <div className="float-left">
                        <h4>Artists</h4>
                        </div>
                        <div className="float-right">
                            <h5><button className="btn-primary listing-button" name="newArtist" onClick={this.handleClick}>New Artist</button>
                            </h5>
                        </div>
                        
                    </div>
                    <div className="col-sm-12 mt-3">
                        <div className="card text-white bg-light mb-3">
                        <table className="table text-white">
                            <thead >
                            <tr>
                                <th>Name</th>
                            </tr>
                            </thead>
                            
                            <tbody>
                                {showArtists}
                            </tbody>
                    
                        </table>
                        </div>
                    </div>
                </div>}
                
            </div>
            
        )
    }
}

export default Listing