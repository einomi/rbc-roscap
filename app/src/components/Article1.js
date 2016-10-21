import React from 'react'
import { Link } from 'react-router'
import ScrollAnimation from './ScrollAnimation'

import Share from './Share'

export default (props) => (
	<div>
		<div className={`article__intro _${props.pageId + 1}`}></div>

		<div className="skin">
			<header className="article__header">
				<h1 className="article__title">Как выбрать банк <br/>для обслуживания</h1>
				<p className="article__header-text">В этом материале планируем рассказать, как выбирать банк по
					критериям - надежность, размер активов и капитала, рейтинги агентств и рейтинги в деловых СМИ, время
					работы на рынке, акционеры, и т.д. Во всех критериях делаем упор на преимущества банка "Российский
					капитал".</p>
				<div className="article__header-info">
					<div className="article__header-info-number">лайфхак #{props.pageId + 1}</div>
					<Link to="/" className="article__header-info-link">смотреть все</Link>
				</div>
			</header>
		</div>

		<div className="article__content">

			<div className="skin">
				<div className="article__content-inner">

					<aside className="article__sidebar">
						<div className="article__sidebar-image">
							<img src="/media/img/articles/article1-thumb.jpg" alt=""/>
						</div>
						<ScrollAnimation fromX="left">
							<div className="article__sidebar-more-info more-info">
								<div className="more-info__title">Как получить финансы на развитие малого бизнеса</div>
								<a href="#" className="more-info__button button _arrows">
									<span className="button__caption">Узнать</span>
									<svg className="button__arrows" preserveAspectRatio="xMidYMid" width="15" height="17" viewBox="0 0 15 17"> <path d="M8.792,16.127 L5.543,16.127 L10.910,8.500 L5.543,0.874 L8.792,0.874 L14.159,8.500 L8.792,16.127 ZM3.699,16.127 L0.450,16.127 L5.817,8.500 L0.450,0.874 L3.699,0.874 L9.066,8.500 L3.699,16.127 Z"/> </svg>
								</a>
							</div>
							<div className="article__sidebar-more-info more-info">
								<div className="more-info__title">Как развивать бизнес с помощью финансовых продуктов</div>
								<a href="#" className="more-info__button button _arrows">
									<span className="button__caption">Узнать</span>
									<svg className="button__arrows" preserveAspectRatio="xMidYMid" width="15" height="17" viewBox="0 0 15 17"> <path d="M8.792,16.127 L5.543,16.127 L10.910,8.500 L5.543,0.874 L8.792,0.874 L14.159,8.500 L8.792,16.127 ZM3.699,16.127 L0.450,16.127 L5.817,8.500 L0.450,0.874 L3.699,0.874 L9.066,8.500 L3.699,16.127 Z"/> </svg>
								</a>
							</div>
							<div className="article__sidebar-more-info more-info">
								<div className="more-info__title">Как сэкономить на ведении бизнеса</div>
								<a href="#" className="more-info__button button _arrows">
									<span className="button__caption">Узнать</span>
									<svg className="button__arrows" preserveAspectRatio="xMidYMid" width="15" height="17" viewBox="0 0 15 17"> <path d="M8.792,16.127 L5.543,16.127 L10.910,8.500 L5.543,0.874 L8.792,0.874 L14.159,8.500 L8.792,16.127 ZM3.699,16.127 L0.450,16.127 L5.817,8.500 L0.450,0.874 L3.699,0.874 L9.066,8.500 L3.699,16.127 Z"/> </svg>
								</a>
							</div>
						</ScrollAnimation>
					</aside>

					<div className="article__main">
						<div className="article__section">
							<p className="article__text text">This is Photoshop's version of Lorem Ipsum. Proin gravida
								nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
								elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
								vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
								tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
								Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
								himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a
								augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.</p>
							<p className="article__text text">This is Photoshop's version of Lorem Ipsum. Proin gravida
								nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
								elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
								vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
								tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
								Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
								himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a
								augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.
								Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa
								nisl quis neque. Suspendisse in orci enim.</p>
						</div>
						<div className="article__section">
							<h2 className="article__subtitle">Подзаголовок</h2>
							<p className="article__text text">This is Photoshop's version of Lorem Ipsum. Proin gravida
								nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
								elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
								vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
								tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
								Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
								himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a
								augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. </p>
							<p className="article__text text">This is Photoshop's version of Lorem Ipsum. Proin gravida
								nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
								elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
								vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
								tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
								Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
								himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a
								augue. </p>
						</div>
						<div className="article__section">
							<h2 className="article__subtitle">Подзаголовок</h2>
							<p className="article__text text">This is Photoshop's version of Lorem Ipsum. Proin gravida
								nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
								elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
								vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
								tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
								Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
								himenaeos. </p>
						</div>
					</div>{/*.article__main */}

				</div>{/*.article__content-inner*/}
			</div>{/*.skin*/}

			<ScrollAnimation fromX="right">
                <div className="skin">
                    <div className="article__emphasis emphasis">
                        <div className="emphasis__headline">Комментарий эксперта</div>
                        <div className="emphasis__content">
                            <div className="emphasis__text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.</div>
                        </div>
                    </div>
                </div>
			</ScrollAnimation>

			<div className="skin">

				<div className="article__content-inner">
					<aside className="article__sidebar">
						<div className="article__offer offer">
							<div className="offer__head">
								<div className="offer__logos"></div>
								<div className="offer__title">Специальное
									предложение</div>
							</div>
							<div className="offer__content">
								<div className="offer__text">This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</div>
								<div className="offer__more">Подробнее на <a href="http://roscap.ru" target="_blank" className="offer__link link">ROSCAP.RU</a></div>
							</div>
						</div>
					</aside>

					<div className="article__main">
						<div className="article__section">
							<p className="article__text text">This is Photoshop's version of Lorem Ipsum. Proin gravida
								nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
								elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
								vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
								tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
								Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
								himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a
								augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.</p>
							<p className="article__text text">This is Photoshop's version of Lorem Ipsum. Proin gravida
								nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
								elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
								vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
								tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
								Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
								himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a
								augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.
								Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa
								nisl quis neque. Suspendisse in orci enim.</p>
						</div>
						<div className="article__section">
							<h2 className="article__subtitle">Подзаголовок</h2>
							<p className="article__text text">This is Photoshop's version of Lorem Ipsum. Proin gravida
								nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
								elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
								vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
								tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
								Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
								himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a
								augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. </p>
							<p className="article__text text">This is Photoshop's version of Lorem Ipsum. Proin gravida
								nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
								elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
								vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
								tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
								Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
								himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a
								augue. </p>
						</div>

						<footer className="article__footer">
							<Share className="article__footer-share" />
						</footer>


					</div>{/*.article__main */}

				</div>{/*.article__content-inner*/}


				<p className="article__license">Акционерный коммерческий банк «РОССИЙСКИЙ КАПИТАЛ» <br />Генеральная лицензия ЦБ РФ № 2312 от 28 ноября 2014.</p>
				<p className="article__sign">РосБизнесКонсалтинг, 1995-2016</p>

			</div>{/*.skin*/}

			<ScrollAnimation fromY="bottom" className="skin">
				<div className="article__other-articles other-articles" data-hide-on-leave>
					<div className="other-articles__item">
						<div className="other-articles__item-title">Как сэкономить на ведении бизнеса</div>
						<a href="#" className="other-articles__item-button button _arrows">
							<span className="button__caption">Узнать</span>
							<svg className="button__arrows" preserveAspectRatio="xMidYMid" width="15" height="17" viewBox="0 0 15 17"> <path d="M8.792,16.127 L5.543,16.127 L10.910,8.500 L5.543,0.874 L8.792,0.874 L14.159,8.500 L8.792,16.127 ZM3.699,16.127 L0.450,16.127 L5.817,8.500 L0.450,0.874 L3.699,0.874 L9.066,8.500 L3.699,16.127 Z"/> </svg>
						</a>
					</div>
					<div className="other-articles__item">
						<div className="other-articles__item-title">Как развивать бизнес с помощью финансовых продуктов</div>
						<a href="#" className="other-articles__item-button button _arrows">
							<span className="button__caption">Узнать</span>
							<svg className="button__arrows" preserveAspectRatio="xMidYMid" width="15" height="17" viewBox="0 0 15 17"> <path d="M8.792,16.127 L5.543,16.127 L10.910,8.500 L5.543,0.874 L8.792,0.874 L14.159,8.500 L8.792,16.127 ZM3.699,16.127 L0.450,16.127 L5.817,8.500 L0.450,0.874 L3.699,0.874 L9.066,8.500 L3.699,16.127 Z"/> </svg>
						</a>
					</div>
					<div className="other-articles__item">
						<div className="other-articles__item-title">Как получить финансы на развитие малого бизнеса</div>
						<a href="#" className="other-articles__item-button button _arrows">
							<span className="button__caption">Узнать</span>
							<svg className="button__arrows" preserveAspectRatio="xMidYMid" width="15" height="17" viewBox="0 0 15 17"> <path d="M8.792,16.127 L5.543,16.127 L10.910,8.500 L5.543,0.874 L8.792,0.874 L14.159,8.500 L8.792,16.127 ZM3.699,16.127 L0.450,16.127 L5.817,8.500 L0.450,0.874 L3.699,0.874 L9.066,8.500 L3.699,16.127 Z"/> </svg>
						</a>
					</div>
				</div>
			</ScrollAnimation>

			<div className="article__next" data-hide-on-leave>Следующий лайфхак</div>

		</div>{/*.article__content*/}
	</div>
);

