import './BackgroundSlider.sass';

import BaseItemSlider from './BaseElementSlider'
import BackgroundSliderItem from './BackgroundSliderItem'
import { BREAKPOINTS } from '../../config/media'

export default class BackgroundSlider extends BaseItemSlider {
	constructor(props) {
		super(props);
		this.SLIDER_WIDTH_RATIO = 0.55;
		this.SLIDER_WIDTH_RATIO_MOBILE = 1;
	}

	_setSliderWidth() {
		if (window.innerWidth <= BREAKPOINTS.SM) {
			this.sliderDOMNode.setAttribute('style', `width: ${BREAKPOINTS.SM}px`);
		} else {
            let ratio = window.innerWidth > BREAKPOINTS.MD ? this.SLIDER_WIDTH_RATIO : this.SLIDER_WIDTH_RATIO_MOBILE;
			this.sliderDOMNode.setAttribute('style', `width: ${Math.round(window.innerWidth * ratio)}px`);
		}
	}

	_update() {
		this._setSliderWidth();
		super._update();
	}

	componentDidMount() {
		this.sliderDOMNode = ReactDOM.findDOMNode(this.refs.slider);
		this._setSliderWidth();
		super.componentDidMount();
	}

	render() {
		return (
			<div className="background-slider">
                <div className="background-slider__inner" ref="slider">
                    <div className="background-slider__list" ref="slideList">
                        {this.state.slideData.map((item, index) => <BackgroundSliderItem key={item.id} {...item}/>)}
                    </div>
                </div>
			</div>
		);
	}
}
