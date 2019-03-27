import React from "react"

class ArtistForm extends React.Component{

    constructor(){

        super()
        this.state = {
            name: "",
            
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleClose=this.handleClose.bind(this)
    }

    handleChange(event){

        this.setState({[event.target.name]: event.target.value})
    
    }

    handleClose(){
        this.setState({
            name: "",
            
        })
        this.props.handleClose("Artist")
    }

    handleSubmit(){

        event.preventDefault();
        let formData = new FormData();
        if(this.state.name!== ""
        ){
            formData.append('name',this.state.name)
            fetch('http://127.0.0.1:8000/api/artists/', {
                method: 'POST',
                headers: {
                Accept: 'application/json, text/plain, */*',
                },
                body:formData,
            }).then(this.props.newArtist())
            .catch(err => console.log(err))
        }
        else{
            console.log(this.state)
        }
        
    }

    render(){
        
        
        return(
            <div className="card mt-3">
                <div className="card-header">
                    <h4>Add Artist</h4>
                </div>

                <div className="card-body">

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-row">
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </div>
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
                                    type="button"
                                    className="btn btn-danger listing-button ml-1"
                                    onClick={this.handleClose}
                                    //onClick={this.handleSubmit}
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

export default ArtistForm