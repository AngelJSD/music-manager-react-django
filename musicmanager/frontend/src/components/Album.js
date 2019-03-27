import React from "react"

class Album extends React.Component{

    constructor(){

        super()
        
    }


    render(){

        // Style for the card
        const cardStyle = {
            minHeight: "400px"
        }

        // Badge style
        const badgeStyle = {
            inLine: "block"
        }
        return(
            <div className="col-sm-4 mt-3">
                <div className="card text-white bg-light mb-3" style={cardStyle}>
                    <img className="card-img-top" src={this.props.album.image} alt="Card image cap"></img>
                    <div className="card-body">
                         
                            <h4 className="text-center">{this.props.album.title}</h4>
                            
                            <h5 className="text-center" style={badgeStyle}>
                                
                                <span className="badge badge-secondary mr-1">
                                    {this.props.album.artist}
                                </span> 
                                
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