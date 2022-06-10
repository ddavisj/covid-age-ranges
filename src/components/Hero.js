import React from 'react';

const Hero = () => {
   return (
      <div className="hero px-4 my-5 text-center">
         <img
            className="d-block mx-auto mb-4"
            src="/covid-virus.jfif"
            alt=""
            width="300"
            height="168"
         />
         <h1 className="display-5 fw-bold">Covid Age Ranges</h1>
         <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">React developer assessment task.</p>
            <div className="col-lg-6 mx-auto">
               <ul>
                  <li>Built with React & React Hooks</li>
                  <li>Featuring Bootstrap 5, Axios</li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Hero;
