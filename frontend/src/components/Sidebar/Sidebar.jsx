import React from 'react'
import './Sidebar.css'
import{
  FaTrash,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Dropdown from './Dropdown/Dropdown';
const Sidebar = ({children}) => {
  const[isOpen,setIsOpen]=useState(false);
  const[sdropdown,ssetDropdown]=useState(false);
  const toggle =()=> setIsOpen(!isOpen);
  
    const menuItem=[
      {
      path:"/",
      name:"dashboard",
      icon:<FaTrash/>
      },
      {
        path:"/about",
        name:"About",
        icon:<FaUserAlt/>

      },
      {
        path:"/analytics",
        name:"Analytics",
        icon:<FaRegChartBar/>
      },{
        path:"/comment",
        name:"Comment",
        icon:<FaCommentAlt/>
      },
      {
        path:"/products",
        name:"Product",
        icon:<FaShoppingBag/>
      }

    ]

    
  return (
    <>
    <div className='Scontainer'>
       <div className='sidebar' style={{width:isOpen?"300px":"50px",}}>
        <div className="top_section">
       <h1 className="logo"  style={{display:isOpen?"block":"none"}}>Logoooo</h1>
       <div className="bars" style={{marginLeft:isOpen?"50px":"0px"}}>
        <FaBars onClick={toggle}/>
       </div>
        </div>
        {
  menuItem.map((item, index) => (
    item.name === "Analytics" ? (
      <NavLink to={item.path} key={index} className="link" activeClassName="active"
      onMouseEnter={()=>ssetDropdown(true)}
      onMouseLeave={()=>ssetDropdown(false)}
      >
        <div className="icon">{item.icon}</div>
        <div className="link_text" style={{ display: isOpen ? "block" : "none" }}>
          {item.name}
        </div>
          {sdropdown&&<Dropdown values={isOpen} />}
      </NavLink>
    ) : (
      <NavLink to={item.path} key={index} className="link" activeClassName="active">
        <div className="icon">{item.icon}</div>
        <div className="link_text" style={{ display: isOpen ? "block" : "none" }}>
          {item.name}
        </div>
      </NavLink>
    )
  ))
}
  </div>
    <main>{children}</main>   
    </div>
    
    </>
    
  )
}

export default Sidebar
