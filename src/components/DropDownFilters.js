import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useLocation } from 'react-router-dom';

const DropdDownFilters = ({
   numRecords,
   setNumRecords,
   filterOption,
   setFilterOption,
   fetchOptions,
   filterOptions,
}) => {
   const location = useLocation();

   return (
      <>
         <div className="btn-group" style={{ marginRight: 10 }}>
            <Dropdown>
               <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  Fetch {numRecords} records
               </Dropdown.Toggle>

               <Dropdown.Menu>
                  {fetchOptions.map(option => {
                     return (
                        <Dropdown.Item
                           key={option}
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
         {location.pathname !== '/ranges' && (
            <div className="btn-group">
               <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                     View {filterOption}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                     {filterOptions.map(option => {
                        return (
                           <Dropdown.Item
                              key={option}
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
         )}
      </>
   );
};

export default DropdDownFilters;
