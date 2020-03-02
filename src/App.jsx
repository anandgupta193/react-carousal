import React from 'react';
import Carousal from  './Components/Carousal/Carousal';
import { carousalData } from './carousalData';
import './App.css';

function App() {
	return (
		<div className="App">
			<Carousal data={ carousalData } />
		</div>
	);
}

export default App;
