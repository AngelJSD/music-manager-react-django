import React from "react"

class Song extends React.Component{

    render(){

        return(
            <tr>
                <td>{this.props.song.title}</td>
                <td>{this.props.song.album}</td>
                <td>{this.props.song.duration}</td>
            </tr>       
        )
    }
}

export default Song