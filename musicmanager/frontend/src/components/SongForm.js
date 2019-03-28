import React from "react"

class SongForm extends React.Component{

    constructor(){

        super()
        this.state = {
            title: "",
            album: "",
            hr: "",
            min: "",
            sec: ""
            
        }
        // Binding 'this' to prevent 'undefined' error
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleClose=this.handleClose.bind(this)
    }

    // Handling onChange of any input
    handleChange(event){

        this.setState({[event.target.name]: event.target.value})
    
    }

    // handleClose: reset state and call handleClose of the parent component
    handleClose(){
        this.setState({
            title: "",
            album: "",
            hr: "",
            min: "",
            sec: ""
            
        })
        this.props.handleClose("Song")
    }

    // Handling onSubmit of the form
    handleSubmit(){

        // Prevent the page to refresh
        event.preventDefault();

        // Creating a FormData
        let formData = new FormData();

        // Doing simple validation
        if(this.state.title!== "" &&
            this.state.album!=="" && 
            this.state.hr!=="" && 
            this.state.min!=="" && 
            this.state.sec!==""
        ){  
            // Filling formData
            formData.append('title',this.state.title)
            formData.append('album',this.state.album)
            formData.append('duration',this.state.hr + ":" +this.state.min + ":" +this.state.sec)
            
            // Doing POST
            fetch('/api/songs/', {
                method: 'POST',
                headers: {
                Accept: 'application/json, text/plain, */*',
                },
                // Passing formData as the body
                body:formData,
            }).then(
                // Reloading the page using a function of the parent component
                this.props.newSong()
            )
            .catch(err => console.log(err))
        }
        else{
            console.log(this.state)
        }
        
    }

    render(){
        
        // Creating an array of options with the albums in the database
        let albumOptions = this.props.albums.map(album =>{
            return <option key={album.id} value={album.title}>{album.title}</option>
        })
        // Adding default value at the begining of the array
        albumOptions = [<option value="">Album</option>, ...albumOptions]
        
        return(
            <div className="card mt-3">
                <div className="card-header">
                    <h4>Add Song</h4>
                </div>

                <div className="card-body">

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-row">
                            <div className="col-sm-12">
                                <div className="form-group">
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
                            </div>

                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Album</label>
                                    <select
                                        className="form-control"
                                        placeholder="Album"
                                        name="album"
                                        value={this.state.album}
                                        onChange={this.handleChange}
                                        required
                                    >
                                        {albumOptions}
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Duration</label>
                                    <div className="form-row">
                                    <input
                                        type="number"
                                        placeholder="hr"
                                        min="0"
                                        max="99"
                                        className="form-control col-sm-2"
                                        name="hr"
                                        value={this.state.hr}
                                        onChange={this.handleChange}
                                        required
                                    />
                                    <input
                                        type="number"
                                        min="0"
                                        max="59"
                                        placeholder="min"
                                        className="form-control col-sm-2"
                                        name="min"
                                        value={this.state.min}
                                        onChange={this.handleChange}
                                        required
                                    />
                                    <input
                                        type="number"
                                        min="0"
                                        max="59"
                                        placeholder="sec"
                                        className="form-control col-sm-2"
                                        name="sec"
                                        value={this.state.sec}
                                        onChange={this.handleChange}
                                        required
                                    />
                                    </div>
                                </div>
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
                    </form>
                </div>
            </div>
        )
    }
}

export default SongForm