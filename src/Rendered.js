import React from "react"

class Rendered extends React.Component{
   constructor(){
        super()
        this.state = {
            src:""
        }
        this.imageLoaded = this.imageLoaded.bind(this)
        this.runThis = this.runThis.bind(this)
    }
    runThis(){
        var newimg = document.getElementById("thissvg")
        this.imageLoaded(newimg)

    }

    deleteNode(){
        var toDelete = document.getElementById("thissvg")
        toDelete.remove()
    }
    
    imageLoaded(e){
        var c = document.createElement("canvas")
        c.width = "450";
        c.height = "286"
        var ctx = c.getContext("2d")
        ctx.drawImage(e,0,0)
        var secondimg =document.createElement("img")
        secondimg.src = c.toDataURL('image/jpeg',1.0);
        secondimg.onload = this.deleteNode()
        this.setState({
            src:secondimg.src
        })
    }

    componentDidMount(){
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
                <img id="rendered" src={this.state.src} />
                <img id="thissvg" src={this.props.location.url} />
            </div>
        )
    }
}


export default Rendered