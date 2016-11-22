import RBCMenu from './RBCMenu'

export default class App extends React.Component {
	constructor() {
		super();
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
