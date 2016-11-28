import './MoreArticles.sass'

import {Link} from 'react-router'

export default (props) =>
	<div className="article__other-articles other-articles" data-hide-on-leave>
		<div className="skin">
			<div className="other-articles__items">
				{props.items.map((item, index) => {
					{/*if (props.currentId !== item.id && index < 3) {*/}
					if (index < 3) {
						return (
							<div key={index} className="other-articles__item">
								<div className="other-articles__item-inner">
									<div className="other-articles__item-title">{item.title}</div>
									<a href={`/article/${item.id + 1}`} className="other-articles__item-button button _arrows">
										<span className="button__caption">Узнать</span>
										<svg className="button__arrows" preserveAspectRatio="xMidYMid" width="15"
										     height="17" viewBox="0 0 15 17">
											<path d="M8.792,16.127 L5.543,16.127 L10.910,8.500 L5.543,0.874 L8.792,0.874 L14.159,8.500 L8.792,16.127 ZM3.699,16.127 L0.450,16.127 L5.817,8.500 L0.450,0.874 L3.699,0.874 L9.066,8.500 L3.699,16.127 Z"/>
										</svg>
									</a>
								</div>
							</div>
						);
					}
				})}
			</div>
		</div>
	</div>
