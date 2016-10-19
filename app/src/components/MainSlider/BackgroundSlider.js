import './BackgroundSlider.sass';

import React from 'react'

import BaseItemSlider from './BaseElementSlider'
import BackgroundSliderItem from './BackgroundSliderItem'

export default class BackgroundSlider extends BaseItemSlider {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="background-slider">
				<div className="background-slider__list" ref="slideList">
					{this.state.slideData.map((item, index) => <BackgroundSliderItem key={item.id} {...item}/>)}
				</div>
			</div>
		);
	}
}
