import React from "react"
import "./Show.css"
class Show extends React.Component{
    handleEvent=(imgurl)=>{
        this.props.setSelectedImageUrl(imgurl)
    }
    render(){
        let poster_path
        if(this.props.props.poster_path == null){
            poster_path = "https://dummyimage.com/200x300/000000/ffffff&text=" + this.props.props.name
        }else{
            poster_path = "https://image.tmdb.org/t/p/w200/" + this.props.props.poster_path
        }
        return(
            <div onClick={(val) => {this.handleEvent(poster_path)}} className="showcontainer">
                <img  alt={this.props.props.name} src={poster_path} />
                <h1>{this.props.props.name}</h1>
            </div>
        )
    }
}


export default Show