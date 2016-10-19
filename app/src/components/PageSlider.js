import './PageSlider.sass'

import React from 'react'
import ReactDOM from 'react-dom'
import ScrollMagic from 'scrollmagic'
// import 'debug.addIndicators'

import PageSliderItem from './PageSliderItem'

export default class PageSlider extends React.Component {
	constructor(props) {
		super(props);

		this.availableItems = [
            {id: 0, refId: 'item0'},
            {id: 1, refId: 'item1'},
            {id: 2, refId: 'item2'},
            {id: 3, refId: 'item3'},
			{id: 4, refId: 'item4'}
        ];

		this.scrollController = new ScrollMagic.Controller({
			globalSceneOptions: {
				triggerHook: 'onLeave'
			}
		});

		this._addMainSlide();
	}
	_addMainSlide() {
		// Устанавливаем на первое место переданную в урле статью
		let itemId = this.props.route.itemId;
		for (var i = 0; i < this.availableItems.length; i++) {
			this.mainItem = this.availableItems[i];
			if (this.mainItem.id == itemId) {
				this.availableItems.splice(i, 1);
				this.state = {
					items: [this.mainItem]
				};
				break;
			}
		}
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
		let self = this;

		let scene = new ScrollMagic.Scene({
			triggerElement: slideDOMNode
		})
			.setPin(slideDOMNode)
			// .addIndicators() // add indicators (requires plugin)
			.addTo(this.scrollController)
			.on('enter leave', (event) => {
				let triggerSlideDOMNode = scene.triggerElement();
				let triggerSlideId = parseInt(triggerSlideDOMNode.dataset.id);

				let currentId;
				if (event.type == 'enter') {
					currentId = triggerSlideId;
					if (currentId === self.state.items[self.state.items.length - 1].id) {
						self._addNextSlide();
					}
				} else {
					for (var i = 0; i < self.state.items.length; i++) {
						var item = self.state.items[i];
						if (item.id === triggerSlideId) {
							currentId = self.state.items[i - 1].id;
							break;
						}
					}
				}
				history.pushState('', '', `/article/${currentId + 1}`);
			});
	}
	componentDidMount() {
		this._createScrollScene(this.mainItem);
	}
	render() {
		return (
			<div className="page-slider">
				{this.state.items.map((item, index) => {
					return <PageSliderItem key={item.id} pageId={item.id} ref={item.refId} />;
				})}
			</div>
		);
	}
}

