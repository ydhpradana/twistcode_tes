
import actions from './actions';
import axios from 'axios';

const {
  countryPhoneBegin,
  countryPhoneSuccess,
  countryPhoneErr,
  
} = actions;

export const fetchCountryPhone = () => dispatch => {
  return new Promise((resolve, reject) => {
    try {
      dispatch(countryPhoneBegin());
      axios({
        method: 'GET',
        url: `https://restcountries.eu/rest/v2/all`,
      }).then(data => {
          const flag = data.data;
          console.log(flag)
          dispatch(countryPhoneSuccess(flag));
          resolve(true);
      });
    } catch (err) {
      console.log(err);
      dispatch(countryPhoneErr(true));
      reject(false); 
    }
  });
};