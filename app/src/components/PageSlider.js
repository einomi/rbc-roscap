import './PageSlider.sass'

import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'
import ScrollMagic from 'scrollmagic'
import 'debug.addIndicators'

import PageSliderItem from './PageSliderItem'

export default class PageSlider extends React.Component {
	constructor(props) {
		super(props);

		this.availableItems = [
			{
				id: 0,
				refId: 'item0',
				title: 'Как выбрать банк для обслуживания',
				excerpt: 'В этом материале планируем рассказать, как выбирать банк по критериям - надежность, размер активов и капитала, рейтинги агентств и рейтинги в деловых СМИ, время работы на рынке, акционеры, и т.д. Во всех критериях делаем упор на преимущества банка "Российский капитал".'
			},
			{
				id: 1,
				refId: 'item1',
				title: 'Как выбрать банк для обслуживания',
				excerpt: 'В этом материале планируем рассказать, как выбирать банк по критериям - надежность, размер активов и капитала, рейтинги агентств и рейтинги в деловых СМИ, время работы на рынке, акционеры, и т.д. Во всех критериях делаем упор на преимущества банка "Российский капитал".'
			},
			{
				id: 2,
				refId: 'item2',
				title: 'Как выбрать банк для обслуживания',
				excerpt: 'В этом материале планируем рассказать, как выбирать банк по критериям - надежность, размер активов и капитала, рейтинги агентств и рейтинги в деловых СМИ, время работы на рынке, акционеры, и т.д. Во всех критериях делаем упор на преимущества банка "Российский капитал".'
			},
			{
				id: 3,
				refId: 'item3',
				title: 'Как выбрать банк для обслуживания',
				excerpt: 'В этом материале планируем рассказать, как выбирать банк по критериям - надежность, размер активов и капитала, рейтинги агентств и рейтинги в деловых СМИ, время работы на рынке, акционеры, и т.д. Во всех критериях делаем упор на преимущества банка "Российский капитал".'
			},
			{
				id: 4,
				refId: 'item4',
				title: 'Как выбрать банк для обслуживания',
				excerpt: 'В этом материале планируем рассказать, как выбирать банк по критериям - надежность, размер активов и капитала, рейтинги агентств и рейтинги в деловых СМИ, время работы на рынке, акционеры, и т.д. Во всех критериях делаем упор на преимущества банка "Российский капитал".'
			},
			{
				id: 5,
				refId: 'item5',
				title: 'Как выбрать банк для обслуживания',
				excerpt: 'В этом материале планируем рассказать, как выбирать банк по критериям - надежность, размер активов и капитала, рейтинги агентств и рейтинги в деловых СМИ, время работы на рынке, акционеры, и т.д. Во всех критериях делаем упор на преимущества банка "Российский капитал".'
			},
			{
				id: 6,
				refId: 'item6',
				title: 'Как выбрать банк для обслуживания',
				excerpt: 'В этом материале планируем рассказать, как выбирать банк по критериям - надежность, размер активов и капитала, рейтинги агентств и рейтинги в деловых СМИ, время работы на рынке, акционеры, и т.д. Во всех критериях делаем упор на преимущества банка "Российский капитал".'
			},
			{
				id: 7,
				refId: 'item7',
				title: 'Empty',
				excerpt: 'Empty'
			}
		];

		this.availableItemsCount = this.availableItems.length;

		this.scrollController = new ScrollMagic.Controller();
		this.firstEnter = true;
		this._initSlider();

		window.addEventListener('resize', this.scrollController.update);

		let wrapperDOMNode = document.querySelector('.wrapper');

		this._onWheelHandler = (e) => {
			if (this.scrollAnimating) {
				e.preventDefault();
				return;
			}

			let delta = e.deltaY ? e.deltaY : -e.wheelDelta;

			let scrollY = window.scrollY || window.pageYOffset;

			// console.log(scrollY);

			if (scrollY >= wrapperDOMNode.offsetHeight - window.innerHeight && delta > 0) {
				if (this.scrollCount > 5) {
					this.scrollAnimating = true;
					this._addSlide();
					this.scrollCount = 0;
				}
				this.scrollCount += 1;
			}
		};
	}

