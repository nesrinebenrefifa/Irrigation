import React from 'react'

function Sidebar() {
  return (
    <div className='bg-white sidebar'>
      <div>
        <i className='bi bi-droplet-half me-2 fs-4'></i>
        <span className='brand-name fs-4'>Irrigation System</span>
      </div>
      <hr className='text-dark'/>
      <div className='list-group list-group-flush'>
       
            <i className='bi bi-clipboard-data fs-5 me-4'></i>
            <span>Dashboard</span>
            <hr className='text-dark'/>
      
            <i className='bi bi-house fs-5 me-4'></i>
            <span>Home</span>
            <hr className='text-dark'/>
            <i className='bi bi-clipboard-data fs-5 me-4'></i>
            <span>Report</span>
            <hr className='text-dark'/>
       
            <i className='bi bi-people fs-5 me-4'></i>
            <span>Users</span>
            <hr className='text-dark'/>
       
            <i className='bi bi-power fs-5 me-4'></i>
            <span>Logout</span>
    
      </div>
    </div>
  )
}

export default Sidebar


