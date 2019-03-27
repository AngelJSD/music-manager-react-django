import React from "react"

class Artist extends React.Component{

    render(){

        return(
            <tr>
                <td>{this.props.artist.name}</td>
            </tr>       
        )
    }
}

export default Artist