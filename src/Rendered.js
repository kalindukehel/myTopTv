import React from "react"

class Rendered extends React.Component{
    constructor(){
        super()
        this.state = {
            src:""
        }
        this.runThis = this.runThis.bind(this)
    }

    runThis(){
        var c = document.createElement("canvas")
        c.width = "450";
        c.height = "394"
        var ctx = c.getContext("2d")
        var newimg = document.createElement("img")
        newimg.src = this.props.location.url
        ctx.drawImage(newimg,10,10)
        var setimg = c.toDataURL("image/png")
        this.setState(prev=>({
            src:setimg
        }))
    }
    render(){
        return(
            <div>
                <img id="final" src={this.state.src} />
                <button onClick={this.runThis}>Click me</button>
            </div>
        )
    }
}


export default Rendered