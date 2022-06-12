import { useEffect } from 'react';

import ckanApi from '../apis/ckan';

const GetData = ({ limit, setRecords }) => {
   useEffect(() => {
      (async () => {
         const response = await ckanApi.get('/datastore_search', {
            params: {
               resource_id: 'b98245c0-f42c-4df8-bced-62f5bcde67f6',
               limit,
            },
         });
         console.log(response);
         setRecords(await response.data.result.records);
      })();
   }, [limit]);
};

export default GetData;
