import './PageSlider.sass'

import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import ScrollMagic from 'scrollmagic'
import 'debug.addIndicators'

import PageSliderItem from './PageSliderItem'

export default class PageSlider extends React.Component {
	constructor(props) {
		super(props);

		this.availableItems = [
			{id: 0, refId: 'item0'},
			{id: 1, refId: 'item1'},
			{id: 2, refId: 'item2'},
			{id: 3, refId: 'item3'},
			{id: 4, refId: 'item4'},
			{id: 5, refId: 'item5'},
			{id: 6, refId: 'item6'}
		];

		this.availableItemsCount = this.availableItems.length;
		this.scrollController = new ScrollMagic.Controller();
		this.firstEnter = true;
		this._initSlider();
	}

	componentDidMount() {
		// console.log(this.state);
		for (let item of this.state.items) {
			this._createScrollScene(item);
		}
	}

	componentWillUnmount() {
		// console.log('unmount');
		this.scrollController.destroy();
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

	_addNextSlide() {
		if (!this.availableItems.length) {
			return;
		}
		let item = this.availableItems.shift();
		this._addSlideToState(item);
		this._createScrollScene(item);
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

		let scene = new ScrollMagic.Scene({
			triggerElement: slideDOMNode,
			triggerHook: 0.5,
			offset: 50,
			duration: slideDOMNode.offsetHeight
		})
			// .setPin(slideDOMNode)
			.addIndicators() // add indicators (requires plugin)
			.addTo(this.scrollController)
			.on('enter', () => {
				TweenLite.to(elementsToHide, 0.5, {y: 0, autoAlpha: 1, ease: Power3.easeInOut});
                let triggerSlideId = parseInt(slideDOMNode.dataset.id);
                let currentId = triggerSlideId;
				// console.log(currentId, this.props.route.itemId);
				if (currentId !== this.props.route.itemId || !this.firstEnter) {
					// console.log('history update');
                    history.pushState(`article${currentId}`, '', `/article/${currentId + 1}`);
					this.firstEnter = false;
				}
                if (currentId === this.state.items[this.state.items.length - 1].id) {
                    this._addNextSlide();
                }
			})
			.on('leave', () => {
                TweenLite.to(elementsToHide, 0.5, {y: -50, autoAlpha: 0, ease: Power3.easeInOut});
			});

	}

	// _createScrollScene(item) {
	// 	let refId = item.refId;
	// 	let slideDOMNode = ReactDOM.findDOMNode(this.refs[refId]);
    //
	// 	let scene = new ScrollMagic.Scene({
	// 		triggerElement: slideDOMNode,
	// 		triggerHook: 'onEnter',
	// 		offset: 100,
	// 		duration: slideDOMNode.offsetHeight
	// 	})
	// 		// .setPin(slideDOMNode)
	// 		.addIndicators() // add indicators (requires plugin)
	// 		.addTo(this.scrollController)
	// 		.on('enter leave', (e) => {
    //
	// 			if (e.type == 'leave') {
	// 			    console.log('leave');
	// 			}
    //
	// 			// let triggerSlideDOMNode = scene.triggerElement();
	// 			// let triggerSlideId = parseInt(triggerSlideDOMNode.dataset.id);
     //            //
	// 			// let currentId;
	// 			// if (event.type == 'enter') {
	// 			// 	currentId = triggerSlideId;
	// 			// 	if (currentId === this.state.items[this.state.items.length - 1].id) {
	// 			// 		this._addNextSlide();
	// 			// 	}
	// 			// } else {
	// 			// 	for (var i = 0; i < this.state.items.length; i++) {
	// 			// 		var item = this.state.items[i];
	// 			// 		if (item.id === triggerSlideId) {
	// 			// 			currentId = this.state.items[i - 1].id;
	// 			// 			break;
	// 			// 		}
	// 			// 	}
	// 			// }
	// 			// history.pushState(`article${currentId}`, '', `/article/${currentId + 1}`);
	// 		});
	// }

	render() {
		return (
			<div className="page-slider">
				<header className="header">
                    <div className="header__skin skin">
                        <Link to="/" className="header__link">На главную</Link>
                        <div className="header__head head">
                            <div className="head__text-container">
                                <div className="head__text-container-inner">
                                    <div className="head__title">Банк Российский Капитал: </div>
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
	                    if (index === this.availableItemsCount - 1) {
	                        isLast = true;
	                    }
                        return (
                            <PageSliderItem key={item.id} ref={item.refId} isLast={isLast} {...item} />
                        );
                    })}
				</div>
			</div>
		);
	}
}

