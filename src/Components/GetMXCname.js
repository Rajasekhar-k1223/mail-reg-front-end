import React from 'react'
import HeaderPage from './Header/HeaderPage'
import SideMenuPage from './SideMenuPage'

export default function GetMXCname() {
  return (
      <div>
          <HeaderPage />
          <SideMenuPage />
          <div style={{ width: "94%", position: "absolute", left: "4%", padding: "5rem" }}>
              getMXCname
          </div>
      
    </div>
  )
}
