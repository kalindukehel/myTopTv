import React from "react"
import Show from "./Show"
import "./Dropdown.css"
class Dropdown extends React.Component{
    render(){
        let resultList = null
        if(this.props.props.total_results>=3){
            resultList = <div className ="resultlist">
                <Show setSelectedImageUrl={this.props.setSelectedImageUrl} props={this.props.props.results[0]} />
                <Show setSelectedImageUrl={this.props.setSelectedImageUrl} props={this.props.props.results[1]} />
                <Show setSelectedImageUrl={this.props.setSelectedImageUrl} props={this.props.props.results[2]} />
            </div>
        }else{
            resultList = <div className= "resultlist">
                <Show setSelectedImageUrl={this.props.setSelectedImageUrl} props={this.props.props.results[0]} />
            </div>
        }
        return(
            resultList
        )
    }
}



export default Dropdown