import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PropTypes from 'prop-types';

const Titles = ({ ttl = '' }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{ttl} J-Mart</title>
      </Helmet>
    </HelmetProvider>
  );
};
Titles.propTypes = {
  ttl: PropTypes.string,
};

export default Titles;
