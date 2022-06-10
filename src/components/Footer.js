import React from 'react';

const Footer = () => {
   return (
      <footer className="footer mt-auto py-3 bg-custom">
         <div className="container">
            <span className="text-muted">
               <p className="text-center">
                  ©2022 David Hack | &nbsp;
                  <a
                     href="https://davidhack.netlify.app/"
                     rel="noreferrer"
                     target="_blank"
                  >
                     View Portfolio
                  </a>
               </p>
            </span>
         </div>
      </footer>
   );
};

export default Footer;
