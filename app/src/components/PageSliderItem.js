import './Article.sass'

import React from 'react'
import classNames from 'classnames'

import Article1 from './Article1'
import Article2 from './Article2'
import Article3 from './Article3'
import Article4 from './Article4'
import Article5 from './Article5'
import Article6 from './Article6'
import Article7 from './Article7'

export default class PageSliderItem extends React.Component {
	_createArticle(id) {
		switch (id) {
			case 0:
				return <Article1 key={id} pageId={id}/>;
			case 1:
				return <Article2 key={id} pageId={id}/>;
			case 2:
				return <Article3 key={id} pageId={id}/>;
			case 3:
				return <Article4 key={id} pageId={id}/>;
			case 4:
				return <Article5 key={id} pageId={id}/>;
			case 5:
				return <Article6 key={id} pageId={id}/>;
			case 6:
				return <Article7 key={id} pageId={id}/>;
			default:
				throw `Error. Article with id ${id} not found.`;
		}
	}

	render() {
		return (
			<div className="page-slider__item" data-id={this.props.id}>
				<article className={classNames('article', {'_last': this.props.isLast})}>
					{this._createArticle(this.props.id)}
				</article>
			</div>
		);
	}
}
