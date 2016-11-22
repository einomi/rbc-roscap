import './MainSliderHandler.sass';

import BoxSlider from './BoxSlider'
import BackgroundSlider from './BackgroundSlider'
import {BREAKPOINTS, MAX_HEIGHT_SM, MAX_HEIGHT_MD} from '../../config/media'

export default class MainSliderHandler extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			animating: false,
			currentSlide: 0,
			slideData: [
				{
					id: 0,
					title: 'Эффективное управление бизнесом',
					imageURL: 'media/img/background-slider/image1.jpg',
					text: 'Краткое описание проекта. В&nbsp;этом материале расскажем, что во&nbsp;главе угла сегодня&nbsp;&mdash; оптимизация издержек: трудовых ресурсов, временных, операционных издержек, и&nbsp;т.д. И&nbsp;как задачи по&nbsp;экономии этих ресурсов позволят решить финансовые сервисы.',
					detailURL: '/article/1'
				},
				{
					id: 1,
					title: 'Как выбрать банк для обслуживания',
					imageURL: 'media/img/background-slider/image2.jpg',
					text: 'В&nbsp;этом материале планируем рассказать, как выбирать банк по&nbsp;критериям&nbsp;&mdash; надежность, размер активов и&nbsp;капитала, рейтинги агентств и&nbsp;рейтинги в&nbsp;деловых СМИ, время работы на&nbsp;рынке, акционеры, и&nbsp;т.д. Во&nbsp;всех критериях делаем упор на&nbsp;преимущества банка &laquo;Российский капитал&raquo;.',
					detailURL: '/article/1'
				},
				{
					id: 2,
					title: 'Как получить финансы на развитие малого бизнеса',
					imageURL: 'media/img/background-slider/image3.jpg',
					text: 'В&nbsp;этом материале планируем рассказать о&nbsp;проблемах получения финансирования субъектам малого бизнеса, можно рассказать о&nbsp;господдержке (Корпорация МСП), о&nbsp;каких-то альтернативных способах получения финансирования (типа краудфандинга), но&nbsp;назвать их&nbsp;довольно спорными. Далее рассказать о&nbsp;кредитных продуктах Банка и&nbsp;специальной акции, сделав упор на&nbsp;то, что это лучший вариант. Про другие варианты предлагаем рассказать, потому что это просто интересно и&nbsp;уведет контент от&nbsp;чисто рекламного, но&nbsp;упор, безусловно, будем делать на&nbsp;продукты Банка.',
					detailURL: '/article/2'
				},
				{
					id: 3,
					title: 'Как развивать бизнес с помощью финансовых продуктов',
					imageURL: 'media/img/background-slider/image4.jpg',
					text: 'В&nbsp;этом материале расскажем, что нужно бизнесу для развития: больше клиентов, надежных партнеров, оперативность и&nbsp;качество обслуживания, и&nbsp;т.д. И&nbsp;расскажем о&nbsp;том, как эти задачи можно решить с&nbsp;помощью финансовых продуктов, услуг, сервисов. Интеграция информации Банка об&nbsp;удобстве продленного операционного дня, благодаря которому у&nbsp;компании улучшатся взаимоотношения с&nbsp;клиентами и&nbsp;партнерами, эквайринге, и&nbsp;др.',
					detailURL: '/article/3'
				},
				{
					id: 4,
					title: 'Как сэкономить на ведении бизнеса',
					imageURL: 'media/img/background-slider/image5.jpg',
					text: 'В&nbsp;этом материале расскажем, что во&nbsp;главе угла сегодня&nbsp;&mdash; оптимизация издержек: трудовых ресурсов, временных, операционных издержек, и&nbsp;т.д. И&nbsp;как задачи по&nbsp;экономии этих ресурсов позволят решить финансовые сервисы Банка, например, возможность проводить внутренние платежи 24&nbsp;часа, и&nbsp;продукты, например, подключение к&nbsp;комплексному договору на&nbsp;РКО. Привести цифры об&nbsp;экономии.',
					detailURL: '/article/4'
				},
				{
					id: 5,
					title: 'Как эффективнее контролировать бизнес-процессы',
					imageURL: 'media/img/background-slider/image6.jpg',
					text: 'В&nbsp;этом материале расскажем, что от&nbsp;контроля бизнес-процессов зависит эффективность бизнеса компании в&nbsp;целом. И&nbsp;в&nbsp;этом также могут помочь современные финансовых технологии&nbsp;&mdash; дистанционное банковское обслуживание (Интернет банк &laquo;РК&nbsp;Бизнес Онлайн&raquo;) , и&nbsp;др. Добавим интересные факты, как эффективный контроль позволяет делать бизнес успешнее, например, с&nbsp;помощью ДБО сокращается столько-то временных ресурсов, происходит быстрое обслуживание клиентов на&nbsp;столько-то процентов, клиентов становится на&nbsp;столько-то процентов больше.',
					detailURL: '/article/5'
				},
				{
					id: 6,
					title: 'Как управлять финансами',
					imageURL: 'media/img/background-slider/image7.jpg',
					text: 'Рассказываем о&nbsp;возможностях ДБО для управления финансами&nbsp;&mdash; автоматических платежах, Интернет банке &laquo;РК&nbsp;Бизнес Онлайн&raquo;, SMS-информировании, бизнес-картах, зарплатных проектах, и&nbsp;других услугах Банка.',
					detailURL: '/article/6'
				},
				{
					id: 7,
					title: 'Как преумножить капитал в бизнесе',
					imageURL: 'media/img/background-slider/image8.jpg',
					text: 'В&nbsp;этом материале говорим о&nbsp;том, что деньги должны работать&nbsp;&mdash; причем не&nbsp;только находясь в&nbsp;бизнесе, но&nbsp;и&nbsp;свободные деньги. Для этого опять-таки есть возможности&nbsp;&mdash; и&nbsp;интегрируем сюда депозиты Банка, а&nbsp;также комплекс продуктов &laquo;Эффективное управление ликвидностью&raquo;.',
					detailURL: '/article/7'
				}
			]
		};

		this._keyDownHandler = (e) => {
			switch (e.keyCode) {
				case 37: // left arrow
					this._prev();
					break;
				case 39: // right arrow
					this._next();
					break;
			}
		};

		this._onWheelHandler = (e) => {
			// console.log(e);
			// console.log(e.deltaY);

			let delta = e.deltaY ? e.deltaY : -e.wheelDelta;

			let direction = delta > 0 ? 'FORWARD' : 'REVERSE';
			direction == 'FORWARD' ? this._next(true) : this._prev(true);
		};
	}

	componentDidMount() {
		window.addEventListener('keydown', this._keyDownHandler);
        if ('onwheel' in document) {
            // IE9+, FF17+, Ch31+
            window.addEventListener("wheel", this._onWheelHandler);
        } else if ('onmousewheel' in document) {
            // устаревший вариант события
            window.addEventListener("mousewheel", this._onWheelHandler);
        } else {
            // Firefox < 17
            window.addEventListener("MozMousePixelScroll", this._onWheelHandler);
        }
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this._keyDownHandler);
		if ('onwheel' in document) {
			// IE9+, FF17+, Ch31+
			window.removeEventListener("wheel", this._onWheelHandler);
		} else if ('onmousewheel' in document) {
			// устаревший вариант события
			window.removeEventListener("mousewheel", this._onWheelHandler);
		} else {
			// Firefox < 17
			window.removeEventListener("MozMousePixelScroll", this._onWheelHandler);
		}
	}

	_startAnimation() {
		this.setState({animating: true});
	}

	_endAnimation() {
		this.setState({animating: false});
	}

	_setSlide(slideId, forced, dragging) {
		if (this.state.animating && !dragging) {
		    return;
		}

		if (slideId == this.state.currentSlide && !dragging) {
			return;
		}

		if (slideId > this.state.slideData.length - 1 || slideId < 0) {
			return;
		}

		this._startAnimation();

		this.refs.boxSlider._setSlide(slideId);
		this.refs.backgroundSlider._setSlide(slideId);
		this.setState({currentSlide: slideId});
	}

	_next(forced) {
		this._setSlide(this.state.currentSlide + 1, forced);
	}

	_prev(forced) {
		this._setSlide(this.state.currentSlide - 1, forced);
	}

	render() {
		return (
			<div className="main-slider">
				<div className="skin _height100p">
					<div className="main-slider__head head">
						<div className="head__text-container">
							<div className="head__text-container-inner">
								<div className="head__title">Банк Российский Капитал:</div>
								<div className="head__text">решения для эффективного бизнеса</div>
							</div>
						</div>
						<div className="head__logos">
							<div className="head__logo _r-letter"></div>
							<div className="head__logo _roskapital"></div>
						</div>
					</div>
					<BackgroundSlider ref="backgroundSlider" currentSlide={this.state.currentSlide}
					                  slideData={this.state.slideData} />
					<BoxSlider ref="boxSlider" currentSlide={this.state.currentSlide} slideData={this.state.slideData}
					           onChangeSlide={this._setSlide.bind(this)} onAnimationEnd={this._endAnimation.bind(this)} parent={this} />
					<div className="main-slider__social-links social-links">
						<a href="#" className="social-links__item">facebook</a>
						<a href="#" className="social-links__item">vkontakte</a>
						<a href="#" className="social-links__item">twitter</a>
					</div>
				</div>
				<div className="main-slider__license license">
					<div className="skin">
						<p className="license__text" dangerouslySetInnerHTML={{__html: 'Акционерный коммерческий банк &laquo;РОССИЙСКИЙ КАПИТАЛ&raquo; Генеральная лицензия ЦБ РФ № 2312 от 28 ноября 2014.'}}></p>
					</div>
				</div>
			</div>
		);
	}
}
