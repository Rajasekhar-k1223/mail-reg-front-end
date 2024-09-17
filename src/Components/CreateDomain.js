import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header/HeaderPage';
import SideMenuPage from './SideMenuPage';
export default function CreateDomain() {
    const naviagate = useNavigate();
    const enterDetails = () => {
        console.log('Enter domain details clicked');
        naviagate("/domainDetails")
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
              <div style={{ width:"50%"}}>
              <input type="text" placeholder='Enter Domain Name' className='form-control mb-3' />

              <button className='btn btn-primary' onClick={enterDetails}>Check Domain</button>
              </div>
          </div>
    </div>
  )
}
