import React from "react"
import "./Show.css"
class Show extends React.Component{
    handleEvent=(imgurl)=>{
        this.props.setSelectedImageUrl(imgurl)
    }
    render(){
        let posterPath
        if(this.props.props.poster_path == null){
            posterPath = "./invalid.jpg"
        }else{
            posterPath = "https://image.tmdb.org/t/p/w500" + this.props.props.poster_path
        }
        return(
            <div onClick={(val) => {this.handleEvent(posterPath)}} className="showcontainer">
                <img  alt={this.props.props.name} src={posterPath} />
                <h1>{this.props.props.name}</h1>
            </div>
        )
    }
}


export default Show