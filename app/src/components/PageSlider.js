import './PageSlider.sass'

import {Link} from 'react-router'
import ScrollMagic from 'scrollmagic'
import 'debug.addIndicators'

import PageSliderItem from './PageSliderItem'

export default class PageSlider extends React.Component {
	constructor(props) {
		super(props);

		this.items = [
			{
				id: 0,
				refId: 'item0',
				title: 'Как выбрать банк для обслуживания',
				excerpt: 'На российском банковском рынке работает много финансовых организаций, оказывающих услуги корпоративным клиентам. Чтобы выбрать правильный банк для обслуживания, нужно учесть ряд важных моментов. Эксперты советуют делать это в комплексе.',
			},
			{
				id: 1,
				refId: 'item1',
				title: 'Как управлять финансами',
				excerpt: 'Сегодня управлять финансами он-лайн предпочитают не только частные клиенты, но и корпоративные, особенно представители малого бизнеса. Для этого на рынке есть масса интересных решений',
			},
			{
				id: 2,
				refId: 'item2',
				title: 'Как приумножить капитал в бизнесе',
				excerpt: 'Деньги в бизнесе должны работать, причем не только капитал в обороте, но и денежные средства на счетах компании. Для этого на рынке есть финансовые продукты, позволяющие заметно повысить доходность дела.',
			},
			{
				id: 3,
				refId: 'item3',
				title: null,
				excerpt: null
			}
		];

		this.itemsInit = this.items.slice();

		this.itemsCount = this.items.length;

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
		for (var i = 0; i < this.state.items.length; i++) {
			var item = this.state.items[i];
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
		this._removeWheelListeners();
	}

	_removeWheelListeners() {
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

		for (var i = 0; i < this.items.length; i++) {
			if (this.items[i].id == itemId) {
				initItems.push(this.items[i]);
				this.items.splice(i, 1);
				break;
			}
		}

		initItems.push(this.items.shift());

		this.state = {
			items: initItems
		};
	}

	_addSlide() {
		if (!this.items.length) {
			return;
		}
		this.lastItem = this.items.shift();
		if (this.items.length === 0) {
		    this._removeWheelListeners();
		}
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
					// history.pushState(`article${currentId}`, '', `/article/${currentId + 1}`);
					this.props.router.push(`/article/${currentId + 1}`);
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
						if (index == this.itemsCount - 2) {
							isLast = true;
						}
						let isHidden = false;
						if (index == this.state.items.length - 1) {
							isHidden = true;
						}
						return (
							<PageSliderItem key={item.id} ref={item.refId} isLast={isLast} isHidden={isHidden}
							                onNext={this._onNextClickHandler.bind(this, index)} items={this.itemsInit} {...item} currentId={this.props.route.itemId} />
						);
					})}
				</div>
			</div>
		);
	}
}

