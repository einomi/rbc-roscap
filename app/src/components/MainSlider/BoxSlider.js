import React from 'react'

import BaseElementSlider from './BaseElementSlider'
import BoxSliderItem from './BoxSliderItem'
import Pager from './Pager'

export default class BackgroundSlider extends BaseElementSlider {
	render() {
		return (
			<div className="main-slider__box box-slider">
				<div className="box-slider__list" ref="slideList">
					{this.state.slideData.map((item, index) => <BoxSliderItem key={item.id} {...item}/>)}
				</div>
				<Pager currentSlide={this.state.currentSlide} slideData={this.state.slideData} onChangeSlide={this.props.onChangeSlide} />
			</div>
		);
	}
}
