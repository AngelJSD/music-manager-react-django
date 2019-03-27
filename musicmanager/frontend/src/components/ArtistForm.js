import React from "react"

class ArtistForm extends React.Component{

    constructor(){

        super()
        this.state = {
            name: "",
            
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
            name: "",
            
        })
        this.props.handleClose("Artist")
    }

    // Handling onSubmit of the form
    handleSubmit(){

        // Prevent the page to refresh
        event.preventDefault();

        // Creating a FormData
        let formData = new FormData();

        // Doing simple validation
        if(this.state.name!== ""
        ){
            // Filling formData
            formData.append('name',this.state.name)

            // Doing POST
            fetch('http://127.0.0.1:8000/api/artists/', {
                method: 'POST',
                headers: {
                Accept: 'application/json, text/plain, */*',
                },
                // Passing formData as the body
                body:formData,
            }).then(
                // Reloading the page using a function of the parent component
                this.props.newArtist()
            )
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

export default ArtistForm