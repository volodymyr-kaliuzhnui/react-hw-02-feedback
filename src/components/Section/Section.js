import React from 'react';

function Section({title, children}) {
    return (
     <section>
         <div className="container">
             <h2>{title}</h2>
             {children}
         </div>
     </section>
    )
}




export default Section