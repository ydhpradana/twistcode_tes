import actions from './actions';

const {
  COUNTRY_PHONE_BEGIN,
  COUNTRY_PHONE_SUCCESS,
  COUNTRY_PHONE_ERR,
} = actions;

const initState = {
  countryPhone: [],
  post: {},
  delete: {},
  loading: false,
  error: false,
};

/**
 *
 * @todo impure state mutation/explaination
 */
const reducer = (state = initState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case COUNTRY_PHONE_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case COUNTRY_PHONE_SUCCESS:
      return {
        ...state,
        countryPhone: data,
        loading: false,
      };
    case COUNTRY_PHONE_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;