import './MainSliderHandler.sass';

import BoxSlider from './BoxSlider'
import BackgroundSlider from './BackgroundSlider'
import {BREAKPOINTS, MAX_HEIGHT_SM, MAX_HEIGHT_MD} from '../../config/media'

export default class MainSliderHandler extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			animating: false,
			currentSlide: 0,
			slideData: [
				{
					id: 0,
					title: 'Эффективное управление бизнесом',
					imageURL: 'media/img/background-slider/image1.jpg',
					text: 'Совместный проект РБК и банка «Российский капитал» ответит на актуальные вопросы малого и среднего бизнеса: как вести и развивать свое дело, зачем внедрять новые технологии, как оптимизировать расходы, с помощью каких инструментов наиболее эффективно управлять финансами и бизнес-процессами. Мы уверены, вы найдете много полезного в наших материалах.',
				},
				{
					id: 1,
					title: 'Как выбрать банк для обслуживания',
					imageURL: 'media/img/background-slider/image2.jpg',
					text: 'Как правильно выбрать финансового партнера для вашего бизнеса? Какие факторы нужно учитывать при выборе? Какую информацию узнавать? Ответы на эти вопросы читайте в нашем материале.',
					detailURL: '/article/1'
				},
				{
					id: 2,
					title: 'Как управлять финансами',
					imageURL: 'media/img/background-slider/image3.jpg',
					text: 'Как управлять финансами с помощью современных технологий, какие возможности интернет дает бизнесу для этой цели — об этом и многом другом читайте ниже.',
					detailURL: '/article/2'
				},
				{
					id: 3,
					title: 'Как приумножить капитал в бизнесе',
					imageURL: 'media/img/background-slider/image4.jpg',
					text: 'Деньги в бизнесе должны работать, даже когда просто лежат на счете. На рынке есть инструменты, которые позволят вам получить проценты даже ночью! Хотите узнать об этом подробнее?',
					detailURL: '/article/3'
				},
			]
		};

		this._keyDownHandler = (e) => {
			switch (e.keyCode) {
				case 37: // left arrow
					this._prev();
					break;
				case 39: // right arrow
					this._next();
					break;
			}
		};

		this._onWheelHandler = (e) => {
			// console.log(e);
			// console.log(e.deltaY);

			let delta = e.deltaY ? e.deltaY : -e.wheelDelta;

			let direction = delta > 0 ? 'FORWARD' : 'REVERSE';
			direction == 'FORWARD' ? this._next(true) : this._prev(true);
		};
	}

	componentDidMount() {
		window.addEventListener('keydown', this._keyDownHandler);
        if ('onwheel' in document) {
            // IE9+, FF17+, Ch31+
            window.addEventListener("wheel", this._onWheelHandler);
        } else if ('onmousewheel' in document) {
            // устаревший вариант события
            window.addEventListener("mousewheel", this._onWheelHandler);
        } else {
            // Firefox < 17
            window.addEventListener("MozMousePixelScroll", this._onWheelHandler);
        }
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this._keyDownHandler);
		if ('onwheel' in document) {
			// IE9+, FF17+, Ch31+
			window.removeEventListener("wheel", this._onWheelHandler);
		} else if ('onmousewheel' in document) {
			// устаревший вариант события
			window.removeEventListener("mousewheel", this._onWheelHandler);
		} else {
			// Firefox < 17
			window.removeEventListener("MozMousePixelScroll", this._onWheelHandler);
		}
	}

	_startAnimation() {
		this.setState({animating: true});
	}

	_endAnimation() {
		this.setState({animating: false});
	}

	_setSlide(slideId, forced, dragging) {
		if (this.state.animating && !dragging) {
		    return;
		}

		if (slideId == this.state.currentSlide && !dragging) {
			return;
		}

		if (slideId > this.state.slideData.length - 1 || slideId < 0) {
			return;
		}

		this._startAnimation();

		this.refs.boxSlider._setSlide(slideId);
		this.refs.backgroundSlider._setSlide(slideId);
		this.setState({currentSlide: slideId});
	}

	_next(forced) {
		this._setSlide(this.state.currentSlide + 1, forced);
	}

	_prev(forced) {
		this._setSlide(this.state.currentSlide - 1, forced);
	}

	render() {
		return (
			<div className="main-slider">
				<div className="skin _height100p">
					<div className="main-slider__head head">
						<div className="head__text-container">
							<div className="head__text-container-inner">
								<div className="head__title">Банк Российский Капитал:</div>
								<div className="head__text">решения для эффективного бизнеса</div>
							</div>
						</div>
						<div className="head__logos">
							<div className="head__logo _r-letter"></div>
							<div className="head__logo _roskapital"></div>
						</div>
					</div>
					<BackgroundSlider ref="backgroundSlider" currentSlide={this.state.currentSlide}
					                  slideData={this.state.slideData} />
					<BoxSlider ref="boxSlider" currentSlide={this.state.currentSlide} slideData={this.state.slideData}
					           onChangeSlide={this._setSlide.bind(this)} onAnimationEnd={this._endAnimation.bind(this)} parent={this} onMoreClick={this._next.bind(this)} />
					<div className="main-slider__social-links social-links">
						<a href="#" className="social-links__item">facebook</a>
						<a href="#" className="social-links__item">vkontakte</a>
						<a href="#" className="social-links__item">twitter</a>
					</div>
				</div>
				<div className="main-slider__license license">
					<div className="skin">
						<p className="license__text" dangerouslySetInnerHTML={{__html: 'Акционерный коммерческий банк &laquo;РОССИЙСКИЙ КАПИТАЛ&raquo; Генеральная лицензия ЦБ РФ № 2312 от 28 ноября 2014.'}}></p>
					</div>
				</div>
			</div>
		);
	}
}
