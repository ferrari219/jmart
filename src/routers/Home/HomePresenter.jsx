import React from 'react';
import { connect } from 'react-redux';
import Button from 'components/01_Atoms/Button';
import Input from 'components/01_Atoms/Input';
import Titles from 'components/99_Etc/Titles';
import PropTypes from 'prop-types';

const Home = () => {
	return (
		<>
			<Titles />
			<div>
				<h1>Home</h1>
				<Button />
				<Input />
				<Input round="5" />
			</div>
		</>
	);
};

Home.propTypes = {};

const mapStateToProps = (state, ownProps) => {
	console.log(state);
	return { state };
};
export default connect(mapStateToProps)(Home);
