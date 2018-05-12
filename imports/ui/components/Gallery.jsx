import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ImgList from './ImgList';
import Carousel from './Carousel';

// App component - represents the photo gallery - 1) List 2) Carousel
export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: [],
      carouselIndex: 0,
      pageIndex: 1,
      searchCategory: "canada",
      view: "list"
    };
    this.getUnsplashPhotos = this.getUnsplashPhotos.bind(this);
    this.loadMorePhotos = this.loadMorePhotos.bind(this);
    this.openCarousel = this.openCarousel.bind(this);
    this.closeCarousel = this.closeCarousel.bind(this);
  }
  getUnsplashPhotos(){
    Meteor.call("getPhotos",this.state.pageIndex,this.state.searchCategory,(err,res)=>{
      if (err) {
        alert(err.error);
      } 
      else {
        var images = this.state.imgs;
        images = images.concat(res.data.results);
        this.setState({ imgs:images });
      }
    });
  }
  loadMorePhotos(){
    var pagenum = this.state.pageIndex;
    pagenum = pagenum + 1;
    this.setState({ pageIndex:pagenum });
    this.getUnsplashPhotos();
  }
  openCarousel= (index) => {
    if(index >=0 ){
      this.setState({"view":"carousel"});
      this.setState({carouselIndex: index});
    }
  }
  closeCarousel= (index) => {
    if(index >=0 ){
      this.setState({"view":"list"});
      this.setState({carouselIndex: index});
    }
  }
  componentDidMount(){
    this.getUnsplashPhotos();
  }
  render() {
    // const { index, direction } = this.state;
    return (
      <div style={{width: "100vw", height: "100vh"}}>
        { 
          this.state.view == "list" ? 
            <div style={{textAlign: "center"}}>
              <h1>Curated Photos</h1>
              <ImgList data={this.state.imgs} onImageSelect={this.openCarousel} imageIndex={this.state.carouselIndex}/> 
              <button type="button" className="btn btn-lg" onClick={()=>this.loadMorePhotos()}>Load More</button>
            </div>   
          :
            <Carousel images={this.state.imgs} imageIndex={this.state.carouselIndex} onClose={this.closeCarousel}/>
        }
      </div>
    )
  }
}