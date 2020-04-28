import React from "react"
import "./TopShows.css"

class TopShows extends React.Component{
    imageClick(id){
        this.props.setSelectedImage(id);
    }
    render(){
        /* update the topshows with current imageurls */
        let imageList = []
        let i =0
        for(i=0;i<3;i++){
            imageList.push(<img className={"image"+(i+1)} alt="" key= {i} id={i+1} style={this.props.selectedImage==i+1?{outline:"solid lightgreen"}:null} onClick={(val)=>this.imageClick(val.target.id)} src={this.props.imageUrls[i]} />)
        }
        return(
            <div id="resultholder">
                <img className="x" id="backgroundimage" alt="" src ={"./background.jpg"} />
                {imageList}
                <img className="y" id="backgroundimage2" alt="overlay" src ={"./overlay.png"} />
            </div>
        )
    }
}


export default TopShows