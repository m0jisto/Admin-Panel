import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import { SheltersPage, ShelterUpdatePage, ShelterCreatePage } from './pages';
import { Navbar } from './components';

export const ContextApp = React.createContext('light');

const App = () => {
	const history = useHistory();
	const [state, dispatch] = useState([]);

	useEffect(() => {
		history.push('/shelters');
	}, [history]);

	return (
		<ContextApp.Provider value={{ state, dispatch }}>
			<div className="container">
				<Navbar />
				<Switch>
					<Route from="/shelters" component={SheltersPage} exact />
					<Route from="/shelters/update/:id" component={ShelterUpdatePage} exact />
					<Route from="/shelters/create" component={ShelterCreatePage} exact />
				</Switch>
			</div>
		</ContextApp.Provider>
	);
};

export default App;
