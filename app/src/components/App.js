import RBCMenu from './RBCMenu'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


export default class App extends React.Component {
	render() {
		return (
			<div>
				<RBCMenu />
				{this.props.children}
				{/*<ReactCSSTransitionGroup*/}
					{/*component="div"*/}
					{/*transitionName="example"*/}
					{/*transitionEnterTimeout={500}*/}
					{/*transitionLeaveTimeout={100}*/}
				{/*>*/}
					{/*{this.props.children && React.cloneElement(this.props.children, {*/}
						{/*key: this.props.location.pathname*/}
					{/*})}*/}
				{/*</ReactCSSTransitionGroup>*/}
			</div>
		);
	}
}
