export default (props) =>
	<div className={classNames(props.className, 'button', {'_arrows': props.arrows, '_white': props.white})} onClick={props.onClick}>
		<span className="button__caption">{props.children}</span>
		<svg className="button__arrows" preserveAspectRatio="xMidYMid" width="15" height="17"
		     viewBox="0 0 15 17">
			<path
				d="M8.792,16.127 L5.543,16.127 L10.910,8.500 L5.543,0.874 L8.792,0.874 L14.159,8.500 L8.792,16.127 ZM3.699,16.127 L0.450,16.127 L5.817,8.500 L0.450,0.874 L3.699,0.874 L9.066,8.500 L3.699,16.127 Z"/>
		</svg>
	</div>
