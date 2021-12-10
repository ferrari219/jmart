import React from 'react';
import Helmet from 'react-helmet';

const Titles = ({ ttl = '' }) => {
	return (
		<Helmet>
			<title>{ttl} J-Mart</title>
		</Helmet>
	);
};

export default Titles;
