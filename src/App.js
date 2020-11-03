import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/clean-blog.css';
import Routes from './Routes';
import { Provider } from 'react-redux';
import store from './store';
import { dangnhapSucceedAction } from './actions/authAction';

if (localStorage.getItem('jwtToken')) {
	const decoded = localStorage.getItem('jwtToken');

	store.dispatch(dangnhapSucceedAction(true, JSON.parse(decoded)));
}

function App() {
	return (
		<Provider store={store}>
			<Routes />
		</Provider>
	);
}

export default App;
