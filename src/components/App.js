import './App.css';
import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import Hero from './Hero';
import Content from './Content';
import Footer from './Footer';
import ShowRecords from './ShowRecords';

import GetData from './GetData';

const fetchOptions = [5, 10, 15, 25, 50, 100, 250, 500, 1000];
const filterOptions = [
   'All',
   '10-19',
   '20-29',
   '30-39',
   '40-49',
   '50-59',
   '60-69',
   '70-79',
   '80-89',
];

const App = () => {
   const [numRecords, setNumRecords] = useState(fetchOptions[0]);
   const [filterOption, setFilterOption] = useState(filterOptions[0]);

   const [records, setRecords] = useState([]);

   return (
      <>
         <Hero />
         <Content />

         <div className="container">
            <h3>View Raw Data</h3>
            <div className="btn-group" style={{ marginRight: 10 }}>
               <Dropdown>
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                     Fetch {numRecords} records
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                     {fetchOptions.map(option => {
                        return (
                           <Dropdown.Item
                              onClick={() => {
                                 setNumRecords(option);
                              }}
                           >
                              {option}
                           </Dropdown.Item>
                        );
                     })}
                  </Dropdown.Menu>
               </Dropdown>
            </div>
            <div className="btn-group">
               <Dropdown>
                  <Dropdown.Toggle variant="info" id="dropdown-basic">
                     View {filterOption}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                     {filterOptions.map(option => {
                        return (
                           <Dropdown.Item
                              onClick={() => {
                                 setFilterOption(option);
                              }}
                           >
                              {option}
                           </Dropdown.Item>
                        );
                     })}
                  </Dropdown.Menu>
               </Dropdown>
            </div>
         </div>

         <GetData limit={numRecords} setRecords={setRecords} />
         <ShowRecords records={records} filterOption={filterOption} />
         <Footer />
      </>
   );
};

export default App;
