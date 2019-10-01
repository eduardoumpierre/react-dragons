import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import { getDragonListAction } from '../../store/dragons/actions';
import DragonList from '../../components/DragonList';
import Header from '../../components/Header';

const Home = ({ getDragonListAction, dragonList }) => {
  useEffect(() => {
    getDragonListAction();
  }, [getDragonListAction]);

  return (
    <>
      <Header title="Lista de dragões" backButton={false} />
      <DragonList items={dragonList} />
    </>
  );
};

const mapStateToProps = ({ dragons }) => ({ dragonList: dragons.list });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getDragonListAction }, dispatch);

Home.propTypes = {
  getDragonListAction: PropTypes.func.isRequired,
  dragonList: PropTypes.array.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
