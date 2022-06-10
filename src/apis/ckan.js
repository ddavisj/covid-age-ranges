import axios from 'axios';

export default axios.create({
   baseURL: 'https://discover.data.vic.gov.au/api/3/action',
});
