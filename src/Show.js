import React from "react"
import "./Show.css"
class Show extends React.Component{
    handleEvent=()=>{
        console.log("hi") /* when show clicked */
    }
    render(){
        let poster_path
        if(this.props.props.poster_path == null){
            poster_path = "https://placekitten.com/200/300"
        }else{
            poster_path = "https://image.tmdb.org/t/p/w200/" + this.props.props.poster_path
        }
        return(
            <div onClick={this.handleEvent} className="showcontainer">
                <img alt={this.props.props.name} src={poster_path} />
                <h1>{this.props.props.name}</h1>
            </div>
        )
    }
}


export default Show