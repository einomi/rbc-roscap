
import React from 'react'

export default class PageSliderItem extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className={ `page-slider__item _${this.props.pageId + 1 }` } data-id={this.props.pageId}>
				<h1>Article { this.props.pageId + 1 }</h1>
			</div>
		);
	}
}
