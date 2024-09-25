import React,{ useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Header from './Header/HeaderPage';
import SideMenuPage from './SideMenu/SideMenuPage';

export default function CreateDomain() {
    const [DomainName,setDomainName] =useState("")
    const [Error, setError] = useState("");
    const [Validate,setValidate] = useState(true);
    const naviagate = useNavigate();
    const nextStep_domain = () => {
        console.log(DomainName)
        console.log('Enter domain details clicked');
       naviagate("/domainDetails", { state: { domain: DomainName } })
    }
    const check_Domain = async ()=>{
      try {
        let data = JSON.stringify({
          "domain": DomainName,
          "selector": "default"
        });
        console.log(localStorage.getItem("authToken"))
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'http://127.0.0.1:5001/api/domain_check',
          headers: { 
            'Content-Type': 'application/json', 
            'Cookie': localStorage.getItem("authToken")
          },
          data : data
        };
        axios.request(config).then((response) => {
          console.log(JSON.stringify(response.data));
          if(response.data.Domains_Details.error){
            setError(response.data.Domains_Details.error)
            setValidate(true)
          }
          else{
            setError("")
            setValidate(false)
          }
        })
        .catch((error) => {
          console.log(error);
        });
      } catch (error) {
        console.error("Login failed", error.response);
        // Handle error, show notification, etc.
      }
    }
  return (
      <div>
          <Header />
          <SideMenuPage />
      <div style={{ width: "94%", position: "absolute", left: "4%", padding: "5rem" }}>

        <h2><strong>setup email with a custom domain</strong></h2>

        <h5>setup secure and relilable email for your organization. we'll walk you through a few steps.</h5>
        <div>
          <h6><strong>1.Add your domain(for example, elv.com)</strong></h6>
          <p>sign into the we that hosts your domain to confirm you own it;</p>
        </div>
        <div>
          <h6><strong>2.Setup email addresses(for example, you@evl.com)</strong></h6>
          <p>you'll need to lsign in with your new email address.</p>
        </div>
        <div>
          <h6><strong>3.connect your domain to email</strong></h6>
          <p>return to the website that host your domain and make updates  to route email with Microsoft 365</p>
        </div>


        <p>this short video show's how you'll setuo email with microsift 365</p>

        video(-_-)

        <h1>Create Domain</h1>
        <div style={{ width: "50%" }}>
          <input type="text" placeholder='Enter Domain Name' className='form-control mb-3' value={DomainName} onChange={(e) => setDomainName(e.target.value)} />
          {Error ? <div className='alert alert-danger'>{Error}</div> : null}
          {Validate ? <button className='btn btn-primary' onClick={check_Domain}>Check Domain</button>:<button className='btn btn-primary' onClick={nextStep_domain}>Next</button>}
          
        </div>
      </div>
    </div>
  )
}
