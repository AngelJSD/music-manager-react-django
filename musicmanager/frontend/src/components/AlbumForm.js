import React from "react"

class AlbumForm extends React.Component{

    constructor(){

        super()
        this.state = {
            title: "album1",
            artist: "artist1",
            published_at: "1999-12-31T23:00:00Z",
            image: null,
            image_preview: null
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({image: event.target.files[0]});
        let reader = new FileReader();
        reader.onload = function (e) {
            this.setState({image_preview: e.target.result})
        }.bind(this);
        reader.readAsDataURL(event.target.files[0]);
    }
    
    handleSubmit(){

        let formData = new FormData();
        formData.append('title',this.state.title);
        formData.append('artist',this.state.artist);
        formData.append('published_at',this.state.published_at);
        formData.append('image',this.state.image);
        fetch('http://127.0.0.1:8000/api/albums/', {
            method: 'POST',
            headers: {
            Accept: 'application/json, text/plain, */*',
            },
            body:formData,
        }).then(res => res.json())
            .then((data) => {
            console.log(data);
        })
        .catch(err => console.log(err));
    }

    render(){
        return(
            <div className="card mt-3">
                <div className="card-header">
                    <h4>Add Album</h4>
                </div>

                <div className="card-body">

                    <form onSubmit={this.handleOnSubmit}>
                        <div className="form-row">
                            <div className="col-sm-8">
                                <div className="form-row">
                                    <div className="form-group col-sm-12">
                                        <label for="address" className="">Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Address"
                                            name="address"
                                            value=""
                                            onChange={this.handleOnChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group col-sm-12">
                                        <label for="address" className="">Artist</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Address"
                                            name="address"
                                            value=""
                                            onChange={this.handleOnChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group col-sm-12">
                                        <label>Published at</label><br/>
                                        <input
                                            type="date"
                                            //ref={(input) => { this.inpuElement = input; }}
                                            onChange={this.handleChange}
                                        /><br/>
                                    </div>
                                    <div className="form-group form-control-file col-sm-12">
                                        <label>Image</label><br/>
                                        <input
                                            type="file"
                                            multiple={false}
                                            //ref={(input) => { this.inpuElement = input; }}
                                            accept=".jpg,.jpeg,.png"
                                            onChange={this.handleChange}
                                        /><br/>
                                    </div>

                                    
                                    <div className="form-group col-sm-12">
                                        <button
                                            className="btn btn-primary listing-button"
                                            type="submit"
                                            onClick={this.handleSubmit}
                                        >
                                            Add
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