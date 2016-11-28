import {Link} from 'react-router'

import Button from '../Button'


export default class BoxSliderItem extends React.Component {
	componentDidMount() {
		this.slideDOMNode = ReactDOM.findDOMNode(this);
		this._initSlideWidth();

		this.listener = () => this._initSlideWidth();
		window.addEventListener('resize', this.listener);
		window.addEventListener('orientationchange', this.listener);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.listener);
		window.removeEventListener('orientationchange', this.listener);
	}

	_initSlideWidth() {
		this.slideDOMNode.setAttribute('style', `width: ${ReactDOM.findDOMNode(this).parentNode.parentNode.offsetWidth}px`);
	}

	render() {
		let button;
		if (this.props.id === 0) {
			button = <Button className="box-slider__button" arrows={true} onClick={this.props.onMoreClick}>Узнать</Button>;
		}
		else {
			button = (
				<Link to={this.props.detailURL}>
					<Button className="box-slider__button" arrows={true} white={true}>Подробнее</Button>
				</Link>
			);
		}

		return (
			<div className={classNames(`box-slider__item _${this.props.id + 1}`, {'_current': this.props.isCurrent})}
			     style={{zIndex: this.props.zIndex}}>
				{(() => {
					if (this.props.id !== 0) {
						return <div className="box-slider__number">лайфхак #{this.props.id}</div>;
					}
				})()}
				<div className="box-slider__content">
					<div className="box-slider__title">{this.props.title}</div>
					<div className="box-slider__text" dangerouslySetInnerHTML={{__html: this.props.text}}></div>
				</div>
				{button}
			</div>
		);
	}
}
