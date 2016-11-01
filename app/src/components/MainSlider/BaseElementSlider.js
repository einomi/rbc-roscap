import React from 'react'
import ReactDOM from 'react-dom'

export default class BaseElementSlider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentSlide: this.props.currentSlide,
			slideData: this.props.slideData
		};

		this.listener = () => this._update();
		window.addEventListener('resize', this.listener);
		window.addEventListener('orientationchange', this.listener);
	}

	componentDidMount() {
		this._initSlideWidth();
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			currentSlide: nextProps.currentSlide
		});
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.listener);
		window.removeEventListener('orientationchange', this.listener);
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

		this.props.onAnimationStart();

		if (!immediate) {
			TweenMax.to(this.refs.slideList, 0.8, {
				x: x,
				ease: Expo.easeInOut,
				onComplete: () => this.props.onAnimationEnd()
			});
		} else {
			TweenMax.set(this.refs.slideList, {
				x: x,
			});
			this.props.onAnimationEnd();
		}
	}
}
