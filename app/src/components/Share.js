import './Share.sass'

import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'

export default class Share extends React.Component {
	componentDidMount() {
		this.container = ReactDOM.findDOMNode(this.refs.container);
		Ya.share2(this.container, {
			theme: {
				services: 'vkontakte,facebook,twitter'
			}
		});
	}

	render() {
		return (
			<div className={classNames(['share', this.props.className])}>
				<div className="share__title">ПОДЕЛИТЬСЯ</div>
				<div className="share__container" ref="container"></div>
			</div>
		);
	}
}


