import React from "react"
import Dropdown from "./Dropdown"
import "./App.css"
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      options:{},
      showDropdown:false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    let x = event.target.value;
    if(x !== ""){
      fetch("https://api.themoviedb.org/3/search/tv?api_key="+process.env.REACT_APP_API_KEY+"&language=en-US&page=1&query="+ x + "&include_adult=false")
      .then(response=> response.json())
      .then(data =>{
        if(data.total_results >0){
          console.log(data)
          this.setState({
            options:data,
            showDropdown:true
          })
        }
      })
    }else{
      this.setState({
        options:null,
        showDropdown:false
      })
    }


  }

  render(){
    return(
      <div className="app">
        <input onChange={this.handleChange} />
        {this.state.showDropdown?<Dropdown props={this.state.options} />:null}
        <div className="backgroundimage">
        </div>
      </div>
    )
  }
}




export default App