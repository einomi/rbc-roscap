import React from 'react'

export default class BoxSliderItem extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className={`box-slider__item _${this.props.id + 1}`} style={{zIndex: this.props.zIndex}}>
				{(() => {
					if (this.props.id !== 0) {
						return <div className="box-slider__number">Лайфхак #{this.props.id}</div>;
					}
				})()}
                <div className="box-slider__title">{this.props.title}</div>
				<div className="box-slider__text" dangerouslySetInnerHTML={{__html: this.props.text}}></div>
				<a href="#" className="box-slider__button button">Узнать</a>
			</div>
		);
	}
}
