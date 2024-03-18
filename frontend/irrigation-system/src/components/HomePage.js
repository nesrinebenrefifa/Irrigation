// import React from "react"
// import {useLocation} from 'react-router-dom';

// function Home (){
//     const location=useLocation()

//     return (
//         <div className="homepage">

//             <h1>Hello {location.state.id} and welcome to the home</h1>

//         </div>
//     )
// }

// export default Home

import React from 'react'


function HomePage() {
 
  return (
    
   
    <div className='px-3'>
      
      
      <div className='container-fluid'>
        <div className='row g-3 my-2'>
           <div className='col-md-4 p-1'>
           <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
               <div>
                <h3 className='fs-2'>20</h3>
                Temperature
               </div>
             <i className='bi bi-thermometer p-3 fs-1'></i>
            </div>
            </div>
            
            <div className='col-md-4 p-1'>
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
               <div>
                <h3 className='fs-2'>20</h3>
                <p className='fs-5'>Humidity</p>
               </div>
             <i className='bi bi-moisture p-3 fs-1'></i>
            </div>
            </div>
       
            <div className='col-md-4 p-1'>
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
               <div>
                <h3 className='fs-2'>20</h3>
                <p className='fs-5'>Moisture value</p>
               </div>
             <i className='bi bi-moisture p-3 fs-1'></i>
             </div>
            </div>
        </div>
      </div>

   </div>
  )
};

export default HomePage;
