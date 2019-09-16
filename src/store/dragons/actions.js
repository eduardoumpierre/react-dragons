import { getDragonList } from '../../services/dragons';

export const DRAGONS_LOADING = 'DRAGONS_LOADING';
export const DRAGONS_RECEIVED = 'DRAGONS_RECEIVED';
export const DRAGONS_FAILED = 'DRAGONS_FAILED';

export const dragonsLoading = () => ({
  type: DRAGONS_LOADING,
});

export const dragonsReceived = payload => ({
  type: DRAGONS_RECEIVED,
  payload,
});

export const dragonsFailed = payload => ({
  type: DRAGONS_FAILED,
  payload,
});

export const getDragonListAction = () => async dispatch => {
  try {
    dispatch(dragonsLoading());
    const dragons = await getDragonList();
    dispatch(dragonsReceived(dragons.data));
  } catch (error) {
    dispatch(dragonsFailed());
  }
};
