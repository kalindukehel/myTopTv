import React from "react"
import Dropdown from "./Dropdown"
import TopShows from "./TopShows"
import htmlToImage from "html-to-image"
import { Link, Route, Switch } from 'react-router-dom';
import "./App.css"
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      options:{},
      showDropdown:false,
      selectedImage:1,
      imageUrls:["https://i.imgur.com/ka3Ail9.png","https://i.imgur.com/ka3Ail9.png","https://i.imgur.com/ka3Ail9.png"]
    }
    this.handleChange = this.handleChange.bind(this);
    this.setSelectedImage = this.setSelectedImage.bind(this);
    this.setSelectedImageUrl = this.setSelectedImageUrl.bind(this);
    this.renderFinal = this.renderFinal.bind(this);
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
  setSelectedImage(id){
    this.setState({
      selectedImage:id
    })
  }

  setSelectedImageUrl(url){
    let prev = this.state
    let newImageUrls = prev.imageUrls
    newImageUrls[this.state.selectedImage-1] = url;
    this.setState(prevState=>({
      imageUrls:newImageUrls,
      selectedImage:prevState.selectedImage==3?1:++prevState.selectedImage,
      showDropdown:false
    }))
  }

  renderFinal(){
/*     let node = document.getElementById('resultholder');
    const {history} =  this.props;
    this.setState({
      selectedImage:4
    })
    htmlToImage.toPng(node)
    .then(function (dataUrl) {
      history.push({
        pathname:"/rendered",
        url:dataUrl
      })
    }) */
    function filter (node) {
      return (node.tagName !== 'i');
    }
    this.setState({
      selectedImage:4
    })
    const {history} = this.props;
    htmlToImage.toSvgDataURL(document.getElementById('resultholder'), {filter: filter})
      .then(function (dataUrl) {
        history.push({
          pathname:"/rendered",
          url:dataUrl,
          x:1
        })
      });
  }

  render(){
    return(
      <div className="app">
        <input autocomplete="off" id="searchbar" placeholder="Search for TV Show..." onChange={this.handleChange} />
        {this.state.showDropdown?<Dropdown setSelectedImageUrl={this.setSelectedImageUrl} props={this.state.options} />:null}
        <TopShows imageUrls = {this.state.imageUrls} selectedImage={this.state.selectedImage} setSelectedImage={this.setSelectedImage} />
        {(this.state.imageUrls[0]!="https://i.imgur.com/ka3Ail9.png"&&this.state.imageUrls[1]!="https://i.imgur.com/ka3Ail9.png"&&this.state.imageUrls[2]!="https://i.imgur.com/ka3Ail9.png")?<button id="generate" onClick={this.renderFinal}>Generate Result</button>:null}
      </div>
    )
  }
}




export default App