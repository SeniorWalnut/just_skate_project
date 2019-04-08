import React from 'react';
import { Switch, Route } from 'react-router-dom'
import MainPage from './MainPage';
import Catalogue from './Catalogue';

const App = () => {
	return (
		<Switch>
			<Route exact path="/" component={MainPage}/>
			<Route path="/skates" component={Catalogue}/>
			<Route path="/wheels" component={Catalogue}/>
			<Route path="/skooters" component={Catalogue}/>
		</Switch>
	);
};

export default App;