import React from 'react';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';

const ShowRecords = ({ records, filterOption }) => {
   /// PART I: Show raw records

   // Warning if no records shown once filtered
   const warning = () => {
      if (!filteredRecords.length && filterOption !== 'All Age Ranges') {
         return 'No matching records, try another bracket or fetch more records';
      }
   };

   // Filter records array based on filter option from dropdown..
   const filteredRecords = records.filter(
      record => record.agegroup === filterOption
   );

   // .. Show records if records not filtered
   const showAllRecords = () => {
      if (filterOption === 'All Age Ranges') {
         return records.map((record, i) => {
            return (
               i < 15 && (
                  <div
                     key={record._id}
                  >{`ID: ${record._id}, Date: ${record.diagnosis_date}, Age: ${record.agegroup}`}</div>
               )
            );
         });
      }
   };

   // .. or show filtered records
   const showFilteredResults = () => {
      if (filterOption !== 'All Age Ranges') {
         return filteredRecords.map((record, i) => {
            return (
               i < 15 && (
                  <div
                     key={record._id}
                  >{`ID: ${record._id}, Date: ${record.diagnosis_date}, Age: ${record.agegroup}`}</div>
               )
            );
         });
      }
   };

   return (
      <div className="show-records container">
         <div>&nbsp;</div>
         <h3>Viewing Individual Records</h3>
         <div>{showAllRecords()}</div>
         {warning()}
         {showFilteredResults()}
         {records.length > 15 ? (
            <>
               <hr />
               <p className="records-subtitle">[Max 15 records displayed]</p>
            </>
         ) : (
            ''
         )}
         <p>&nbsp;</p>
      </div>
   );
};

export default ShowRecords;
