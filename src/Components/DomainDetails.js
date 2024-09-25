import React,{ useState } from 'react'
import Header from './Header/HeaderPage';
import SideMenuPage from './SideMenu/SideMenuPage';
import { useNavigate,useLocation  } from 'react-router-dom';
export default function DomainDetails() {
    const navigate = useNavigate();
    const location = useLocation();
    const [UserName,setUserName] = useState("");
    const [DomainAccount,setDomainAccount] = useState("");
    const { domain } = location.state || {}
    const submitDomain = () => {
        console.log('Submit domain clicked');
        // navigate("/getMXCname")
        navigate("/getMXCname",{state:{domain:domain,username:UserName,domain_account:DomainAccount}})
    }
  return (
      <div>
          <Header />
          <SideMenuPage />
          <div style={{ width: "94%", position: "absolute", left: "4%", padding: "5rem" }}>
              <h4><button onClick={()=> navigate(-1)} className='btn btn-info'>back</button></h4>
          
          <h1>Domain Details</h1>
          <input type="text" placeholder='Enter Domain Name' value={domain} className='form-control mb-3' disabled />
          <input type="text" placeholder='Enter User Name' className='form-control mb-3' value={UserName} onChange={(e)=>setUserName(e.target.value)}/>
          <input type="text" placeholder='Enter Domain Account' className='form-control mb-3' value={DomainAccount}  onChange={(e)=>setDomainAccount(e.target.value)}/>
          
              <button className='btn btn-primary' onClick={submitDomain}>Submit</button>
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
