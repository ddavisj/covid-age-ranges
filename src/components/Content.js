import React from 'react';

const Content = () => {
   return (
      <main className="container">
         <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
            <div className="col-md-12 px-0">
               <h1 className="display-4 fst-italic">About This Data</h1>
               <p className="lead my-3">
                  This app pulls Covid age-range data from a{' '}
                  <a
                     href="https://discover.data.vic.gov.au/dataset/all-victorian-sars-cov-2-cases-by-age-group/resource/b98245c0-f42c-4df8-bced-62f5bcde67f6"
                     className="text-white fw-bold"
                     target="_blank"
                     rel="noreferrer"
                  >
                     Victorian government API
                  </a>
                  .
               </p>
               <p className="lead my-3">
                  You can view either a selection of the raw records or a
                  breakdown of the records by age range. The records tab can
                  also be filtered by age range.
               </p>
               <p className="lead mb-0"></p>
            </div>
         </div>
         <p>&nbsp;</p>
      </main>
   );
};

export default Content;
