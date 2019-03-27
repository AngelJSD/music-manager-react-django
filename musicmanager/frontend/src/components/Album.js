import React from "react"

class Album extends React.Component{

    constructor(){

        super()
        this.state = {
            showDetails: false
        }
        this.handleOver = this.handleOver.bind(this)
        this.handleLeave = this.handleLeave.bind(this)
    }

    handleOver(){

        this.setState({showDetails: true})
    }

    handleLeave(){
        this.setState({showDetails: false})
    }

    render(){

        const cardStyle = {
            minHeight: "400px"
        }

        return(
            <div className="col-sm-4 mt-3">
                <div className="card text-white bg-light mb-3" style={cardStyle}>
                    {!this.state.showDetails && <img className="card-img-top" src={this.props.album.image} alt="Card image cap"></img>}
                    <div className="card-body">
                         
                            <h4 className="text-center">{this.props.album.title}</h4>
                            
                            <h5 className="text-center">
                                {//Artist: <br/>
                                }
                                <span className="badge badge-secondary mr-1">
                                    {this.props.album.artist}
                                </span> 
                                {//Published at:<br/>
                                }
                                <span className="badge badge-secondary mr-1">
                                    {this.props.album.published_at}
                                </span> 
                                
                            </h5>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Album