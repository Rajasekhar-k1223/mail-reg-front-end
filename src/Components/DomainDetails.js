import React from 'react'
import Header from './Header/HeaderPage';
import SideMenuPage from './SideMenuPage';
import { useNavigate } from 'react-router-dom';
export default function DomainDetails() {
    const naviagate = useNavigate();
    const submitDomain = () => {
        console.log('Submit domain clicked');
        naviagate("/getMXCname")
    }
  return (
      <div>
          <Header />
          <SideMenuPage />
          <div style={{ width: "94%", position: "absolute", left: "4%", padding: "5rem" }}>
              
          
          <h1>Domain Details</h1>
          <input type="text" placeholder='Enter Domain Name' className='form-control mb-3' />
          <input type="text" placeholder='Enter User Name' className='form-control mb-3' />
          <input type="text" placeholder='Enter Domain Account' className='form-control mb-3' />
          
              <button className='btn btn-primary' onClick={submitDomain}>Submit Domain</button>
              </div>
      {/* Domain details */}
      {/* <div>
        <h2>Domain Name: example.com</h2>
        <p>Created User: Rajasekhar</p>
        <p>Domain Account: Elsea</p>
        <p>Created: 28-08-2024</p>
        <p>Updated: 28-08-2024</p>
      </div>
      <button>Edit</button>
      <button>Delete</button> */}
      {/* <button>Add DNS Record</button> */}
      {/* <button>Add MX Record</button> */}
      {/* <button>Add SPF Record</button> */}
      {/* <button>Add TXT Record</button> */}
      {/* <button>Add CNAME Record</button> */}
      {/* <button>Add A Record</button> */}
    </div>
  )
}
