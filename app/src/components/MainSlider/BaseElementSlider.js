import React from 'react'
import ReactDOM from 'react-dom'

export default class BackgroundSliderItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentSlide: this.props.currentSlide,
			slideData: this.props.slideData
		};

		let listener = this._update.bind(this);
		window.addEventListener('resize', listener);
		window.addEventListener('orientationchange', listener);
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
		}
	}
}
