import ScrollAnimation from './ScrollAnimation'
import Share from './Share'
import ArticleNav from './ArticleNav'

export default (props) =>
	<div className="article__content">

		<div className="skin">
			<div className="article__content-inner">

				<aside className="article__sidebar _hidden-sm">
					<div className="article__sidebar-inner">
						<div className="article__sidebar-image">
							<img src="/media/img/articles/article1-thumb.jpg" alt=""/>
						</div>
						<ScrollAnimation fromX="left">
							<ArticleNav items={props.items} />
						</ScrollAnimation>
					</div>
				</aside>

				<div className="article__main">
					<div className="article__section">
						<h2 className="article__subtitle">Надежность</h2>
						<p className="article__text text">В условиях нестабильности на банковском рынке надежность кредитной организации – ключевой фактор выбора финансового партнера для корпоративного обслуживания.</p>
						<p className="article__text text">Для частного лица важно только включение банка в систему страхования вкладов (ССВ), при возникновении сложной ситуации вклады таким клиентам в сумме до 1,4 млн рублей гарантированно вернет государственная корпорация «Агентство по страхованию вкладов» (АСВ). С корпоративными клиентами дело обстоит гораздо сложнее. Включение банка в ССВ – важный критерий надежности, но не достаточный.</p>
						<p className="article__text text">Чтобы выбрать надежного финансового партнера, в первую очередь, смотрите на размер кредитной организации по капиталу и активам. Такие данные можно найти на сайте регулятора – Центрального банка РФ. Желательно выбирать кредитную организацию из первой сотни. Также лучше работать с известным банком, который имеет долгую историю работы на рынке. Кроме того, важный момент – прозрачный состав акционеров (владельцев). Скажем, если в акционерах банка государственные организации и капитал – это определенно надежный финансовый институт.</p>
						<p className="article__text text">Так, например, банк «Российский капитал» входит в топ-30 российских банков в финансовом рейтинге Banki.ru по ключевым показателям деятельности и работает на рынке с 1993 года, когда, по сути, банковская отрасль только начала формироваться. С 2009 года основным акционером банка является госкорпокация «Агентство по страхованию вкладов», которая в настоящий момент владеет 100% акций. Гарантии банка «Российский капитал» принимаются налоговыми органами. Кроме того, Банк России включил «Российский капитал» в перечень кредитных организаций, имеющих право работать с предприятиями стратегического значения (согласно Федеральному закону №  213-ФЗ).</p>
					</div>
				</div>{/*.article__main */}

			</div>{/*.article__content-inner*/}

			<div className="article__content-inner">
				<aside className="article__sidebar">
					<ScrollAnimation fromX="left">
						<div className="article__offer offer">
							<div className="offer__head">
								<div className="offer__logos"></div>
								<div className="offer__title">Специальное
									предложение</div>
							</div>
							<div className="offer__content">
								<div className="offer__text">Банк «Российский капитал» — это универсальный банк с широкой филиальной сетью. Банк основан в 1993 году.</div>
								<div className="offer__more">Подробнее на <a href="http://roscap.ru" target="_blank" className="offer__link link">ROSCAP.RU</a></div>
							</div>
						</div>
					</ScrollAnimation>
				</aside>

				<div className="article__main">
					<div className="article__section">
						<h2 className="article__subtitle">Рейтинги</h2>
						<p className="article__text text">Второй критерий выбора – стабильное финансовое положение банка. Данный критерий также относится к надежности, однако он более узкий, и касается именно финансового состояния кредитной организации.</p>
						<p className="article__text text">Оценить финансовую устойчивость можно, во-первых, по рейтингам международных и российских рейтинговых агентств. Рассчитывают их на основе ряда показателей финансовой отчетности, учитывая обязательства рейтингуемого банка, доходы, резервы на выданные ссуды и др.</p>
						<p className="article__text text">Крупнейшие международные рейтинговые агентства – Moody's, Standard and Poor's и Fitch Ratings, ключевые игроки российского рынка – «Эксперт РА» (RAEX), «РусРейтинг», Национальное Рейтинговое Агентство. С одной стороны, считается, что международные оценки являются более авторитетными. Но с другой, с поправкой на геополитику, они не всегда отражают актуальное состояние отечественных организаций. Эксперты советуют для обслуживания выбирать банки с высоким кредитным рейтингом, а лучше с рейтингами от нескольких агентств. К примеру, у банка «Российский капитал» есть рейтинг от международного Fitch Ratings (ВВ-, подтвержден в июне 2016 г.) а также от крупнейшего российского рейтингового агентства «Эксперт РА» (А+ подтвержден в сентябре 2016 г.).</p>
						<p className="article__text text">Также эксперты советуют обращать внимание на рейтинги и рэнкинги различных деловых СМИ, публикуемые для широкого круга читателей. Как правило, в рэнкингах берется за основу некий финансовый показатель, например, сумма чистых активов, собственный капитал, кредитный портфель и др. Банк «Российский капитал» традиционно входит в списки крупнейших банков России по объему активов, кредитному портфелю, а также размеру собственного капитала. Например, в этом году банк занял 21-е место в рейтинге надежности 100 ведущих российских банков, опубликованном журналом Forbes. По итогам третьего квартала 2016 года, банк «Российский капитал» занял 25-е место по размеру активов в рэнкинге «Интерфакс-100», подготовленном «Интерфакс-ЦЭА». Также банк входит в ТОП-30 по ключевым показателям деятельности банков в финансовом рейтинге Banki.ru (http://www.banki.ru/banks/ratings/).</p>
					</div>
				</div>{/*.article__main */}

			</div>{/*.article__content-inner*/}

			<div className="article__content-inner">
				<aside className="article__sidebar">
					<ScrollAnimation fromX="left">
						<div className="article__offer offer">
							<div className="offer__head">
								<div className="offer__logos"></div>
								<div className="offer__title">Специальное
									предложение</div>
							</div>
							<div className="offer__content">
								<div className="offer__text">Банк «Российский капитал» имеет рейтинг кредитоспособности от «Эксперт РА» на уровне А+ — «Очень высокий уровень кредитоспособности». В феврале 2016 года журнал Forbes опубликовал рейтинг надежности 100 ведущих российских банков. В данном рейтинге этот банк занимает 21 место.</div>
								<div className="offer__more">Подробнее на <a href="http://roscap.ru" target="_blank" className="offer__link link">ROSCAP.RU</a></div>
							</div>
						</div>
					</ScrollAnimation>
				</aside>

				<div className="article__main">
					<div className="article__section">
						<h2 className="article__subtitle">Удобство</h2>
						<p className="article__text text">Следующий немаловажный критерий выбора банка для фирмы, особенно для представителей среднего и малого бизнеса, – это удобство обслуживания. Далеко не все банки, предоставляющие корпоративные продукты и услуги, готовы качественно обслуживать небольшие компании.</p>
						<p className="article__text text">В этом смысле первое, на что вам следует обратить внимание, - это линейка продуктов для представителей малого бизнеса. К примеру, банк «Российский капитал» оказывает полный спектр услуг для клиентов малого и среднего бизнеса. Это расчетно-кассовое обслуживание (РКО), кредитование, размещение средств на депозитах, зарплатные проекты, корпоративные карты и др. Для представителей малого бизнеса банк регулярно проводит специальные акции с интересными условиями по кредитам, рефинансированию, РКО.</p>
						<p className="article__text text">Во-вторых, речь идет о реальном обслуживании: филиальная сеть банка, территориальное расположение отделений, отсутствие очередей. Банк «Российский капитал» имеет сеть филиалов, дополнительных офисов и операционных касс в 28 регионах России в 7 федеральных округах.</p>
						<p className="article__text text">В-третьих, возможности дистанционного обслуживания. Банк «Российский капитал» уделяет особое внимание развитию дистанционного банковского обслуживания и стремится максимум продуктов и услуг для корпоративных клиентов перевести именно в удаленный канал. Удобный и функциональный сервис «РК Бизнес Онлайн» банка «Российский капитал» для малого бизнеса доступен в любой точке мира, на любом компьютере, круглосуточно, семь дней в неделю. Причем подключить его можно всего за один визит в банк, заключив договор на обслуживание, а работать в системе можно нескольким организациям холдинга под одним логином. Это особенно удобно для более эффективного управления финансовыми потоками компании. С помощью интернет-банка для бизнеса можно проводить платежи и переводы, получать выписки, осуществлять конверсионные операции, а также общаться с представителями банка для консультаций. Также в дистанционном функционале сервиса доступны решения для валютного контроля (паспорта сделок, справки), зарплатных проектов, организации большого количества платежей.</p>
					</div>
					<footer className="article__footer">
						<Share className="article__footer-share" />
					</footer>
				</div>{/*.article__main */}

			</div>{/*.article__content-inner*/}

			<p className="article__license">Акционерный коммерческий банк «РОССИЙСКИЙ КАПИТАЛ» <br />Генеральная лицензия ЦБ РФ № 2312 от 28 ноября 2014.</p>
			<p className="article__sign">РосБизнесКонсалтинг, 1995-2016</p>

		</div>{/*.skin*/}

	</div>
