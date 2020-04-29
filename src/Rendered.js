import React from "react"

class Rendered extends React.Component{
   constructor(){
        super()
        this.state = {
            src:"",
            style:{}
        }
        this.imageLoaded = this.imageLoaded.bind(this)
        this.runThis = this.runThis.bind(this)
    }
    runThis(){
        var tempImg = document.getElementById("thissvg")
        this.imageLoaded(tempImg)

    }

    deleteNode(){
        /* delete canvas after png has been created */
        var toDelete = document.getElementById("thissvg")
        toDelete.remove()
    }
    
    imageLoaded(e){
        /* create png from canvas */
        var c = document.createElement("canvas")
        c.width = "675";
        c.height = "432.09"
        var ctx = c.getContext("2d")
        ctx.drawImage(e,0,0,450,288.06,0,0,675,432.09)
        var renderedPng =document.createElement("img")
        renderedPng.src = c.toDataURL('image/jpeg',1.0);
        renderedPng.onload = this.deleteNode()
        this.setState({
            src:renderedPng.src,
            style:{width:"450px",height:"288.06px"}
        })
    }

    componentDidMount(){
        /* listen for when canvas has loaded */
        var img = document.getElementById("thissvg")
        img.addEventListener("load",()=>{
            var node = this
            setTimeout(function() {
                node.runThis()
            },500)
        })
    }


    render(){
        return(
            <div>
                <img style={this.state.style} id="rendered" alt="" src={this.state.src} />
                <img id="thissvg" alt="" src={this.props.location.url} />
            </div>
        )
    }
}


export default Rendered