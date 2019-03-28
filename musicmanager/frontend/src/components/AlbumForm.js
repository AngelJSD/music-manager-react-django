import React from "react"

class AlbumForm extends React.Component{

    constructor(){

        super()
        this.state = {
            title: "",
            artist: "",
            published_at: "",
            image: null,
            image_preview: null
        }
        // Binding 'this' to prevent 'undefined' error
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleClose=this.handleClose.bind(this)
    }

    // Handling onChange of any input
    handleChange(event){

        // If the imput is an image
        if(event.target.name==="image"){
            
            // Get the image and save it in the state
            this.setState({image: event.target.files[0]})
            
            // Set image_preview when the image has finished to load
            let reader = new FileReader()
            reader.onload = function (e) {
                this.setState({image_preview: e.target.result})
            }.bind(this)
            reader.readAsDataURL(event.target.files[0])
        }
        // If the imput is a date
        else if(event.target.name==="date"){
            
            console.log(event.target.value)
            this.setState({published_at: event.target.value})
        }
        // If the imput is of any other type
        else{
            this.setState({[event.target.name]: event.target.value})
        }
    }

    // handleClose: reset state and call handleClose of the parent component
    handleClose(){
        this.setState({
            title: "",
            artist: "",
            published_at: "",
            image: null,
            image_preview: null
        })
        this.props.handleClose("Album")
    }
    
    // Handling onSubmit of the form
    handleSubmit(){

        // Prevent the page to refresh
        event.preventDefault();

        // Creating a FormData
        let formData = new FormData();

        // Doing simple validation
        if(this.state.title!== "" &&
            this.state.artist!=="" && 
            this.state.published_at!=="" && 
            this.state.image!==null
        ){  
            // Filling formData
            formData.append('title',this.state.title)
            formData.append('artist',this.state.artist)
            formData.append('published_at',this.state.published_at)
            formData.append('image',this.state.image)

            // Doing POST
            fetch('/api/albums/', {
                method: 'POST',
                headers: {
                Accept: 'application/json, text/plain, */*',
                },
                // Passing formData as the body
                body:formData,
            }).then(
                // Reloading the page using a function of the parent component
                this.props.newAlbum()
            )
            .catch(err => console.log(err))
        }
        
    }

    render(){
        
        // Creating an array of options with the artists in the database
        let artistsOptions = this.props.artists.map(artist =>{
            return <option key={artist.id} value={artist.name}>{artist.name}</option>
        })
        // Adding default value at the begining of the array
        artistsOptions = [<option value="">Artist</option>, ...artistsOptions]
        
        return(
            <div className="card mt-3">
                <div className="card-header">
                    <h4>Add Album</h4>
                </div>

                <div className="card-body">

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-row">
                            <div className="col-sm-8">
                                <div className="form-row">
                                    <div className="form-group col-sm-12">
                                        <label>Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Title"
                                            name="title"
                                            value={this.state.title}
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group col-sm-12">
                                        <label>Artist</label>
                                        <select
                                            className="form-control"
                                            name="artist"
                                            value={this.state.artist}
                                            onChange={this.handleChange}
                                            required
                                        >
                                            {artistsOptions}
                                        </select>
                                    </div>
                                    <div className="form-group col-sm-12">
                                        <label>Published at</label><br/>
                                        <input
                                            type="date"
                                            name="date"
                                            onChange={this.handleChange}
                                            required
                                        /><br/>
                                    </div>
                                    <div className="form-group form-control-file col-sm-12">
                                        <label>Image</label><br/>
                                        <input
                                            type="file"
                                            name="image"
                                            multiple={false}
                                            accept=".jpg,.jpeg,.png"
                                            onChange={this.handleChange}
                                            required
                                        /><br/>
                                    </div>

                                    
                                    <div className="form-group">
                                        <button
                                            className="btn btn-primary listing-button"
                                            type="submit"
                                        >
                                            Add
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-danger listing-button ml-1"
                                            onClick={this.handleClose}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>                                
                            </div>
                            <div className="col-sm-4 text-center container-fluid"><img src={this.state.image_preview} className="rounded img-fluid" alt="Image preview"/></div>
                            
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default AlbumForm