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
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(event){

        this.setState({[event.target.name]: event.target.value})
    
    }

    handleSubmit(){

        event.preventDefault();
        let formData = new FormData();
        if(this.state.title!== "" &&
            this.state.album!=="" && 
            this.state.hr!=="" && 
            this.state.min!=="" && 
            this.state.sec!==""
        ){
            formData.append('title',this.state.title)
            formData.append('album',this.state.album)
            formData.append('duration',this.state.hr + ":" +this.state.min + ":" +this.state.sec)
            fetch('http://127.0.0.1:8000/api/songs/', {
                method: 'POST',
                headers: {
                Accept: 'application/json, text/plain, */*',
                },
                body:formData,
            }).then(this.props.newSong())
            .catch(err => console.log(err))
        }
        else{
            console.log(this.state)
        }
        
    }

    render(){
        
        let albumOptions = this.props.albums.map(album =>{
            return <option value={album.title}>{album.title}</option>
        })
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
                            <div className="form-group col-sm-12">
                                <button
                                    className="btn btn-primary listing-button"
                                    type="submit"
                                    //onClick={this.handleSubmit}
                                >
                                    Add
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