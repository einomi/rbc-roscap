import './Share.sass'

import React from 'react'
import ReactDOM from 'react-dom'
import ScrollMagic from 'scrollmagic'
// import 'debug.addIndicators'

export default class ScrollAnimation extends React.Component {
	constructor(props) {
		super(props);
		this.scrollController = new ScrollMagic.Controller();

		switch (this.props.fromX) {
			case 'left':
				this.xOffset = -100;
				break;
			case 'right':
				this.xOffset = 100;
				break;
			default:
				this.xOffset = 0;
		}

		switch (this.props.fromY) {
			case 'top':
				this.yOffset = -100;
				break;
			case 'bottom':
				this.yOffset = 100;
				break;
			default:
				this.yOffset = 0;
		}
	}
	componentDidMount() {
		let element = ReactDOM.findDOMNode(this);

		new ScrollMagic.Scene({
			triggerElement: element,
			triggerHook: 0.6
		})
			// .addIndicators() // add indicators (requires plugin)
			.addTo(this.scrollController)
			.on('enter', () => {
				if (!this.isShown) {
                    TweenMax.fromTo(element, 0.5, {autoAlpha: 0, x: this.xOffset, y: this.yOffset}, {autoAlpha: 1, x: 0, y: 0});
                    this.isShown = true;
				}
			});

		new ScrollMagic.Scene({
			triggerElement: element,
			triggerHook: 1,
		})
			// .addIndicators() // add indicators (requires plugin)
			.addTo(this.scrollController)
			.on('leave', () => {
				if (this.isShown) {
					TweenMax.set(element, {autoAlpha: 0});
					this.isShown = false;

				}
			});
	}

	componentWillUnmount() {
		this.scrollController.destroy();
	}

	render() {
		return (
			<div style={{visibility: 'hidden', opacity: 0, willChange: 'transform'}}>
				{this.props.children}
			</div>
		);
	}
}


