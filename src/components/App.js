import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React, { useState } from 'react';

import Header from './Header';

import Hero from './Hero';
import Content from './Content';
import Tabs from './Tabs';
import Footer from './Footer';
import ShowRecords from './ShowRecords';
import ShowAgeRanges from './ShowAgeRanges';
import DropdDownFilters from './DropDownFilters';

import GetData from './GetData';

const App = () => {
   const fetchOptions = [5, 10, 15, 25, 50, 100, 250, 500, 1000];
   const filterOptions = [
      'All Age Ranges',
      '0-9',
      '10-19',
      '20-29',
      '30-39',
      '40-49',
      '50-59',
      '60-69',
      '70-79',
      '80-89',
      '90+',
   ];

   const [numRecords, setNumRecords] = useState(fetchOptions[0]);
   const [filterOption, setFilterOption] = useState(filterOptions[0]);

   const [records, setRecords] = useState([]);

   const dropDownConfig = {
      numRecords,
      setNumRecords,
      filterOption,
      setFilterOption,
      fetchOptions,
      filterOptions,
   };

   return (
      <>
         <Hero />
         <Content />

         <GetData limit={numRecords} setRecords={setRecords} />

         <BrowserRouter>
            <div className="container bd-example">
               <Tabs />
               <div className="highlight">
                  <DropdDownFilters {...dropDownConfig} />
                  <Routes>
                     <Route
                        path="/"
                        element={
                           <ShowRecords
                              records={records}
                              filterOption={filterOption}
                           />
                        }
                     />
                     <Route
                        path="/ranges"
                        element={<ShowAgeRanges records={records} />}
                     />
                  </Routes>
               </div>
            </div>
         </BrowserRouter>
         <Footer />
      </>
   );
};

export default App;
