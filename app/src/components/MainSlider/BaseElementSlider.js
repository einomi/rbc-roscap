import React from 'react'
import ReactDOM from 'react-dom'

export default class BackgroundSliderItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentSlide: this.props.currentSlide,
			slideData: this.props.slideData
		};

		$(window).on('resize orientationchange', () => {
			this._update();
		});
	}

	componentDidMount() {
		this._initSlideWidth();
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			currentSlide: nextProps.currentSlide
		});
	}

	_update() {
		this._initSlideWidth();
		this._setSlide(this.state.currentSlide, true);
	}

	_initSlideWidth() {
		this.slideWidth = ReactDOM.findDOMNode(this.refs.slider).offsetWidth;
	}

	_setSlide(slideId, immediate) {
		let x = -(this.slideWidth * (slideId));

		if (!immediate) {
			TweenLite.to(this.refs.slideList, 0.8, {
				x: x,
				ease: Expo.easeInOut
			});
		} else {
			TweenLite.set(this.refs.slideList, {
				x: x,
			});
		}
	}
}
