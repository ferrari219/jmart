import React from 'react';
import { connect } from 'react-redux';

const Home = () => {
  return <div>Home</div>;
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return { state };
};
export default connect(mapStateToProps)(Home);
