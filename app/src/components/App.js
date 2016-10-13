import React from 'react';

export default class App extends React.Component {
	constructor() {
		super();

		// SVG Sprites
		function addSVGSprite(data) {
			$('<div style="width:0;height:0;overflow:hidden"></div>')
				.prependTo(document.body)
				.html(typeof XMLSerializer != 'undefined'
					? (new XMLSerializer()).serializeToString(data.documentElement)
					: $(data.documentElement).html()
				);
		}

		$.get('/media/svg/sprite.svg', addSVGSprite);
	}

	render() {
		return (
			<div>
                {this.props.children}
			</div>
		);
	}
}
