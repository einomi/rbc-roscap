import React from 'react'

import BoxSlider from './BoxSlider'
import BackgroundSlider from './BackgroundSlider'

export default class MainSlider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentSlide: 0,
			slideData: [
				{
					id: 0,
					title: 'Эффективное управление бизнесом',
					imageURL: 'media/img/background-slider/image1.jpg'
				},
				{
					id: 1,
					title: 'Как выбрать банк для обслуживания',
					imageURL: 'media/img/background-slider/image2.jpg'
				},
				{
					id: 2,
					title: 'Как получить финансы на развитие малого бизнеса',
					imageURL: 'media/img/background-slider/image3.jpg'
				},
				{
					id: 3,
					title: 'Как развивать бизнес с помощью финансовых продуктов',
					imageURL: 'media/img/background-slider/image4.jpg'
				},
				{
					id: 4,
					title: 'Как сэкономить на ведении бизнеса',
					imageURL: 'media/img/background-slider/image5.jpg'
				},
				{
					id: 5,
					title: 'Как эффективнее контролировать бизнес-процессы',
					imageURL: 'media/img/background-slider/image6.jpg'
				},
				{
					id: 6,
					title: 'Как управлять финансами',
					imageURL: 'media/img/background-slider/image7.jpg'
				},
				{
					id: 7,
					title: 'Как преумножить капитал в бизнесе',
					imageURL: 'media/img/background-slider/image8.jpg'
				}
			]
		};
	}

	_onWheel(e) {
		let direction = e.deltaY > 0 ? 'FORWARD' : 'REVERSE';

		direction == 'FORWARD' ? this._setSlide(this.state.currentSlide + 1) : this._setSlide(this.state.currentSlide - 1);
	}

	_setSlide(slideId) {
		if (slideId == this.state.currentSlide || slideId > this.state.slideData.length - 1 || slideId < 0) {
			return;
		}

		this.refs.boxSlider._setSlide(slideId);
		this.refs.backgroundSlider._setSlide(slideId);
		this.setState({currentSlide: slideId});
	}

	_next() {
		this.refs.boxSlider._next();
		this.refs.backgroundSlider._next();
		this.setState({currentSlide: this.state.currentSlide += 1});
	}

	_previous() {
		this.refs.boxSlider._prev();
		this.refs.backgroundSlider._prev();
		this.setState({currentSlide: this.state.currentSlide -= 1});
	}

	render() {
		return (
			<div className="main-slider" onWheel={this._onWheel.bind(this)}>
				<BackgroundSlider ref="backgroundSlider" currentSlide={this.state.currentSlide} slideData={this.state.slideData}/>
				<BoxSlider ref="boxSlider" currentSlide={this.state.currentSlide} slideData={this.state.slideData} onChangeSlide={this._setSlide.bind(this)}/>
			</div>
		);
	}
}
