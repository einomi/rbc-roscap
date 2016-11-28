import './Article.sass'

import { Link } from 'react-router'
import MoreArticles from './MoreArticles'
import ScrollAnimation from './ScrollAnimation'

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
				return <Article1 key={id} pageId={id} items={this.props.items} />;
			case 1:
				return <Article2 key={id} pageId={id} items={this.props.items} />;
			case 2:
				return <Article3 key={id} pageId={id} items={this.props.items} />;
			case 3:
				return <Article4 key={id} pageId={id} items={this.props.items} />;
			case 4:
				return <Article5 key={id} pageId={id} items={this.props.items} />;
			case 5:
				return <Article6 key={id} pageId={id} items={this.props.items} />;
			case 6:
				return <Article7 key={id} pageId={id} items={this.props.items} />;
			default:
				break;
		}
	}

	_onNextHandler(e) {
		this.props.onNext();
	}

	render() {
		return (
            <article className={classNames('article', {'_hidden': this.props.isHidden})} data-id={this.props.id}>

	            <div className={`article__intro _${this.props.id + 1}`}></div>

	            <div className="skin">
		            <header className="article__header">
			            <h1 className="article__title">{this.props.title}</h1>
			            <p className="article__header-text">{this.props.excerpt}</p>
			            <div className="article__header-info">
				            <div className="article__header-info-number">лайфхак #{this.props.id + 1}</div>
				            <Link to="/" className="article__header-info-link">смотреть все</Link>
			            </div>
		            </header>
	            </div>

                {this._createArticle(this.props.id)}

	            <ScrollAnimation fromY="bottom" className="skin">
		            <MoreArticles currentId={this.props.currentId} items={this.props.items} />
	            </ScrollAnimation>

	            <div className={classNames('article__next-wrapper', {'_hidden': this.props.isLast})}>
		            <div className="article__next" data-hide-on-leave onClick={(e) => this._onNextHandler(e)}>Следующий лайфхак</div>
	            </div>

            </article>
		);
	}
}
