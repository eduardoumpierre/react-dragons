import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDragonListAction } from '../../store/dragons/actions';

const List = ({ getDragonListAction, dragonList }) => {
  useEffect(() => {
    getDragonListAction();
  }, [getDragonListAction]);

  return dragonList.map(dragon => <div key={dragon.id}>{dragon.name}</div>);
};

const mapStateToProps = ({ dragons }) => ({ dragonList: dragons.list });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getDragonListAction }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
