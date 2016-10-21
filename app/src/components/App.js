import './App.sass'

import React from 'react'

import RBCMenu from './RBCMenu'

export default class App extends React.Component {
	constructor() {
		super();

		// SVG Sprites
		// function addSVGSprite(data) {
		// 	$('<div style="width:0;height:0;overflow:hidden"></div>')
		// 		.prependTo(document.body)
		// 		.html(typeof XMLSerializer != 'undefined'
		// 			? (new XMLSerializer()).serializeToString(data.documentElement)
		// 			: $(data.documentElement).html()
		// 		);
		// }
        //
		// $.get('/media/svg/sprite.svg', addSVGSprite);
	}

	render() {
		return (
			<div>
				<RBCMenu />
                {this.props.children}
			</div>
		);
	}
}
