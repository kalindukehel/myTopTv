import React from "react"
import Dropdown from "./Dropdown"
import TopShows from "./TopShows"
import htmlToImage from "html-to-image"
import "./App.css"
import Ads from "./Ads"
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
    /* get show data when text input changed */
    let x = event.target.value;
    if(x !== ""){
      fetch("https://api.themoviedb.org/3/search/tv?api_key="+process.env.REACT_APP_API_KEY+"&language=en-US&page=1&query="+ x + "&include_adult=false")
      .then(response=> response.json())
      .then(data =>{
        if(data.total_results >0){
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
    /* gets which show user clicked and sets selected image */
    let prev = this.state
    let newImageUrls = prev.imageUrls
    newImageUrls[this.state.selectedImage-1] = url;
    this.setState(prevState=>({
      imageUrls:newImageUrls,
      selectedImage:prevState.selectedImage===3?1:++prevState.selectedImage,
      showDropdown:false
    }))
    document.getElementById("searchbar").value = ""
  }

  renderFinal(){
    /* converts html to svg image */
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
        <h1 style={{fontFamily:"Arial",letterSpacing:"3px",color:"#1a202c"}}>myTopTvShows</h1>
        <input autoComplete="off" id="searchbar" placeholder="Search for TV Show..." onChange={this.handleChange} />
        {this.state.showDropdown?<Dropdown setSelectedImageUrl={this.setSelectedImageUrl} props={this.state.options} />:null}
        <TopShows imageUrls = {this.state.imageUrls} selectedImage={this.state.selectedImage} setSelectedImage={this.setSelectedImage} />
        {(this.state.imageUrls[0]!="https://i.imgur.com/ka3Ail9.png"&&this.state.imageUrls[1]!="https://i.imgur.com/ka3Ail9.png"&&this.state.imageUrls[2]!="https://i.imgur.com/ka3Ail9.png")?<button id="generate" onClick={this.renderFinal}>Generate Result</button>:null}
        <p style={{position:"absolute",bottom:"0px",fontFamily:"Arial",fontSize:"10px",color:"#4a5568"}}><a style={{color:"inherit",textDecoration:"none"}} href="https://kalindukehel.com">Designed by kalindukehel.com</a></p>
      </div>
    )
  }
}




export default App