	componentDidMount() {
		for (let item of this.state.items) {
			this._createScrollScene(item);
		}

		this.scrollCount = 0;
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

	componentDidUpdate(prevProps, prevState) {
		if (this.state.items.length > prevState.items.length && this.lastItem) {
			this._createScrollScene(this.lastItem);
			this._scrollToSlide(this.state.items.length - 2);
		}
	}

	componentWillUnmount() {
		this.scrollController.destroy();
		window.removeEventListener('resize', this.scrollController.update);
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

	_onNextClickHandler(slideIndex) {
		let nextSlideIndex = slideIndex + 1;
		let newSlide = this.state.items[nextSlideIndex + 1];
		if (!newSlide) {
			this._addSlide();
		}
		this._scrollToSlide(nextSlideIndex);
	}

	_scrollToSlide(slideIndex) {
		let slideScrollTo = ReactDOM.findDOMNode(this.refs[this.state.items[slideIndex].refId]);
		TweenMax.to(window, 1, {
			scrollTo: {y: slideScrollTo, autoKill: false},
			ease: Power3.easeInOut,
			onComplete: () => this.scrollAnimating = false
		});
	}

	_initSlider() {
		// Добавляем два слайда на страницу
		let itemId = this.props.route.itemId;
		let initItems = [];

		for (var i = 0; i < this.availableItems.length; i++) {
			if (this.availableItems[i].id == itemId) {
				initItems.push(this.availableItems[i]);
				this.availableItems.splice(i, 1);
				break;
			}
		}

		initItems.push(this.availableItems.shift());

		this.state = {
			items: initItems
		};
	}

	_addSlide() {
		if (!this.availableItems.length) {
			return;
		}
		this.lastItem = this.availableItems.shift();
		this._addSlideToState(this.lastItem);
	}

	_addSlideToState(item) {
		let items = this.state.items.slice();
		items.push(item);
		this.setState({items: items});
	}

	_createScrollScene(item) {
		let refId = item.refId;
		let slideDOMNode = ReactDOM.findDOMNode(this.refs[refId]);

		let elementsToHide = slideDOMNode.querySelectorAll('[data-hide-on-leave]');

		new ScrollMagic.Scene({
			triggerElement: slideDOMNode,
			triggerHook: 0.5,
			offset: 50,
			duration: slideDOMNode.offsetHeight
		})
		// .addIndicators() // add indicators (requires plugin)
			.addTo(this.scrollController)
			.on('enter', () => {
				// TweenMax.to(elementsToHide, 0.5, {y: 0, autoAlpha: 1, ease: Power3.easeInOut});

				let currentId = parseInt(slideDOMNode.dataset.id);
				if (currentId !== this.props.route.itemId || !this.firstEnter) {
					history.pushState(`article${currentId}`, '', `/article/${currentId + 1}`);
					this.firstEnter = false;
				}
			})
			.on('leave', (e) => {
				if (e.scrollDirection == 'FORWARD') {
					TweenMax.to(elementsToHide, 0.4, {y: -50, autoAlpha: 0, ease: Power3.easeInOut});
				}
			});
	}

	render() {
		return (
			<div className="page-slider">
				<header className="header">
					<div className="header__skin skin">
						<Link to="/" className="header__link">На главную</Link>
						<div className="header__head head">
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
					</div>
				</header>
				<div className="page-slider__items">
					{this.state.items.map((item, index) => {
						let isLast = false;
						if (index == this.availableItemsCount - 2) {
							isLast = true;
						}
						let isHidden = false;
						if (index == this.state.items.length - 1) {
							isHidden = true;
						}
						return (
							<PageSliderItem key={item.id} ref={item.refId} isLast={isLast} isHidden={isHidden}
							                onNext={this._onNextClickHandler.bind(this, index)} {...item} />
						);
					})}
				</div>
			</div>
		);
	}
}

