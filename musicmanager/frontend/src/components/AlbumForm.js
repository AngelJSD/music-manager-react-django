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
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleClose=this.handleClose.bind(this)
    }

    handleChange(event){

        if(event.target.name==="image"){
            this.setState({image: event.target.files[0]})
            let reader = new FileReader()
            reader.onload = function (e) {
                this.setState({image_preview: e.target.result})
            }.bind(this)
            reader.readAsDataURL(event.target.files[0])
        }
        else if(event.target.name==="date"){
            let myDate = new Date(new Date(event.target.value).toString().split('GMT')[0]+' UTC').toISOString().split('.')[0]
            
            console.log(myDate)
            this.setState({published_at: myDate})
        }
        else{
            this.setState({[event.target.name]: event.target.value})
        }
    }

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
    
    handleSubmit(){

        event.preventDefault();
        let formData = new FormData();
        if(this.state.title!== "" &&
            this.state.artist!=="" && 
            this.state.published_at!=="" && 
            this.state.image!==null
        ){
            formData.append('title',this.state.title)
            formData.append('artist',this.state.artist)
            formData.append('published_at',this.state.published_at)
            formData.append('image',this.state.image)
            fetch('http://127.0.0.1:8000/api/albums/', {
                method: 'POST',
                headers: {
                Accept: 'application/json, text/plain, */*',
                },
                body:formData,
            }).then(this.props.newAlbum())
            .catch(err => console.log(err))
        }
        
    }

    render(){
        
        
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
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Artist"
                                            name="artist"
                                            value={this.state.artist}
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group col-sm-12">
                                        <label>Published at</label><br/>
                                        <input
                                            type="date"
                                            name="date"
                                            //ref={(input) => { this.inpuElement = input; }}
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
                                            //ref={(input) => { this.inpuElement = input; }}
                                            accept=".jpg,.jpeg,.png"
                                            onChange={this.handleChange}
                                            required
                                        /><br/>
                                    </div>

                                    
                                    <div className="form-group">
                                        <button
                                            className="btn btn-primary listing-button"
                                            type="submit"
                                            //onClick={this.handleSubmit}
                                        >
                                            Add
                                        </button>
                                        <button
                                            className="btn btn-danger listing-button ml-1"
                                            onClick={this.handleClose}
                                            //onClick={this.handleSubmit}
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