import React, { Component } from 'react';
import { connect } from 'react-redux';

// STYLE
import './app.scss';

// COMPONENTS
import { Section } from '@components';

class AppContainer extends Component {
	render() {

		return (
			<div className="app">
				<h1>react-boilerplate with TS</h1>
				<Section title="hello" />
			</div>
		);
	}
}

export default AppContainer;
