import Button from 'components/01_Atoms/Button';
import Input from 'components/01_Atoms/Input';
import React from 'react';
import { connect } from 'react-redux';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Button />
      <Input />
      <Input round="5" />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return { state };
};
export default connect(mapStateToProps)(Home);
