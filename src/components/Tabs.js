import React from 'react';
import { NavLink } from 'react-router-dom';

const Tabs = () => {
   return (
      <>
         <div className="tab-header">
            <ul className="nav nav-pills">
               <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                     Records
                  </NavLink>
               </li>
               <li className="nav-item">
                  <NavLink className="nav-link" to="/ranges">
                     Ranges
                  </NavLink>
               </li>
            </ul>
         </div>
         {/* <p>View either raw records or records grouped by age range</p> */}
      </>
   );
};

export default Tabs;
