import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
   return (
      <div className="container">
         <header className="d-flex justify-content-center py-3">
            <ul className="nav nav-pills">
               <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                     Records
                  </NavLink>
               </li>
               <li className="nav-item">
                  <NavLink className="nav-link" to="/ranges">
                     Age Ranges
                  </NavLink>
               </li>
            </ul>
            {/* <a href="#" className=" active" aria-current="page">
                     Home
                  </a> */}
            {/* </li> */}
            {/* <li className="nav-item">
                  <a href="#" className="nav-link">
                     FAQs
                  </a>
               </li>
               <li className="nav-item">
                  <a href="#" className="nav-link">
                     About
                  </a>
               </li> */}
         </header>
      </div>
   );
};

export default Header;
