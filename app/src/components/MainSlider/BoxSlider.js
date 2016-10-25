import './BoxSlider.sass';

import React from 'react'
import ReactDOM from 'react-dom'

import BaseElementSlider from './BaseElementSlider'
import BoxSliderItem from './BoxSliderItem'
import Pager from './Pager'

export default class BackgroundSlider extends BaseElementSlider {

	componentDidMount() {
		super.componentDidMount();
		let slideListDOMNode = ReactDOM.findDOMNode(this.refs.slideList);
		var self = this;
		this.draggable = new Draggable(slideListDOMNode, {
			type: 'x',
			bounds: ReactDOM.findDOMNode(this.refs.slider),
			// trigger: this.$element,
			dragClickables: true,
			edgeResistance: 0.95,
			onPress: function () {
				TweenMax.killTweensOf(slideListDOMNode);
			},
			onDragStart: function () {
				// App.dom.$html.addClass('dragging');
				// self.$slidesContainer.removeClass('draggable');
				this.startX = this.x;
				TweenMax.killTweensOf(self.$slidesContainer);
				// this.update(true);
			},
			onDragEnd: function () {
				// App.dom.$html.removeClass('dragging');
				// self.$slidesContainer.addClass('draggable');

				// self._moveDraggableToNearestPosition();
				// console.log('drag end');

				// self.props.onChangeSlide(4);
				self._moveToNearestSlide();
				this.prevX = this.x;
			},
			onDrag: function () {
				// var way = this.maxX - this.minX;
				// var ratio = this.x / way;
				// ratio = ratio < -1 ? -1 : ratio;
				// ratio = ratio > 1 ? 1 : ratio;

				// TweenMax.set(self.$rainbow, {x: (ratio * RAINBOW_PARALLAX_POWER) + '%'});
			}
		});
		this.draggable.prevX = 0;

		// window.addEventListener('resize', () => this._setWidth())
		console.log(this.slideWidth);
	}

	// _setWidth() {
	// 	this.setState({sliderWidth: ReactDOM.findDOMNode(this).offsetWidth});
	// }

	_moveToNearestSlide() {
		let POWER = Math.round(this.slideWidth / 3);

		let way = this.draggable.maxX - this.draggable.minX;
		let slideNumber;

		if (this.draggable.x < this.draggable.startX) {
			slideNumber = Math.round((Math.abs(this.draggable.x) + POWER) * this.state.slideData.length / way);
		} else {
			let offsetRatio = (Math.abs(this.draggable.x + POWER)) * this.state.slideData.length / way;
			if (offsetRatio < 0.5) {
				slideNumber = Math.floor(offsetRatio);
			} else {
				slideNumber = Math.round(offsetRatio);
			}
		}

		this.props.onChangeSlide(slideNumber, true);
	}

	render() {
		return (
			<div className="main-slider__box box-slider">
				<div className="box-slider__skin skin">
					<div className="box-slider__inner" ref="slider">
						<div className="box-slider__list" ref="slideList">
							{this.state.slideData.map((item, index) =>
								<BoxSliderItem key={item.id} parentWidth={this.slideWidth} {...item} />
							)}
						</div>
						<Pager currentSlide={this.state.currentSlide} slideData={this.state.slideData}
						       onChangeSlide={this.props.onChangeSlide}/>
					</div>
				</div>
			</div>
		);
	}
}
