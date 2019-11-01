import { getDragonList, addDragon } from '../../services/dragons';

export const DRAGONS_LOADING = 'DRAGONS_LOADING';
export const DRAGONS_RECEIVED = 'DRAGONS_RECEIVED';
export const DRAGONS_FAILED = 'DRAGONS_FAILED';

export const DRAGON_FORM_LOADING = 'DRAGON_FORM_LOADING';
export const DRAGON_FORM_ADD = 'DRAGON_FORM_ADD';
export const DRAGON_FORM_FAILED = 'DRAGON_FORM_FAILED';

// List
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

// Form
export const dragonFormLoading = payload => ({
  type: DRAGON_FORM_LOADING,
  payload,
});

export const dragonFormFailed = payload => ({
  type: DRAGON_FORM_FAILED,
  payload,
});

export const dragonFormAdd = payload => ({
  type: DRAGON_FORM_ADD,
  payload,
});

export const addDragonAction = () => async dispatch => {
  try {
    dispatch(dragonFormLoading());
    const response = await addDragon();
    console.log(response);
    dispatch(dragonFormAdd());
  } catch (error) {
    dispatch(dragonFormFailed());
  }
};
