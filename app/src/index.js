require('styles/common.sass');

var $ = global.$ = global.jQuery = require('./vendor/jquery-3.1.0.min.js');
import 'ScrollToPlugin'
// var TweenMax = global.TweenMax = require('./vendor/tweenmax.min.js');
// require('./vendor/jquery.gsap.min.js');
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import App from './components/App'
import MainSlider from './components/MainSlider/MainSliderHandler'
import PageSlider from './components/PageSlider'

ReactDOM.render((
	<Router history={browserHistory}>
        <Route path="/" component={App}>
	        <IndexRoute component={MainSlider}></IndexRoute>
            <Route path="/article/1" itemId={0} component={PageSlider}></Route>
            <Route path="/article/2" itemId={1} component={PageSlider}></Route>
            <Route path="/article/3" itemId={2} component={PageSlider}></Route>
            <Route path="/article/4" itemId={3} component={PageSlider}></Route>
            <Route path="/article/5" itemId={4} component={PageSlider}></Route>
	        <Route path="/article/6" itemId={5} component={PageSlider}></Route>
	        <Route path="/article/7" itemId={6} component={PageSlider}></Route>
        </Route>
	</Router>
), document.getElementById('app'));


