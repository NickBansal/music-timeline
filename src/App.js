import React from 'react';

import Header from './components/Header';
import Timeline from './pages/Timeline';
import GlobalStyle from './utils/globalStyles';

const App = () => (
	<div className="App">
		<GlobalStyle />
		<Header />
		<Timeline />
	</div>
);

export default App;
