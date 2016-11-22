import { Link } from 'react-router'

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
				<Link to={this.props.detailURL} className={classNames('box-slider__button', 'button', '_arrows', {'_white': this.props.id > 0})}>
					<span className="button__caption">{ this.props.id === 0 ? 'Узнать' : 'Подробнее'}</span>
					<svg className="button__arrows" preserveAspectRatio="xMidYMid" width="15" height="17" viewBox="0 0 15 17"> <path d="M8.792,16.127 L5.543,16.127 L10.910,8.500 L5.543,0.874 L8.792,0.874 L14.159,8.500 L8.792,16.127 ZM3.699,16.127 L0.450,16.127 L5.817,8.500 L0.450,0.874 L3.699,0.874 L9.066,8.500 L3.699,16.127 Z"/> </svg>
				</Link>
			</div>
		);
	}
}
