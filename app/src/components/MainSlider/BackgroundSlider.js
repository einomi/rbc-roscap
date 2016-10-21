import './BackgroundSlider.sass';

import React from 'react'
import ReactDOM from 'react-dom'

import BaseItemSlider from './BaseElementSlider'
import BackgroundSliderItem from './BackgroundSliderItem'

export default class BackgroundSlider extends BaseItemSlider {
	constructor(props) {
		super(props);
		this.SLIDER_WIDTH_RATIO = 0.55;
	}

	_setSliderWidth() {
		this.sliderDOMNode.setAttribute('style', `width: ${Math.round(window.innerWidth * this.SLIDER_WIDTH_RATIO)}px`);
	}

	_update() {
		this._setSliderWidth();
		super._update();
	}

	componentDidMount() {
		this.sliderDOMNode = ReactDOM.findDOMNode(this);
		this._setSliderWidth();
		super.componentDidMount();
	}

	render() {
		return (
			<div className="background-slider" ref="slider">
				<div className="background-slider__list" ref="slideList">
					{this.state.slideData.map((item, index) => <BackgroundSliderItem key={item.id} {...item}/>)}
				</div>
			</div>
		);
	}
}
