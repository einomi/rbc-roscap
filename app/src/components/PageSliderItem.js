import React from 'react'
import { browserHistory } from 'react-router'

export default class PageSliderItem extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className={ `slide _${this.props.pageId + 1 }` } data-id={this.props.pageId}>
				<h1>Article { this.props.pageId + 1 }</h1>
			</div>
		);
	}
}
