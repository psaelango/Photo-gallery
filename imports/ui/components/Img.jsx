import React from 'react';
import PropTypes from 'prop-types';

class Img extends React.Component {
  constructor(props) {
    super(props);
		this.state = {};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick = () => {
    this.props.onImageClick(this.props.index);
  }
	render(){
		return(
			<img 
				id={this.props.index}
				className="img-fluid" 
				src={this.props.url} alt="Unsplash Image here" onClick={this.handleClick} 
				style={{cursor: "zoom-in", padding:"5px", animation: this.props.index == this.props.imageIndex ? "focus 500ms" : null}}
			/>
		);
	}
}

export default Img;
