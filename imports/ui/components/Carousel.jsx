import React from 'react';
import PropTypes from 'prop-types';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose = (index) => {
		this.props.onClose(index);
  }
	render(){
		return(
			<div id="photoGallery" className="carousel slide" style={{width: "100%", height: "100%"}} data-ride="carousel" data-interval="false">
        <div className="carousel-inner" style={{width: "100%", height: "100%"}}>
          {
            this.props.images.map( (img,index)=>(
              <div className={ index == this.props.imageIndex ? "item active" : "item"} key={index} style={{width: "100%", height: "100%", textAlign:"center"}}>
                <a href={"#"+index}><span className="glyphicon glyphicon-remove" onClick={()=>this.handleClose(index)} style={{cursor: "pointer"}}></span></a>
                <div style={{backgroundImage: "url("+img.urls.regular+")", backgroundSize:"contain", backgroundRepeat:"no-repeat", backgroundPosition:"center", width:"100%", height:"100%" }}>
                  {/* <img src={img.urls.small} alt="Unsplash Image here" style={{marginTop: "auto", marginLeft: "auto", marginRight: "auto", display: "block"}}/> */}
                </div>
                <div className="carousel-caption">
                  <h5> Photo by <a href={img.user.links.html}>{img.user.name}</a> </h5>
                  <p><a href={img.links.html}> See on Unsplash</a></p>
                </div>
              </div>              
            ))
          }
        </div>
        <a className="left carousel-control" role="button" href="#photoGallery" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" role="button" href="#photoGallery" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
		);
	}
};

export default Carousel;
