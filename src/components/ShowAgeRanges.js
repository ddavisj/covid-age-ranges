import React from 'react';

const ShowAgeRanges = ({ records }) => {
   /// PART II : Reduce results by age ranges

   // Create an empty array to add grouped records to
   let reducedRecords = [];

   // Create an obj with keys as age ranges
   const reduce = () => {
      const myFunc = (arr, prop) => {
         return arr.reduce((acc, item) => {
            let key = item[prop];
            if (!acc[key]) {
               acc[key] = [];
            }
            acc[key].push(item);
            return acc;
         }, {});
      };

      let groupedAges = myFunc(records, 'agegroup');

      // Turn this into an array
      for (let key in groupedAges) {
         reducedRecords.push({ [key]: groupedAges[key].length });
      }
   };
   reduce();

   // Sort reduced records by values (ie. num of records descending)
   reducedRecords.sort((a, b) => Object.values(b) - Object.values(a));

   // Render Age Ranges Data
   const renderAgeRanges = () => {
      return reducedRecords.map((record, i) => {
         return (
            <div key={Object.keys(record)}>{`Range: ${Object.keys(
               record
            )}, Cases: ${Object.values(record)}`}</div>
         );
      });
   };

   return (
      <div className="show-age-ranges container">
         <div>&nbsp;</div>
         <h3>Age Ranges (Descending)</h3>
         <div>{renderAgeRanges()}</div>
         <p>&nbsp;</p>
      </div>
   );
};

export default ShowAgeRanges;
