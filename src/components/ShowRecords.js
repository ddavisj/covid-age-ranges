import React from 'react';

const ShowRecords = ({ records, filterOption, viewNumRecords }) => {
   // const showRaw = () => {
   //    return records.map(record => {
   //       return (
   //          <div>{`ID: ${record._id}, Date: ${record.diagnosis_date}, Age: ${record.agegroup}`}</div>
   //       );
   //    });
   // };

   const filteredRecords = records.filter(
      record => record.agegroup === filterOption
   );

   const warning = () => {
      if (!filteredRecords.length && filterOption !== 'All') {
         return 'No matching records, try another bracket or fetch more records';
      }
   };

   console.log(filteredRecords);

   const showReducedResults = () => {
      if (filterOption === 'All') {
         return records.map((record, i) => {
            return (
               i < 10 && (
                  <div
                     key={record._id}
                  >{`ID: ${record._id}, Date: ${record.diagnosis_date}, Age: ${record.agegroup}`}</div>
               )
            );
         });
      }
   };

   const showFilteredResults = () => {
      if (filterOption !== 'All') {
         return filteredRecords.map((record, i) => {
            return (
               i < 10 && (
                  <div
                     key={record._id}
                  >{`ID: ${record._id}, Date: ${record.diagnosis_date}, Age: ${record.agegroup}`}</div>
               )
            );
         });
      }
   };

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

   reducedRecords.sort((a, b) => Object.values(b) - Object.values(a));

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
      <>
         <div className="show-records container">
            <div>{showReducedResults()}</div>
            {warning()}
            {showFilteredResults()}
            {records.length > 10 ? (
               <>
                  <hr style={{ width: '37%' }} />
                  <p style={{ fontSize: 14 }}>[Max 10 records displayed]</p>
               </>
            ) : (
               ''
            )}
            <p>&nbsp;</p>
            <h3>Age Ranges (Descending)</h3>
            <div>{renderAgeRanges()}</div>
         </div>
      </>
   );
};

export default ShowRecords;
