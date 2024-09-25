import React, { useEffect, useState } from 'react'
import HeaderPage from './Header/HeaderPage';
import SideMenuPage from './SideMenu/SideMenuPage'
import { useNavigate,useLocation  } from 'react-router-dom';
import axios from 'axios';
export default function GetMXCname() {
  const navigate = useNavigate();
  const location = useLocation();
  const [domainData,setDomainData] = useState();
  const { domain,username,domain_account } = location.state || {}
  console.log(location.state)
  console.log(username)
  useEffect(()=>{
    checkDomainReg();
 
  },[])
  const checkDomainReg = ()=>{
    let data = JSON.stringify({
      "domain": domain,
      "userName":username,
      "domain_account":domain_account,
      "selector": "default"
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://127.0.0.1:5001/api/domain',
      headers: { 
        'Content-Type': 'application/json', 
        'Cookie': localStorage.getItem("authToken")
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      setDomainData(JSON.stringify(response.data.dns_records))
    })
    .catch((error) => {
      console.log(error);
    });
  }
  return (
      <div>
          <HeaderPage />
          <SideMenuPage />
          <div style={{ width: "94%", position: "absolute", left: "4%", padding: "5rem" }}>
            <h3>       getMXCname</h3>
            <div className='alert alert-primary'>
              {domainData}
            </div>     
          </div>
      
    </div>
  )
}
