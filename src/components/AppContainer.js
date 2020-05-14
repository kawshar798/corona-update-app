import React from 'react';

const AppContainer = ({children}) => {
    return (
        <div className="container">
               <div className="row">
               {children}
               </div>
         
        </div>
    );
};

export default AppContainer;