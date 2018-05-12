import React from 'react';
import PropTypes from 'prop-types';
import Img from './Img';

class ImgList extends React.Component {
  constructor(props) {
    super(props);
		this.state = {};
		this.handleImageClick = this.handleImageClick.bind(this);
	}
	handleImageClick = (index) => {
		this.props.onImageSelect(index);
  }
	render(){
		return(
			<section id="photo-list">
				{
					this.props.data.map((img,index) =>(
						img.urls && img.urls.thumb ?
						<Img
							url={img.urls.thumb}
							key={index}
							index={index}
							onImageClick={this.handleImageClick}
							imageIndex={this.props.imageIndex}
						/>
						: null
					))
				}
			</section>

		);
	}
};

export default ImgList;
