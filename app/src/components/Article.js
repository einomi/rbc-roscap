import './Article.sass'

import React from 'react'

import Article1 from './Article1'

export default class PageSliderItem extends React.Component {
	constructor(props) {
		super(props);
	}

	_getArticle(id) {
		switch (id) {
			case 0:
				return <Article1 />;
			default:
				throw `Error. Article with id ${id} not found.`;
		}
	}

	render() {
		return (
			<article className="article">
				{this._getArticle(this.props.pageId)}
			</article>
		);
	}
}
