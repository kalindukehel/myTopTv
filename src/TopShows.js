import React from "react"
import "./TopShows.css"

class TopShows extends React.Component{
    imageClick(id){
        this.props.setSelectedImage(id);
    }
    render(){
        let imageList = []
        let i =0
        for(i=0;i<3;i++){
            imageList.push(<img className={"image"+(i+1)} key= {i} id={i+1} style={this.props.selectedImage==i+1?{outline:"solid lightgreen"}:null} onClick={(val)=>this.imageClick(val.target.id)} src={this.props.imageUrls[i]} />)
        }
        return(
            <div id="resultholder">
                <img id="backgroundimage" src ={"https://i.imgur.com/calblp3.png"} />
                {imageList}
                <img id="backgroundimage2" alt="overlay" src ={"https://i.imgur.com/mI6TF37.png"} />
            </div>
        )
    }
}


export default TopShows