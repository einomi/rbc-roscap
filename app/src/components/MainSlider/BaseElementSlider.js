import React from 'react'
import ReactDOM from 'react-dom'

export default class BackgroundSliderItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentSlide: this.props.currentSlide,
			slideData: this.props.slideData
		};
	}

	componentDidMount() {
		this.slideWidth = ReactDOM.findDOMNode(this).offsetWidth;
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			currentSlide: nextProps.currentSlide
		});
	}

	_setSlide(slideId) {
		// let steps = this.state.currentSlide + slideId;

		// console.log(slideId);
		console.log(slideId, -(this.slideWidth * (slideId)));

		TweenMax.to(this.refs.slideList, 1, {
			x: -(this.slideWidth * (slideId)),
			ease: Power3.easeInOut
		});
	}

	_next() {
		if (this.state.currentSlide == this.state.slideData.length - 1) {
			return;
		}
		TweenMax.to(this.refs.slideList, 1, {
			x: -(this.slideWidth * (this.state.currentSlide + 1)),
			ease: Power3.easeInOut
		});
	}

	_prev() {
		if (this.state.currentSlide === 0) {
			return;
		}
		TweenMax.to(this.refs.slideList, 1, {
			x: -(this.slideWidth * (this.state.currentSlide - 1)),
			ease: Power3.easeInOut
		});
	}
}
