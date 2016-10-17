import React from 'react'

export default class BackgroundSliderItem extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className={`background-slider__item _${this.props.id + 1}`} style={{zIndex: this.props.zIndex, backgroundImage: `url(${this.props.imageURL})`}}></div>
		);
	}
}
