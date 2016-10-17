import React from 'react'
import classNames from 'classnames'

export default class Pager extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentSlide: this.props.currentSlide,
			slideData: this.props.slideData
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			currentSlide: nextProps.currentSlide
		});
	}

	render() {
		return (
			<div className="box-slider__pager pager">
				{this.state.slideData.map((item, index) => {
					if (index !== 0) {
						return <div key={item.id} onClick={this.props.onChangeSlide.bind(this, item.id)} className={classNames('pager__item', {'_active': this.state.currentSlide == item.id})}></div>;
					}
				})}
			</div>
		);
	}
}
