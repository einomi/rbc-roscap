import './BoxSlider.sass';

import Draggable from 'Draggable'

import BaseElementSlider from './BaseElementSlider'
import BoxSliderItem from './BoxSliderItem'
import Pager from './Pager'

export default class BoxSlider extends BaseElementSlider {
	componentDidMount() {
		super.componentDidMount();

		let self = this;

		let slideListDOMNode = ReactDOM.findDOMNode(this.refs.slideList);

		this.backgroundSlider = this.props.parent.refs['backgroundSlider'];
		this.backgroundSliderList = this.backgroundSlider.refs['slideList'];

		this._update();

		this.draggable = new Draggable(slideListDOMNode, {
			type: 'x',
			bounds: ReactDOM.findDOMNode(this.refs.slider),
			cursor: 'default',
			dragClickables: true,
			edgeResistance: 0.7,
			onDragStart: function() {
				document.body.classList.add('dragging');

				TweenMax.killTweensOf(slideListDOMNode);

				this.startX = this.x;
			},
			onDragEnd: function() {
				document.body.classList.remove('dragging');

				self._moveToNearestSlide();
			},
			onDrag: function() {
				TweenMax.set(self.backgroundSliderList, {x: this.x * self.BACKGROUND_SLIDER_POWER});
			}
		});
		this.draggable.startX = 0;
	}

	_update() {
		super._update();
		this._setBackgroundSliderPower();
	}

	_setBackgroundSliderPower() {
		this.BACKGROUND_SLIDER_POWER = this.backgroundSlider.slideWidth / this.slideWidth;
	}

	_moveToNearestSlide() {
		let POWER = Math.round(this.slideWidth / 3);

		let way = this.slideWidth * this.state.slideData.length;
		let slideNumber;

		let x = this.draggable.x;

		let direction = this.draggable.x < this.draggable.startX ? 'RIGHT' : 'LEFT';

		direction == 'RIGHT' ? x -= POWER : x += POWER;
		slideNumber = Math.round(-x * this.state.slideData.length / way);

		this.props.onChangeSlide(slideNumber, false, true);
	}

	render() {
		return (
			<div className="main-slider__box box-slider">
				<div className="box-slider__skin skin">
					<div className="box-slider__inner" ref="slider">
						<div className="box-slider__list" ref="slideList">
							{this.state.slideData.map((item, index) => {
									let isCurrent = this.state.currentSlide === item.id ? true : false;
									return <BoxSliderItem key={item.id} isCurrent={isCurrent} parentWidth={this.slideWidth} {...item} />
								}
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
