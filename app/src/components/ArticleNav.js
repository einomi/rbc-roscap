import { Link } from 'react-router'

export default (props) =>
	<div>
		{props.items.map((item, index) => {
			if (index < 3) {
				return (
                    <div key={index} className="article__sidebar-more-info more-info">
                        <div className="more-info__title">{item.title}</div>
                        <a href={`/article/${item.id + 1}/`} className="more-info__button button _arrows">
                            <span className="button__caption">Узнать</span>
                            <svg className="button__arrows" preserveAspectRatio="xMidYMid" width="15" height="17" viewBox="0 0 15 17"> <path d="M8.792,16.127 L5.543,16.127 L10.910,8.500 L5.543,0.874 L8.792,0.874 L14.159,8.500 L8.792,16.127 ZM3.699,16.127 L0.450,16.127 L5.817,8.500 L0.450,0.874 L3.699,0.874 L9.066,8.500 L3.699,16.127 Z"/> </svg>
                        </a>
                    </div>
                );
			}
		})}
	</div>
