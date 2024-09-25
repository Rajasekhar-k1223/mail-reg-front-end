import React, { useState, useEffect } from 'react';
import './SideMenu.css'
import { IoApps } from 'react-icons/io5'; // Import the icon from react-icons
import { MdHome } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { BiLogOutCircle } from "react-icons/bi";


export default function SideMenuPage() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showText, setShowText] = useState(false);

  // Use effect to control showing text based on expansion
  useEffect(() => {
    let timer;
    if (isExpanded) {
      setTimeout(()=>{
        setShowText(true); // Show text immediately when expanded
    },400)
    
    } else {
      timer = setTimeout(() => {
        setShowText(false); // Delay hiding text when collapsing
      }, 400); // Match this delay with the collapse animation duration
    }
    return () => clearTimeout(timer); // Cleanup timeout on unmount or state change
  }, [isExpanded]);

  const handleMouseOver = () => {
    setIsExpanded(true); // Expand the div on mouse over
  };

  const handleMouseLeave = () => {
    setShowText(false);
    setIsExpanded(false); // Shrink the div on mouse leave
  };

  return (
    <div
      className={`animated-div ${isExpanded ? 'expanded' : 'shrinked'}`}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      // style={{ width: isExpanded ? '300px' : '50px', transition: 'width 0.3s ease' }} // Inline width transition
    >
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <div>
            <IoApps color='#fff' size={25} style={{ margin: '0.5rem',float:"left" }} />
            {showText && <div style={{ fontSize: '18px', marginTop:"0.5rem", color: '#fff',float:"left" }}>Apps</div>}
          </div>
          <div style={{clear:"both"}}></div>
        </li>
        <li> <div>
            <MdHome color='#fff' size={25} style={{ margin: '0.5rem',float:"left" }} />
            {showText && <div style={{ fontSize: '18px', marginTop:"0.5rem", color: '#fff',float:"left" }}>Home</div>}
          </div>
          <div style={{clear:"both"}}></div></li>
        <li> <div>
            <FaCircleUser color='#fff' size={25} style={{ margin: '0.5rem',float:"left" }} />
            {showText && <div style={{ fontSize: '18px', marginTop:"0.5rem", color: '#fff',float:"left" }}>Profile</div>}
          </div>
          <div style={{clear:"both"}}></div></li>
          <li> <div>
            <IoIosSettings color='#fff' size={25} style={{ margin: '0.5rem',float:"left" }} />
            {showText && <div style={{ fontSize: '18px', marginTop:"0.5rem", color: '#fff',float:"left" }}>Settings</div>}
          </div>
          <div style={{clear:"both"}}></div></li>
          <li> <div>
            <BiLogOutCircle color='#fff' size={25} style={{ margin: '0.5rem',float:"left" }} />
            {showText && <div style={{ fontSize: '18px', marginTop:"0.5rem", color: '#fff',float:"left" }}>Logout</div>}
          </div>
          <div style={{clear:"both"}}></div></li> 
      </ul>
    </div>
  );
}