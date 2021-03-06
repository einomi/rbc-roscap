import './Share.sass'

import ScrollMagic from 'scrollmagic'
import 'debug.addIndicators'

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

		this.isShown = false;

		window.addEventListener('resize', this.scrollController.update);
	}

	componentDidMount() {
		let element = ReactDOM.findDOMNode(this);

		new ScrollMagic.Scene({
			triggerElement: element,
			triggerHook: 1
		})
		// .addIndicators() // add indicators (requires plugin)
			.addTo(this.scrollController)
			.on('enter', () => {
				if (!this.isShown) {
					TweenMax.fromTo(element, 0.5, {autoAlpha: 0, x: this.xOffset, y: this.yOffset}, {
						autoAlpha: 1,
						x: 0,
						y: 0
					});
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
		window.removeEventListener('resize', this.scrollController.update);
	}

	render() {
		return (
			<div style={{visibility: 'hidden', opacity: 0, willChange: 'transform', position: 'relative', zIndex: 1}}>
				{this.props.children}
			</div>
		);
	}
}


