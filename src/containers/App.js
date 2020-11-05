import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Banner from '../components/Banner';
import Main from './Main';
import './App.css';

const App = () => (
	<Router>
		<div className="App">
			<Banner/>
			<Main />
		</div>
	</Router>
);

export default App;
